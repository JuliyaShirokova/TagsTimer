import { TimerActions, UserActions } from '../actions/index';
import { timerTick } from '../actions'
const calculateProgress = (now, start) => {
  return Math.abs((now-start)/1000);
}

export default timerMiddleware = store => next => action => {
//    console.log('timer middleware action', action)
    if (action.type === UserActions.addTimerTags) {
      const id = action.id;
      const elem = store.getState().timer.timerStack[id];
      action.payload = {
        timerStart : elem.timerStart,
        timerStop  : elem.timerStop,
        interval   : elem.interval,
        progress   : elem.progress,
        tags       : action.tagsArr, 
      }
    }
    else if ( action.type === UserActions.add ) {
        action.newTimerId = Date.now().toString();
    }
    else if (action.type === TimerActions.start) {
      const id = action.id;

     // console.log('middleware start id=', id)
      
      const currentTime = new Date();
      
      action.payload = {
        timerStart: currentTime,
        timerStop: '',
        interval: setInterval(() => store.dispatch(timerTick( id )), 1000),
        progress: 0,
        tags: [],
      }
    } else if (action.type === TimerActions.tick){
    //  console.log('middleware tick id=', action)
     
      const id = action.id; 
      
      const currentTimer = store.getState().timer.timerStack[id];

      const currentStart = ( currentTimer ) ? currentTimer.timerStart : '';
      
      const currentStop = ( currentTimer ) ? currentTimer.timerStop : '';
      
      const currentInterval = ( currentTimer ) ? currentTimer.interval : null; 
      
      const currentTags = ( currentTimer ) ? currentTimer.tags : [];

      action.currentTime = new Date();
      
      action.payload = {
        timerStart: currentStart,
        timerStop: currentStop,
        interval: currentInterval,
        progress : calculateProgress( action.currentTime, currentStart ),
        tags: currentTags,
      }
    } else if (  action.type === TimerActions.stop 
              || action.type === TimerActions.pause ) {
                console.log('middleware stop id=', action)
    
                const id  = action.id;

                const currentTimer = store.getState().timer.timerStack[id];

                console.log('current timer', currentTimer);

                const currentStart = ( currentTimer ) ? currentTimer.timerStart : '';
                
                const currentTags = ( currentTimer ) ? currentTimer.tags : [];
          
               // console.log('middleware state', store.getState().timer.timerStack[action.id])
                
                action.currentTime = new Date();
                
                action.payload = {
                  timerStart: currentStart,
                  timerStop: action.currentTime,
                  interval: null,
                  progress : calculateProgress( action.currentTime, currentStart ),
                  tags: currentTags,
                }
                
                clearInterval(currentTimer.interval);

    } else if (action.type === TimerActions.reset){
                const id  = action.id;
                const currentTimer = store.getState().timer.timerStack[id];
                clearInterval(currentTimer.interval);
    }
    next(action);
  };
  