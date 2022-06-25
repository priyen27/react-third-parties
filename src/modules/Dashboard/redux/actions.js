import * as actionTypes from './actionTypes';
import api from '../../../utils/api';

export const getAllBooks = () => ({
  type: actionTypes.GET_ALL_BOOKS,
  payload: api.get('/book'),
});