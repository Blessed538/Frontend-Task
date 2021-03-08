import combineReducers from './CombinedReducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

const middlewares = [logger, thunk];
const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
