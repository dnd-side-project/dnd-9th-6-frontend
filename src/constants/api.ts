export const AUTH_API = {
  SIGN_IN: '/auth/signin',
  REISSUE: '/auth/reissue',
  WITHDRAW: '/auth/withdraw',
  SIGN_OUT: '/auth/signout',
} as const;

export const USER_API = {
  GET_USER_INFO: '/auth',
  UPDATE_USER_INFO: '/auth',
  POST_INTERESTS: '/auth',
} as const;
