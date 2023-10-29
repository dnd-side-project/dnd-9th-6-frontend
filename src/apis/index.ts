import axios, { AxiosError, AxiosResponse } from 'axios';

import { HTTP_BASE_URL } from 'constants/http';
import { ROUTES } from 'constants/routes';

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
    logOnDev(
      `🚀 [API] ${config.method?.toUpperCase()} ${config.url} | Request`
    );

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse<GlobalResponse>) => {
    const { status, config } = response;
    const { method, url } = config;

    logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);

    return response;
  },

  async (error: AxiosError<GlobalResponse>) => {
    const { response } = error;
    const { code, message } = response?.data || {};

    // 강의 id가 없는 경우, 존재하지 않는 강의, (메인, 서브)카테고리,
    if (
      code === -1 ||
      code === -2000 ||
      code === -2001 ||
      code === -2002 ||
      code === -2003
    ) {
      alert(message);
      window.location.replace(`${ROUTES.LECTURES}`);
    }
    // 존재하지 않는 사용자인 경우
    if (code === -1000) {
      window.location.replace(`${ROUTES.LOGIN}`);
    }
    return Promise.reject(error);
  }
);

export default instance;
