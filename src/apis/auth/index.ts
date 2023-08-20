import instance from '..';
import { UserInfo } from 'recoil/types/user';
import { AUTH_API } from 'constants/api';

/**
 * Access Token & Refresh Token
 */
type JwtToken = {
  accessToken: string;
  refreshToken: string;
};

/**
 * 회원가입 Response 응답 데이터
 */
type SignInData = UserInfo & JwtToken;

const authApi = {
  /**
   *
   * @param code 구글/카카오 code
   * @param platform 구글/카카오
   * @description 회원가입 또는 로그인하여 accessToken 발급
   */
  signIn: (platform: string, code: string | null) =>
    instance.get<string, SignInData>(
      `${AUTH_API.SIGN_IN}?code=${code}&platform=${platform}`,
    ),
};

export type { JwtToken, SignInData };
export default authApi;
