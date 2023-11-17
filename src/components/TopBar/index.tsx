'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import AngleUpIcon from 'assets/icons/angle-up.svg';
import Cog from 'assets/icons/cog.svg';
import Headset from 'assets/icons/headset.svg';
import Logo from 'assets/icons/logo-black.svg';
import LogoTextWhite from 'assets/icons/logo-text-white.svg';
import Logout from 'assets/icons/logout.svg';
import Pencil from 'assets/icons/pencil.svg';
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'components/ui/dropdown-menu';
import { USER_ACCESS_TOKEN, USER_INFO, USER_REFRESH_TOKEN } from 'constants/account';
import { removeFromLocalStorage, removeFromSessionStorage } from 'hooks/storage';
import { Loader2 } from 'lucide-react';
import { useAuthActions, useIsRequesting, useIsSignedIn } from 'store/auth';
import { useUserEmail, useUserImageUrl, useUserName } from 'store/user';

import { Button } from '../ui/button';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

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

function TopBar() {
  const pathname = usePathname();
  const currentTabId = pathname?.split('/')[1];
  const router = useRouter();
  const userName = useUserName();
  const userEmail = useUserEmail();
  const userProfileImg = useUserImageUrl();
  const isSignedIn = useIsSignedIn();
  const isRequesting = useIsRequesting();

  const { setIsTokenRequired, setIsSignedIn, setIsRequesting } = useAuthActions();

  const handleSignOut = () => {
    removeFromLocalStorage(USER_INFO);
    removeFromLocalStorage(USER_ACCESS_TOKEN);
    removeFromSessionStorage(USER_REFRESH_TOKEN);
    setIsTokenRequired(false);
    setIsSignedIn(false);
    setIsRequesting(false);
    router.refresh();
  };

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
          onValueChange={(value) => {
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
        {isSignedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="ml-auto cursor-pointer">
                <div className="flex items-center gap-[4px]">
                  <Avatar className="h-16 w-16 rounded-lg text-white">
                    <AvatarImage className="object-cover" src={userProfileImg} alt="profileImg" />
                    <AvatarFallback>?</AvatarFallback>
                  </Avatar>
                  <div className="text-white body3-semibold">{userName}</div>
                  <AngleUpIcon />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-4 rounded-none border-none shadow-dropdown">
              <div className="flex gap-8 p-8">
                <Avatar className="h-32 w-32 rounded-full text-white">
                  <AvatarImage className="object-cover" src={userProfileImg} alt="profileImg" />
                  <AvatarFallback>?</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-black detail1-semibold">{userName}</p>
                  <p className="text-grayscale-400 detail2-semibold">{userEmail}</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => {
                    router.push('/my-profile');
                  }}
                >
                  <div className="flex gap-8 px-16 py-8">
                    <Cog />
                    <p className="text-grayscale-500 detail1-semibold">내 프로필</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push('/my-profile');
                  }}
                >
                  <div className="flex gap-8 px-16 py-8">
                    <Pencil />
                    <p className="text-grayscale-500 detail1-semibold">내 후기</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push('/my-profile');
                  }}
                >
                  <div className="flex gap-8 px-16 py-8">
                    <Headset />
                    <p className="text-grayscale-500 detail1-semibold">문의하기</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <div className="flex w-full items-center justify-center p-8">
                <div
                  onClick={handleSignOut}
                  className="flex w-full cursor-pointer items-center justify-center gap-8 bg-grayscale-50 px-16 py-8 text-gray-600 detail1-semibold"
                >
                  <Logout />
                  로그아웃
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            variant={currentTabId !== 'scope' ? 'primary' : 'purple'}
            size="sm"
            className="ml-auto flex items-center"
            {...(!isRequesting && { asChild: true })}
          >
            {isRequesting ? <Loader2 className="mx-8 h-16 w-16 animate-spin" /> : <Link href="/login">로그인</Link>}
          </Button>
        )}
      </div>
    </div>
  );
}

export default TopBar;
