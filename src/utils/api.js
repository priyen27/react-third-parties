import axios from 'axios';

import { BASE_URL } from '../config';

const headers = {};
headers['Content-Type'] = 'application/json';
headers['Access-Control-Allow-Origin']="*";
headers['Access-Control-Allow-Credentials']=true;
const token = localStorage.getItem('token');
if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const axiosApi = axios.create({
  withCredentials: false,
  baseURL: `${BASE_URL}/`,
  headers,
});

axiosApi.interceptors.response.use((response) => response, (err) => {
  if (err.response && err.response.status === 401) {
    window.location.href = '/';
  }
  return Promise.reject(err);
});

export default axiosApi;
