import * as actionTypes from './actionTypes';
import RequestStates from '../../../utils/request-states';

const INITIAL_STATE = {
  getUserRequestStates: RequestStates.init,
  getUserError: null,
  userInfo: {},
  signupRequestStates: RequestStates.init,
  signupError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGN_IN_LOADING:
      return {
        ...state,
        getUserRequestStates: RequestStates.loading,
        getUserError: null,
      };
    case actionTypes.USER_SIGN_IN_SUCCESS:
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        getUserRequestStates: RequestStates.success,
        getUserError: null,
        userInfo: action.payload && action.payload.data.user,
      };

    case actionTypes.USER_SIGN_IN_ERROR:
      return {
        ...state,
        getUserRequestStates: RequestStates.error,
        getUserError: action.payload,
      };
      case actionTypes.USER_SIGN_UP_LOADING:
      return {
        ...state,
        signupRequestStates: RequestStates.loading,
        signupError: null,
      };
    case actionTypes.USER_SIGN_UP_SUCCESS:
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        signupRequestStates: RequestStates.success,
        signupError: null,
      };

    case actionTypes.USER_SIGN_UP_ERROR:
      return {
        ...state,
        signupRequestStates: RequestStates.error,
        signupError: action.payload,
      };
    default:
      return state;
  }
};
