import * as actionTypes from './actionTypes';
import RequestStates from '../../../utils/request-states';

const INITIAL_STATE = {
  getBooksRequestStates: RequestStates.init,
  getBooksError: null,
  books: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case actionTypes.GET_ALL_BOOKS_LOADING:
      return {
        ...state,
        getBooksRequestStates: RequestStates.loading,
        getBooksError: null,
      };
    case actionTypes.GET_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        getBooksRequestStates: RequestStates.success,
        getBooksError: null,
        books: action.payload && (action.payload.data ? action.payload.data : []),
      };

    case actionTypes.GET_ALL_BOOKS_ERROR:
      return {
        ...state,
        getBooksRequestStates: RequestStates.error,
        getBooksError: action.payload,
      };
    default:
      return state;
  }
};
