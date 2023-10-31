import { UserInfo } from 'auth/store/types/user';

/**
 * Token
 */

export interface AccessToken {
  accessToken: string;
}

export interface RefreshToken {
  refreshToken: string;
}

export type Token = AccessToken & RefreshToken;

/**
 * 회원가입 데이터
 */
export type SignInData = UserInfo & Token;
