import actionTypes from '../actionTypes';

/**
 * @name setAlert
 * @description action reducer for set alert option props
 * @param {*} value
 */
export const setAlert = value => ({
  type: actionTypes.alert.SET_ALERT,
  value
});

/**
 * @name clearAlert
 * @description action reducer untuk mengembalikan nilai alert
 */
export const clearAlert = () => ({
  type: actionTypes.alert.CLEAR_ALERT
});

/**
 * @name setSimpleAlert
 * @description action untuk memunculkan komponen simple alert pada simple layout
 * @param {*} value
 */
export const setSimpleAlert = value => ({
  type: actionTypes.alert.SET_SIMPLE_ALERT,
  value
});

/**
 * @name setSimpleAlert
 * @description action untuk mereset komponen simple alert pada simple layout
 * @param {*} value
 */
export const clearSimpleAlert = () => ({
  type: actionTypes.alert.CLEAR_SIMPLE_ALERT
});