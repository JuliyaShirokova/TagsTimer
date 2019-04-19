
export const timerStart = (id) => {
  console.log('actions timerStart id=', id)
  return {
    type: TimerActions.start,
    id
  }
}
export const timerTick = ( id ) => { 
  console.log('action timerTick id=', id)
  return { 
    type: TimerActions.tick,
    id
  }
}
export const timerStop = ( id ) => {  
  console.log('action timerStop id=', id);
  return {
    type: TimerActions.stop,
    id
  }
}

export const timerReset = ( id ) => { 
  return {
    type: TimerActions.reset,
    id
  }
}

export const timerPause = ( id ) => {  
  return { 
    type: TimerActions.pause,
    id
  }
}

export const addTimer = () => {
  return {
    type: UserActions.add
  }
}

export const removeTimer = ( id ) => {
  return {
    type: UserActions.remove,
    id
  }
}

export const addTimerTags = ( param ) => {
  return {
    type    : UserActions.addTimerTags,
    id      : param.id, 
    tagsArr : param.tags
  }
}

export const addTag = () => {
  return {
    type: TagActions.addTag,
    tagId
  }
}

export const removeTag = ( tagId ) => {
  return {
    type: TagActions.removeTag,
    tagId
  }
}

export const TagActions = {
  addTag: 'ADD_TAG',
  removeTag: 'REMOVE_TAG'
}

export const UserActions = {
  add: 'ADD_TIMER',
  remove: 'REMOVE_TIMER',
  addTimerTags: 'ADD_TIMER_TAGS'
}

export const TimerActions = {
   start: 'TIMER_START',
   stop:  'TIMER_STOP',
   reset: 'TIMER_RESET',
   pause: 'TIMER_PAUSE',
   tick:  'TIMER_TICK'
}