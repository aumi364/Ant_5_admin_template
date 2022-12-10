import axios from 'axios';
import { authStore } from '../store/auth';
import { baseApiUrl } from './endpoints';

const http = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // TODO: Figure out how to get value from cookie here. Cookie key - `csrftoken`
    // 'X-CSRFToken': 'nTM1hF1ookTaKMIuWRUNs1APFiGmxLFi',
    // 'Access-Control-Allow-Credentials': true,
  },
  baseURL: baseApiUrl,
  // withCredentials: true,
});

http.interceptors.request.use(config => {
  const token = authStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

http.interceptors.response.use(null, function (error) {
  if (error?.response?.status === 440) {
    const logout = authStore.getState().logout;
    logout();
    return;
    // window.location.href = '/login';
  }
  // errorHandler(error?.response?.data);
  return Promise.reject(error);
});

export default http;
