export const HTTP_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const HTTP_STATUS_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  GATEWAY_TIMEOUT: 504,
} as const;

export const HTTP_RESPONSE_ERROR_DATA = {
  ACCESS_TOKEN_EXPIRED: {
    TITLE: 'AccessTokenExpired',
    MESSAGE: 'AccessToken expired',
  },
  REFRESH_TOKEN_EXPIRED: {
    TITLE: 'RefreshTokenExpired',
    MESSAGE: 'RefreshToken expired',
  },
  TOKEN_NOT_EXIST: {
    TITLE: 'NoAuthTokenException',
    MESSAGE: 'No Auth Token Exception',
  },
} as const;
