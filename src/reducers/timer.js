import { REHYDRATE } from 'redux-persist';
import { TimerActions, UserActions, TagActions } from '../actions/index';

const initialTime = '';

const initialId = 'defaultId'

const initialTagsArr = [];

const initialPayload = {
  timerStart: initialTime,
  timerStop: initialTime,
  interval: null,
  progress: 0,
  tags: initialTagsArr,
}

const INITIAL_STATE = {
  tagsList: initialTagsArr,
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
      case TagActions.addTag:  
        return {
          tagsList : [
            ...state.tagsList,
            {
              [action.tagId] : action.tagValue
            }
          ],
          timerId : [
            ...state.timerId
          ],
          timerStack : {
            ...state.timerStack
          }
        }
      case TagActions.removeTag:  
        return {
          tagsList : state.tagsList.filter((item) => item != action.tagId),
          timerId : [
          ...state.timerId
          ],
          timerStack : {
            ...state.timerStack
          }
        }    
      case UserActions.add:  
        return {
          tagsList: [
            ...state.tagsList
          ],
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
          tagsList: [
            ...state.tagsList
          ],
          timerId : state.timerId.filter((item) => item != action.id),
          timerStack : {
            ...state.timerStack
          }
        } 
      case UserActions.addTimerTags:  
        return {
          tagsList: [
            ...state.tagsList
          ],
          timerId : [
            ...state.timerId
          ],
          timerStack : {
            ...state.timerStack,
            [action.id] : action.payload
          }
        } 
      case TimerActions.start:
        console.log('redurers timer START', action)
        return {
          tagsList: [
            ...state.tagsList
          ], 
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
          tagsList: [
            ...state.tagsList
          ],
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
          tagsList: [
            ...state.tagsList
          ],
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
          tagsList: [
            ...state.tagsList
          ],
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
          tagsList: [
            ...state.tagsList
          ],
          timerId: [
            ...state.timerId
          ],
          timerStack: {
            ...state.timerStack,
          [action.id]: INITIAL_STATE
          }
        }
      default:
        return {
          ...state
        }
    }
  }