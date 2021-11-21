import actionTypes from '../actionTypes';

const initialState = {
  invitation: {
    loading: false,
    error: false,
    data: []
  }
};

const invitation = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.invitation.SET_INVITATION:
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

export default invitation;