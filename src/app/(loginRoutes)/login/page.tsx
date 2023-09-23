import Symbol from 'assets/icons/symbol.svg';
import Logo from 'assets/icons/logo-text-black.svg';
import LogoWhite from 'assets/icons/logo-white.svg';
import Google from 'assets/icons/google.svg';
import Kakao from 'assets/icons/kakao.svg';
import { Button } from 'components/ui/button';
import Link from 'next/link';
import { LoginCarousel } from 'components/Carousel';

const page = () => {
  return (
    <div className="flex">
      <div className="flex h-screen w-2/6 min-w-[360px] justify-center rounded-[4px] bg-white">
        <div className="flex flex-col items-start justify-start px-[100px] pt-[26px]">
          <Link href="/">
            <div className="flex gap-[6px]">
              <Symbol />
              <Logo />
            </div>
          </Link>
          <div className="flex flex-col items-start gap-8 pt-[116px] text-grayscale-300 body2-medium">
            <LogoWhite />
            탐색 여정을 밝게 비추다
          </div>
          <div className="pt-16 H4-semibold">
            <span className="text-blue-400">클래스코프</span>에서
            <div>
              <span className="text-blue-400">편리한 강의 탐색</span>을
              시작하세요 :)
            </div>
          </div>
          <div className="flex flex-col gap-16 pt-[64px]">
            <Button
              variant="social"
              size="lg"
              className="gap-12 border border-grayscale-100 bg-white text-black"
              asChild
            >
              <Link href={process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL as string}>
                <Google />
                구글로 시작하기
              </Link>
            </Button>
            <Button
              variant="social"
              size="lg"
              className="gap-12 bg-[#FEE500] text-black"
              asChild
            >
              <Link href={process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL as string}>
                <Kakao />
                카카오로 시작하기
              </Link>
            </Button>
            <Button variant="primary" size="lg" className="py-16" asChild>
              <Link href="/">로그인 없이 탐색 시작하기</Link>
            </Button>
          </div>
          <div className="pt-16 text-[8px] text-grayscale-400">
            로그인 시 <span className="text-purple-400">개인정보보호 정책</span>
            및 <span className="text-purple-400">서비스 약관</span>에 동의하는
            것으로 간주하며, <br />
            서비스 이용을 위해 이메일과 이름을 수집합니다.
          </div>
        </div>
      </div>
      <div
        className="flex h-screen w-4/6 items-center justify-center"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL}/login.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <LoginCarousel />
      </div>
    </div>
  );
};

export default page;
