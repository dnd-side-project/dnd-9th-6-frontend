'use client';

import { useRouter } from 'next/navigation';
import authApi from 'apis/auth';
import { USER_ACCESS_TOKEN, USER_INFO, USER_REFRESH_TOKEN } from 'constants/account';
import { ROUTES } from 'constants/routes';
import { useAuthActions, useIsSignedIn } from 'store/auth';
import { useUserActions } from 'store/user';

import { useMutation } from '@tanstack/react-query';

import { setLocalStorage } from './storage';

type SocialLoginProps = {
  platform: string;
  code: string | null;
};

const useSocialLogin = () => {
  const router = useRouter();
  const isSignedIn = useIsSignedIn();
  const { setIsTokenRequired, setIsSignedIn, setIsRequesting } = useAuthActions();
  const { setUserInfo } = useUserActions();
  const { mutate: signIn, isLoading: isSignInLoading } = useMutation(authApi.signIn, {
    onSuccess: ({ data: { data } }) => {
      const { accessToken, refreshToken, ...userInfoData } = data;
      setUserInfo(userInfoData);
      setLocalStorage(USER_INFO, JSON.stringify(userInfoData));
      setLocalStorage(USER_ACCESS_TOKEN, accessToken);
      setLocalStorage(USER_REFRESH_TOKEN, refreshToken);
      setIsSignedIn(true);
      setIsTokenRequired(false);
      setIsRequesting(false);
      router.push(ROUTES.HOME);
    },
    onError: () => {
      alert('로그인에 실패하였습니다.');
    },
  });

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
