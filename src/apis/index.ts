import axios, { AxiosResponse } from 'axios';
import { getCookie } from 'cookies-next';

import { HTTP_BASE_URL } from 'constants/http';

const instance = axios.create({
  baseURL: HTTP_BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': `https://www.classcope.co.kr`,
    'Access-Control-Allow-Credentials': 'true',
  },
  withCredentials: true,
});

export const logOnDev = (message: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message);
  }
};

instance.interceptors.request.use(
  config => {
    const accessToken = getCookie('access_token');
    config.headers.Authorization = `Bearer ${accessToken || ''}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { method, url } = response.config;
    const { status } = response;

    logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}}`);

    return response.data.data;
  },

  error => {
    const { message } = error;
    const { method, url } = error.config;
    const { status, statusText } = error.response;

    logOnDev(
      `🚀 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${statusText} | ${message}}`
    );

    return Promise.reject(error);
  }
);

export default instance;
