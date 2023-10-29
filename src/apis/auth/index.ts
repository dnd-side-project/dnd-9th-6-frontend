import { UserInfo } from 'recoil/types/user';
import { AUTH_API } from 'constants/api';
import instance from '..';

/**
 * Access Token & Refresh Token
 */
interface JwtToken {
  accessToken: string;
  refreshToken: string;
}

/**
 * 회원가입 Response 응답 데이터
 */
interface SignInResponse extends GlobalResponse {
  data: JwtToken & UserInfo;
}

interface LoginRequestParams {
  code: string;
  platform: string;
}

const authApi = {
  /**
   *
   * @param code 구글/카카오 code
   * @param platform 구글/카카오
   * @description 회원가입 또는 로그인하여 accessToken 발급
   */
  signIn: async (params: LoginRequestParams) => {
    return instance.get<SignInResponse>(`${AUTH_API.SIGN_IN}`, {
      params,
    });
  },
};

export type { JwtToken, SignInResponse, LoginRequestParams };
export default authApi;
