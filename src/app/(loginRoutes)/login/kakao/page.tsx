'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import LoadingAnimation from 'assets/icons/loading.gif';

import useSocialLogin from 'hooks/useSocialLogin';
import Image from 'next/image';

const GoogleLogin = () => {
  const searchParams = useSearchParams();
  const code = searchParams?.get('code') ?? '';
  const { signIn, isLoading } = useSocialLogin({
    platform: 'KAKAO',
    code,
  });
  useEffect(() => {
    if (!code) return;
    async function fetchData() {
      await signIn();
    }
    fetchData();
  }, []);
  if (isLoading)
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-16">
        <Image src={LoadingAnimation} width={70} height={70} alt="loading" />
        <div className="text-grayscale-800 body1-semibold">
          로그인중입니다...
        </div>
      </div>
    );
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-16">
      <Image src={LoadingAnimation} width={70} height={70} alt="loading" />
      <div className="text-grayscale-800 body1-semibold">로그인 완료</div>
    </div>
  );
};
export default GoogleLogin;
