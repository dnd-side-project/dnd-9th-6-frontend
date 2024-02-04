'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OnlyPCSupport from 'components/OnlyPCSupport/OnlyPCSupport';
import { USER_ACCESS_TOKEN, USER_INFO } from 'constants/account';
import { getLocalStorage } from 'hooks/storage';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { useAuthActions } from 'store/auth';
import { useUserActions, useUserInfo } from 'store/user';

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isNotPC = useMediaQuery('(max-width: 1024px)');
  const accessToken = getLocalStorage(USER_ACCESS_TOKEN);
  const user = getLocalStorage(USER_INFO);
  const { setIsSignedIn, setIsRequesting } = useAuthActions();
  const { setUserInfo } = useUserActions();
  const { interests } = useUserInfo();

  useEffect(() => {
    if (user && accessToken) {
      setUserInfo({ ...JSON.parse(user) });
      setIsRequesting(false);
      setIsSignedIn(true);
      return;
    }
    setIsRequesting(false);
  }, [accessToken, interests.length, router, setIsRequesting, setIsSignedIn, setUserInfo, user]);

  return (
    <>
      {isNotPC && <OnlyPCSupport />}
      {children}
    </>
  );
}
