import actionTypes from '../actionTypes';

const initialState = {
  invitation: {
    loading: false,
    error: false,
    data: []
  }
};

const myinvitation = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.myinvitation.SET_MYINVITATION:
      return {
        ...state,
        invitation: {
          ...state.invitation,
          ...action.value
        }
      };
    case actionTypes.auth.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default myinvitation;