import Link from 'next/link';

import Logo from 'assets/icons/logo-black.svg';
import LogoTextWhite from 'assets/icons/logo-text-white.svg';

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

const Footer = () => (
  <div className="bg-black container pb-[45px] pt-[56px]">
    <div className="flex flex-col items-center justify-center border-b border-b-grayscale-300">
      <div className="flex">
        <Logo width="19px" height="19px" viewBox="0 0 48 48" />
        <div className="pl-[6px] pr-[24px]">
          <LogoTextWhite />
        </div>
      </div>
      <div className="mt-[8px] text-white body3-medium">
        클래스코프와 함께 편리한 강의를 탐색을 시작하세요!
      </div>
      <div className="my-[32px] flex">
        {linkItems.map(({ id, content, to }) => (
          <Link href={to} key={id}>
            <div className="px-16 py-8 text-white body3-semibold">
              {content}
            </div>
          </Link>
        ))}
      </div>
    </div>
    <div className="flex w-full justify-between pt-8 text-grayscale-300 detail1-medium">
      <div>Copyrighted © classcope all rights reserved.</div>
      <div>team.classcope@gmail.com</div>
    </div>
  </div>
);

export default Footer;
