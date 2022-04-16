import store from '../config/storage';
import { apiInstance } from './index';

const endpoints = {
  userList: '/users/',
  signUp: 'registration/',
  login: 'login/'
};

export const getUsersList = async (params) => {
  const res = await apiInstance.get(endpoints.userList, { params });
  if (res.data.message === 'Not Found') return Promise.reject(new Error('User Not found'));
  return Promise.resolve(res.data);
};

export const signUp = async (body) => {
  return apiInstance.post(endpoints.signUp, body);
};

export const login = async (body) => {
  const res = await apiInstance.post(endpoints.login, body);
  store.set('token', res.data.access);
  return res.data;
};
