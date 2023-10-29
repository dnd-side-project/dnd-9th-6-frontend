'use client';

import { useRouter } from 'next/navigation';

import authApi from 'apis/auth';
import { ROUTES } from 'constants/routes';
import { UserInfo } from 'recoil/types/user';
import { USER_ID, USER_TOKEN } from 'constants/account';
import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { userInfo } from 'recoil/atoms';
import { setLocalStorage } from './storage';

type SocialLoginProps = {
  platform: string;
  code: string | null;
};

const useSocialLogin = () => {
  const router = useRouter();
  const setUserInfo = useSetRecoilState(userInfo);

  const { mutate: signIn, isLoading: isSignInLoading } = useMutation(
    authApi.signIn,
    {
      onSuccess: ({ data: { data } }) => {
        const { accessToken, refreshToken, ...userInfoData } = data;
        setUserInfo(userInfoData);
        saveLoginInfo(accessToken, userInfoData.id);
        router.push(ROUTES.HOME);
      },
      onError: () => {
        alert('로그인에 실패하였습니다.');
      },
    }
  );

  const saveLoginInfo = (accessToken: string, userId: UserInfo['id']) => {
    setLocalStorage(USER_TOKEN, accessToken);
    setLocalStorage(USER_ID, userId);
  };

  return {
    signIn,
    isSignInLoading,
  };
};

export type { SocialLoginProps };
export default useSocialLogin;
