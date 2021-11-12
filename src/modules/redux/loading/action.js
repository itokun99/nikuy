import actionTypes from '../actionTypes';

export const setScreenLoading = value => ({
  type: actionTypes.loading.SET_SCREEN_LOADING,
  value
});