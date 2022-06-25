import * as actionTypes from './actionTypes';
import api from '../../../utils/api';

export const signIn = (email, password) => ({
  type: actionTypes.USER_SIGN_IN,
  payload: api.post('/users/login', {
    email: email,
    password: password,
  }),
});

export const signUp = (data) => ({
  type: actionTypes.USER_SIGN_UP,
  payload: api.post('/users', {
    name: data.name,
    email: data.email,
    password: data.password,
  }),
});