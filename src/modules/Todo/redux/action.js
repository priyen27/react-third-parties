import * as actionTypes from './actionTypes';

export const getTodoData = (data) => ({
    type: actionTypes.SET_DATA_FOR_TODO,
    payload: data,
});