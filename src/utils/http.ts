import { USER_ACCESS_TOKEN, USER_REFRESH_TOKEN } from 'constants/account';
import { getLocalStorage, getSessionStorage } from 'hooks/storage';

/**
 * Access Token이 만료되었는지 여부를 판단
 */
export const isAccessTokenExpired = () => {
  const accessToken = getLocalStorage(USER_ACCESS_TOKEN);
  return !accessToken;
};

/**
 * Refresh Token이 만료되었는지 여부를 판단
 */
export const isRefreshTokenExpired = () => {
  const refreshToken = getSessionStorage(USER_REFRESH_TOKEN);
  return !refreshToken;
};

/**
 *  모든 Token이 유효한지 여부를 판단
 */
export const isTokenNotExist = () => {
  const accessToken = getLocalStorage(USER_ACCESS_TOKEN);
  const refreshToken = getSessionStorage(USER_REFRESH_TOKEN);
  return !accessToken && !refreshToken;
};
