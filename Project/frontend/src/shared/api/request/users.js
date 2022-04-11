import { apiInstance } from './index';

const BASE_URL = '/users/';

export const getUsersList = (params) => {
  return apiInstance.get(BASE_URL, { params });
};
