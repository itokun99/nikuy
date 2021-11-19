import actionTypes from '../actionTypes';

const initialState = {
  alert: {
    visible: false,
    title: null,
    message: null,
    leftButtonTitle: null,
    rightButtonTitle: 'Ok'
  },
  simpleAlert: {
    visible: false,
    message: null,
    onClose: null,
    color: 'secondary'
  }
};

const alert = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.alert.SET_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          ...action.value
        }
      };
    case actionTypes.alert.CLEAR_ALERT:
      return {
        ...state,
        alert: initialState.alert
      };
    case actionTypes.alert.SET_SIMPLE_ALERT:
      return {
        ...state,
        simpleAlert: {
          ...state.simpleAlert,
          ...action.value
        }
      };
    case actionTypes.alert.CLEAR_SIMPLE_ALERT:
      return {
        ...state,
        simpleAlert: initialState.simpleAlert
      };
    default:
      return state;
  }
};

export default alert;