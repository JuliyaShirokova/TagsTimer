import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import timerMiddleware from '../middlewareFunctions/timerMiddleware';
import rootReducer from '../reducers/index';
import {persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const config = {
    key: 'primary',
    storage,
    debug: true,
    debounce: 10000,
    stateReconciler: autoMergeLevel2,
    whitelist: ['timer'],
}

const persistedReducer = persistReducer(config, rootReducer );
  
export const store = compose(
    applyMiddleware(logger),
    applyMiddleware(timerMiddleware),
)(createStore)(persistedReducer);
  
export const persistor = persistStore(
    store,
    null,
    () => {
      store.getState() // if you want to get restoredState
    }
);
