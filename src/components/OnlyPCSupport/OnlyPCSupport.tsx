'use client';

import React from 'react';
import Logo from 'assets/icons/logo-white.svg';
import { useBlockScroll } from 'hooks/useBlockScroll';

function OnlyPCSupport() {
  useBlockScroll(true);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[99999] bg-[#F8F9FC]">
      <div className="mx-auto my-auto flex h-full max-w-[333px] flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-white px-[40px] py-[80px]">
          <Logo />
          <span className="mb-[20px] mt-[8px] text-blue-500 H4-bold">
            PC<span className="text-grayscale-700">에서 접속해주세요 :)</span>
          </span>
          <p className="text-center text-grayscale-400 body2-semibold">
            모바일버전은 준비중입니다
            <br />
            PC버전으로 먼저 이용해주세요!
          </p>
        </div>
      </div>
    </div>
  );
}

export default OnlyPCSupport;
