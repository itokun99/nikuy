import actionTypes from '../actionTypes';

export const setProfile = value => ({
  type: actionTypes.account.SET_PROFILE,
  value
});

export const setLogout = () => ({
  type: actionTypes.auth.LOGOUT
});