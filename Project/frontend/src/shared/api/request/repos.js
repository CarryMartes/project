import { apiInstance } from './index';

const endpoints = {
  repositories: 'repositories/'
};

export const getRepositories = async (params) => {
  const res = await apiInstance.get(endpoints.repositories, { params });
  return Promise.resolve(res.data);
};
