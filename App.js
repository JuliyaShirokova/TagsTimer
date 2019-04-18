import React, { Component } from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import Navigator from './src/AppNavigator';
import { store, persistor } from './src/config/store';
import LoadingScreen from './src/components/LoadingScreen';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={ <LoadingScreen /> } persistor={ persistor }>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}