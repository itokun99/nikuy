import {
  store, setScreenLoading, setAlert, clearAlert
} from 'modules';

export const screenLoading = (visible = true, option = {}) => {
  store.dispatch(setScreenLoading({
    visible,
    ...option
  }));
};

/**
 * @name showAlert
 * @description a service for set alert data
 * @param {*} payload
 */
export const alert = payload => {
  store.dispatch(setAlert({
    visible: true,
    ...payload
  }));
};

/**
 * @name resetAlert
 * @description a service for clear alert data
 * @param {*} payload
 */
export const resetAlert = () => {
  store.dispatch(clearAlert());
};