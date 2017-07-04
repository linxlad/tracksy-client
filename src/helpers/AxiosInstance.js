import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 1000000,
  headers: {'Content-Type': 'application/json'},
  responseType: 'json'
});

export default axiosInstance;