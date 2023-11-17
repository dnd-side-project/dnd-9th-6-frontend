import Link from 'next/link';
import Logo from 'assets/icons/logo-black.svg';
import LogoTextWhite from 'assets/icons/logo-text-white.svg';

import { Button } from './button';
import { Separator } from './separator';

const linkItems = [
  {
    id: 'lectures',
    content: '강의',
    to: '/lectures',
  },
  {
    id: 'scope',
    content: '스코프',
    to: '/scope',
  },
  {
    id: 'my-lectures',
    content: '찜한 강의',
    to: '/my-lectures',
  },
];

function Footer() {
  return (
    <div className="w-full bg-black pb-[45px] pt-[56px]">
      <div className="container">
        {/* 로고 & 링크 */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex">
            <Logo width="19px" height="19px" viewBox="0 0 48 48" />
            <div className="pl-[6px] pr-[24px]">
              <LogoTextWhite />
            </div>
          </div>
          <div className="mt-[8px] text-white body3-medium">클래스코프와 함께 편리한 강의를 탐색을 시작하세요!</div>
          <div className="mt-[32px] flex text-grayscale-300">
            {linkItems.map(({ id, content, to }) => (
              <Link href={to} key={id}>
                <div className="px-16 py-8 body3-semibold">{content}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="primary" size="sm">
            문의하기
          </Button>
        </div>
        <Separator className="my-8 bg-grayscale-300" />
        <div className="flex w-full justify-between text-grayscale-300 detail1-medium">
          <div>Copyrighted © classcope all rights reserved.</div>
          <div>team.classcope@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
