import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import reducers from '../reducers';
import rootSaga from '../config/sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  createReactNavigationReduxMiddleware('root', state => state.nav),
  sagaMiddleware,
];
export const addListener = createReduxBoundAddListener('root');

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
