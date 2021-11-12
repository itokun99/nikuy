import actionTypes from '../actionTypes';

const initialState = {
  screenLoading: {
    title: 'Loading',
    visible: false
  }
};

export default function loading(state = initialState, action) {
  switch (action.type) {
    case actionTypes.loading.SET_SCREEN_LOADING:
      return {
        ...state,
        screenLoading: {
          ...state.screenLoading,
          ...action.value
        }
      };
    default:
      return state;
  }
}