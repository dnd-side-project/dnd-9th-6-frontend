'use client';

import { useRouter, usePathname } from 'next/navigation';

import Logo from 'assets/icons/logo-black.svg';
import LogoTextWhite from 'assets/icons/logo-text-white.svg';
import Link from 'next/link';
import { useUserName } from 'store/user';
import { useIsRequesting, useIsSignedIn } from 'store/auth';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';

const tabItems = [
  {
    id: 'lectures',
    content: '강의',
  },
  {
    id: 'scope',
    content: '스코프',
  },
  {
    id: 'my-lectures',
    content: '찜한 강의',
  },
];

const TopBar = () => {
  const pathname = usePathname();
  const currentTabId = pathname?.split('/')[1];
  const router = useRouter();
  const userName = useUserName();
  const isSignedIn = useIsSignedIn();
  const isRequesting = useIsRequesting();

  return (
    <div
      className={`sticky left-0 top-0 z-4 h-[52px] w-full ${
        currentTabId === 'scope' ? 'bg-purple-400' : 'bg-blue-400'
      }`}
    >
      <div className="container flex items-center">
        <Link href="/">
          <Logo width="19px" height="19px" viewBox="0 0 48 48" />
        </Link>
        <Link href="/">
          <div className="pl-[6px] pr-[24px]">
            <LogoTextWhite />
          </div>
        </Link>
        <Tabs
          activationMode="manual"
          value={currentTabId}
          onValueChange={value => {
            router.push(`/${value}`);
          }}
        >
          <TabsList>
            {tabItems.map(({ id, content }) => (
              <TabsTrigger key={id} value={id}>
                {content}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Button
          variant={currentTabId !== 'scope' ? 'primary' : 'purple'}
          size="sm"
          className="ml-auto"
          asChild
        >
          {isSignedIn ? (
            isRequesting ? (
              <div>로딩중...</div>
            ) : (
              <div>{userName}</div>
            )
          ) : (
            <Link href="/login">로그인</Link>
          )}
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
