import AppNavigator from '../AppNavigator';
import { NavigationActions } from 'react-navigation';

const initialAction = { type: NavigationActions.INIT };
const initialState = AppNavigator ? AppNavigator.router.getStateForAction({ type: NavigationActions.INIT }) : null;

export default (state = initialState, action) => {
  console.log(AppNavigator);
  let newState = AppNavigator ? AppNavigator.router.getStateForAction(action, state) : null

  if (action.params && action.params.replace) {
    // In order to replace the previous route
    // we'll remove the item at index - 1 and then decrement the index.
    newState.routes.splice(newState.index - 1, 1)
    newState.index--
  }

  newState && newState.routes.forEach((route, i) => {
    if (!route.params) route.params = {}
    if (i === newState.index) route.params.active = true
    else route.params.active = false
  })

  return newState
}