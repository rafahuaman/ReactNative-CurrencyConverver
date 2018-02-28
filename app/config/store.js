import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import reducers from '../reducers';

const middlewares = [createReactNavigationReduxMiddleware('root', state => state.nav)];
export const addListener = createReduxBoundAddListener('root');

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(reducers, applyMiddleware(...middlewares));
