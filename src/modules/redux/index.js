import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionTypes from './actionTypes';
/**
 * ======================================
 * REDUCER
 * ======================================
 */
import account from './account/reducer';

const reducer = combineReducers({
  account
});

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
export * from './account/action';

/**
 * ======================================
 * SELECTOR
 * ======================================
 */
export * from './account/selector';