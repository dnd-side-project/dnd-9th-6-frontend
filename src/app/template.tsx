'use client';

import OnlyPCSupport from 'components/OnlyPCSupport/OnlyPCSupport';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { USER_ACCESS_TOKEN } from 'constants/account';
import { useEffect } from 'react';
import userApi from 'apis/user';
import { getLocalStorage } from 'hooks/storage';
import { useAuthActions } from 'store/auth';
import { useUserActions } from 'store/user';

export default function Template({ children }: { children: React.ReactNode }) {
  const isNotPC = useMediaQuery('(max-width: 1024px)');
  const accessToken = getLocalStorage(USER_ACCESS_TOKEN);
  const { setIsSignedIn, setIsRequesting } = useAuthActions();
  const { setUserInfo } = useUserActions();

  // accessToken으로 유저 정보를 가져오는 함수
  useEffect(() => {
    if (!accessToken) return;

    (async () => {
      try {
        const userInfo = await userApi.get();
        setUserInfo({
          name: userInfo.data.data.nickName,
        });
        setIsRequesting(false);
        setIsSignedIn(true);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [accessToken, setIsRequesting, setIsSignedIn, setUserInfo]);

  return (
    <>
      {isNotPC && <OnlyPCSupport />}
      {children}
    </>
  );
}
