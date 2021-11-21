import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionTypes from './actionTypes';
/**
 * ======================================
 * REDUCER
 * ======================================
 */
import account from './account/reducer';
import alert from './alert/reducer';
import loading from './loading/reducer';
import invitation from './invitation/reducer';
import myinvitation from './myinvitation/reducer';

const reducer = combineReducers({
  alert,
  account,
  loading,
  invitation,
  myinvitation
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
export * from './alert/action';
export * from './loading/action';
export * from './myinvitation/action';
export * from './invitation/action';

/**
 * ======================================
 * SELECTOR
 * ======================================
 */
export * from './account/selector';
export * from './alert/selector';
export * from './loading/selector';
export * from './myinvitation/selector';
export * from './invitation/selector';