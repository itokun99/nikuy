import actionTypes from '../actionTypes';

const initialState = {
  profile: null
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case actionTypes.account.SET_PROFILE:
      return {
        ...state,
        profile: action.value
      };
    case actionTypes.auth.LOGOUT:
      return initialState;
    default:
      return state;
  }
}