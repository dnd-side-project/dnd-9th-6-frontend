'use client';

import Logo from 'assets/icons/logo-gray.svg';
import { Button } from 'components/ui/button';
import Link from 'next/link';

const GlobalError = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[99999] bg-gradient-main">
      <div className="mx-auto my-auto flex h-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <span className="mb-[20px] mt-[6px] text-grayscale-700 H3-bold">
            알 수 없는 에러가 발생했습니다 :(
          </span>
          <span className="mb-[72px] text-center text-grayscale-800 body2-medium">
            서버에 알 수 없는 오류가 발생하였습니다.
            <div>관련하여 문의를 남겨주시면 빠르게 해결하도록 하겠습니다.</div>
          </span>
          <Link href="/">
            <Button variant="primary" size="lg">
              홈으로
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GlobalError;
