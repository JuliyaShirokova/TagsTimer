import { REHYDRATE } from 'redux-persist';
import { TimerActions, UserActions, TagActions } from '../actions/index';

const initialTime = '';
const initialId = 'default'
const initialPayload = {
  timerStart: initialTime,
  timerStop: initialTime,
  interval: null,
  progress: 0,
  tags: [],
}

const INITIAL_STATE = {
  tagsList: [],
  timerId: [initialId],
  timerStack: {
    [initialId] : initialPayload
  }
};

export default (state = INITIAL_STATE, action) => {
  //console.log('ACTION', action);
    switch (action.type) {
      case REHYDRATE:
        console.log('redurers timer REHYDRATE')
        return {
          ...INITIAL_STATE
        }
      case UserActions.add:  
        return {
          timerId : [
                ...state.timerId,
                action.newTimerId
            ],
            timerStack : {
              ...state.timerStack,
              [action.newTimerId] : initialPayload
            }
          }  
      case UserActions.remove:  
        return {
          timerId : state.timerId.filter((item) => item != action.id),
          timerStack : {
            ...state.timerStack
          }
        }  
      case TagActions.addTag:  
        return {
          timerId : [
            ...state.timerId
          ],
          timerStack : {
            ...state.timerStack
          }
        }  
      case TimerActions.start:
        console.log('redurers timer START', action)
        return { 
          timerId : [
            ...state.timerId,
            action.id],
          timerStack: {
            ...state.timerStack,
            [action.id]: action.payload},
        }
      case TimerActions.tick:
        console.log('redurers timer TICK', action);
        return {
          timerId: [
            ...state.timerId
          ],
          timerStack: {
            ...state.timerStack,
            [action.id]: action.payload
          }
        } 
      case TimerActions.pause:
        console.log('redurers timer PAUSE', action);
      
        return {
          timerId: [
            ...state.timerId
          ],
          timerStack: {
            ...state.timerStack,
            [action.id]: action.payload
          }} 
      case TimerActions.stop:
        console.log('redurers timer STOP', action);
      
        return {
          timerId: [
            ...state.timerId
          ],
          timerStack: {
            ...state.timerStack,
            [action.id]: action.payload
          }}
          
      case TimerActions.reset:
        console.log('redurers timer RESET', action);
        return {
            timerId: [
              ...state.timerId
            ],
            timerStack: {
              ...state.timerStack,
            [action.id]: INITIAL_STATE
          }}
      default:
        return {
          ...state
        }
    }
  }