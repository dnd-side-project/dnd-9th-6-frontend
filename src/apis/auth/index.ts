import { AUTH_API } from '@/constants/api';
import { fetchExtended } from '..';

const authApi = {
  /**
   *
   * @param code 카카오/구글에서 발급받은 code
   * @description 회원가입/로그인하여 accessToken 발급
   */
  signIn: (platform: string, code: string) => {
    fetchExtended(
      `${AUTH_API[platform as keyof typeof AUTH_API]}?code=${code}`,
      {
        method: 'GET',
      },
    ).then(it => {
      console.log(it.body);
    });
  },
};

export default authApi;
