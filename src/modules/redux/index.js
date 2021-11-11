import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionTypes from './actionTypes';
/**
 * ======================================
 * REDUCER
 * ======================================
 */

const reducer = combineReducers({});

/**
 * ======================================
 * MIDDLEWARE
 * ======================================
 */

const middleware = [];

/**
 * ======================================
 * STORE
 * ======================================
 */

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store, actionTypes };

/**
 * ======================================
 * ACTION / DISPATCHER
 * ======================================
 */

/**
 * ======================================
 * SELECTOR
 * ======================================
 */