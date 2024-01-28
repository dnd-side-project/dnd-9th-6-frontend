import axios, { AxiosError, AxiosResponse } from 'axios';
import { USER_ACCESS_TOKEN, USER_REFRESH_TOKEN } from 'constants/account';
import { HTTP_BASE_URL } from 'constants/http';
import { ROUTES } from 'constants/routes';
import { clearLocalStorage, getLocalStorage } from 'hooks/storage';
import { isAccessTokenExpired, isRefreshTokenExpired } from 'utils/http';

import authApi from './auth';

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

let tryCount = 0;
const accessTokenExpired = async () => {
  try {
    await authApi.getUserInfo();
  } catch (e) {
    window.location.replace(`${ROUTES.LOGIN}`);
    clearLocalStorage();
    alert('로그인이 필요합니다.');
  }
};

instance.interceptors.request.use(
  (config) => {
    logOnDev(`🚀 [API] ${config.method?.toUpperCase()} ${config.url} | Request`);

    if (!config.headers.Authorization) {
      const accessToken = getLocalStorage(USER_ACCESS_TOKEN);
      if (accessToken) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error) => {
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
    const { code } = response?.data || {};
    /**
     * @description Access Token이 만료될 경우 Refresh Token으로 재발급하여 api 요청을 그대로 진행
     */
    if (response?.data.code === -1) {
      tryCount += 1;
      if (tryCount > 1) {
        tryCount = 0;
        return Promise.reject(error);
      }
      accessTokenExpired();
    }

    if (isAccessTokenExpired() && !isRefreshTokenExpired()) {
      const refreshToken = getLocalStorage(USER_REFRESH_TOKEN);
      await authApi.reIssue(refreshToken as string);
      if (response?.config) return axios(response?.config);
    }

    // 강의 id가 없는 경우, 존재하지 않는 강의, (메인, 서브)카테고리,
    if (code === -2000 || code === -2001 || code === -2002 || code === -2003) {
      window.location.replace(`${ROUTES.LECTURES}`);
    }

    // 존재하지 않는 사용자인 경우
    if (code === -1000) {
      window.location.replace(`${ROUTES.LOGIN}`);
    }

    return Promise.reject(error);
  }
);

const accessToken = getLocalStorage(USER_ACCESS_TOKEN);

if (accessToken) {
  instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

export default instance;
