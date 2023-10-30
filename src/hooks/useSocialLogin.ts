'use client';

import { useRouter } from 'next/navigation';

import authApi from 'apis/auth';
import { ROUTES } from 'constants/routes';
import { USER_ID, USER_TOKEN } from 'constants/account';
import { useMutation } from '@tanstack/react-query';

type SocialLoginProps = {
  platform: string;
  code: string | null;
};

const useSocialLogin = () => {
  const router = useRouter();

  const { mutate: signIn, isLoading: isSignInLoading } = useMutation(
    authApi.signIn,
    {
      onSuccess: ({ data: { data } }) => {
        const { accessToken, refreshToken, ...userInfoData } = data;
        router.push(ROUTES.HOME);
      },
      onError: () => {
        alert('로그인에 실패하였습니다.');
      },
    }
  );

  return {
    signIn,
    isSignInLoading,
  };
};

export type { SocialLoginProps };
export default useSocialLogin;
