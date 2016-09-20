import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers/index';
import createLogger from 'redux-logger';
import { syncHistory } from 'redux-simple-router';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(
  createLogger(),
  thunk
)(createStore);

export default createStoreWithMiddleware(rootReducer);
