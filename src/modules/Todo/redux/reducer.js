import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    todoList : []
  };

  export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case actionTypes.SET_DATA_FOR_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
            default:
                return state;
    }

  };