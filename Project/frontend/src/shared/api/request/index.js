import axios from 'axios';
import { API_URL } from 'src/shared/api/config/';

// Потенциально, можно передавать accessToken
const apiInstance = axios.create({
  baseURL: API_URL
});
apiInstance.interceptors.request.use(function (config) {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return {
    ...config
  };
});

export { apiInstance };
