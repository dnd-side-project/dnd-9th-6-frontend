'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import useSocialLogin from 'hooks/useSocialLogin';

const GoogleLogin = () => {
  const searchParams = useSearchParams();
  const code = searchParams?.get('code') ?? '';
  const { signIn, isLoading } = useSocialLogin({
    platform: 'GOOGLE',
    code,
  });
  useEffect(() => {
    if (!code) return;
    async function fetchData() {
      await signIn();
    }
    fetchData();
  }, []);
  if (isLoading) return <div>로그인 중</div>;
  return <div>로그인 완료</div>;
};
export default GoogleLogin;
