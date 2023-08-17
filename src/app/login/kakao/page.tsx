'use client';
import authApi from '@/apis/auth';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const page = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  useEffect(() => {
    async function fetchData() {
      if (!code) return;
      await authApi.signIn('KAKAO_LOGIN', code);
    }
    fetchData();
  }, [code]);
  return <div>로그인 중</div>;
};
export default page;
