import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import app from './app';

/**
 * The root reducer for this application.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export default combineReducers({
  app,
  routing: routeReducer
});
