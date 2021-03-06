import { apiInstance } from './index';

const endpoints = {
  subjects: 'subjects/',
  user_subjects: 'user_subjects/'
};

export const getSubjects = async (params) => {
  const res = await apiInstance.get(endpoints.subjects, { params });
  return Promise.resolve(res.data);
};

export const userSubjects = async (params) => {
  const res = await apiInstance.get(endpoints.user_subjects, { params });
  return res.data;
};

export const addSubjects = async (params) => {
  const res = await apiInstance.post(endpoints.user_subjects, { ...params });
  return Promise.resolve(res);
};

export const getSubject = async (id) => {
  const res = await apiInstance.get(endpoints.subjects + `${id}`);
  return res.data;
};
