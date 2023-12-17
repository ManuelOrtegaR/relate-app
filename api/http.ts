import axios from 'axios';
import { clearSession, getSession } from './session';

const instance = axios.create({
  baseURL: "http://192.168.20.27:3000/api",
});

instance.interceptors.request.use(
  async function (config) {
    // Do something before request is sent

    // Append token in Authorization header if is present
    const token = await getSession();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response?.status === 401) {
      await clearSession();
      // TODO: window.location.assign('/signin');
    }

    // Procesar los errores de todas las respuestas del backend
    // en un solo lugar

    if (error.response.data.error) {
      return Promise.reject(error.response.data.error);
    }

    return Promise.reject(error);
  },
);

export default instance;
