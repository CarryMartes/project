import axios from 'axios';
import { API_URL } from 'src/shared/api/config/';

// Потенциально, можно передавать accessToken
export const apiInstance = axios.create({
  baseURL: API_URL
});
