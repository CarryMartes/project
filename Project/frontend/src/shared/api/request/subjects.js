import { apiInstance } from './index';

const endpoints = {
  subjects: 'subjects/'
};

export const getSubjects = async (params) => {
  const res = await apiInstance.get(endpoints.subjects, { params });
  return Promise.resolve(res.data);
};

export const addSubjects = async (params) => {
  const res = await apiInstance.post(endpoints.subjects, { params });
  return Promise.resolve(res);
};
