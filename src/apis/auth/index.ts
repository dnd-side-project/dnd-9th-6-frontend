import { AUTH_API } from 'constants/api';
import { RefreshToken } from 'auth/types/auth';
import instance from 'apis';
import { SignInResponse } from './types';

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
  /**
   *
   * @description cookie에 담겨있는 refreshToken을 활용하여 accessToken 재발급
   */
  reIssue: (param: RefreshToken['refreshToken']) =>
    instance.post<RefreshToken>(AUTH_API.REISSUE, { param }),
  /**
   *
   * @description refreshToken을 전달하여 회원 탈퇴
   */
  withDraw: () => instance.delete(AUTH_API.WITHDRAW),
  /**
   * @description 로그아웃
   */
  signOut: async () => {
    return instance.delete(`${AUTH_API.SIGN_OUT}`);
  },
};

export default authApi;
