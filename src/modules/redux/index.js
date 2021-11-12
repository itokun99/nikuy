import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionTypes from './actionTypes';
/**
 * ======================================
 * REDUCER
 * ======================================
 */
import account from './account/reducer';
import loading from './loading/reducer';

const reducer = combineReducers({
  account,
  loading
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
export * from './loading/action';

/**
 * ======================================
 * SELECTOR
 * ======================================
 */
export * from './account/selector';
export * from './loading/selector';