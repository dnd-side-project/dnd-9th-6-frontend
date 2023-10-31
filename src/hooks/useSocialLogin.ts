'use client';

import { useRouter } from 'next/navigation';

import authApi from 'apis/auth';
import { ROUTES } from 'constants/routes';
import { USER_ACCESS_TOKEN, USER_REFRESH_TOKEN } from 'constants/account';
import { useMutation } from '@tanstack/react-query';
import { useUserActions } from 'auth/store/user';
import { useIsSignedIn } from 'auth/store';
import { setLocalStorage, setSessionStorage } from './storage';

type SocialLoginProps = {
  platform: string;
  code: string | null;
};

const useSocialLogin = () => {
  const router = useRouter();
  const isSignedIn = useIsSignedIn();
  const { setUserInfo } = useUserActions();
  const { mutate: signIn, isLoading: isSignInLoading } = useMutation(
    authApi.signIn,
    {
      onSuccess: ({ data: { data } }) => {
        const { accessToken, refreshToken, ...userInfoData } = data;
        setUserInfo(userInfoData);
        setLocalStorage(USER_ACCESS_TOKEN, accessToken);
        setSessionStorage(USER_REFRESH_TOKEN, refreshToken);
        router.push(ROUTES.HOME);
      },
      onError: () => {
        alert('로그인에 실패하였습니다.');
      },
    }
  );

  const signOut = () => authApi.signOut();

  return {
    signIn,
    signOut,
    isSignedIn,
    isSignInLoading,
  };
};

export type { SocialLoginProps };
export default useSocialLogin;
