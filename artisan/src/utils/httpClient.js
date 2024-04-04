import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://artisan-xqtv.onrender.com/', // Your API base URL here
});

httpClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default httpClient;
