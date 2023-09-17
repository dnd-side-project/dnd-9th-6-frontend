import Logo from 'assets/icons/logo-gray.svg';
import { Button } from 'components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[99999] bg-gradient-main">
      <div className="mx-auto my-auto flex h-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <span className="mb-[20px] mt-[6px] text-grayscale-700 H3-bold">
            요청하신 페이지는 없는 페이지입니다 :(
          </span>
          <span className="mb-[72px] text-center text-grayscale-800 body2-medium">
            존재하지 않는 주소를 입력하셨거나,
            <div>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</div>
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

export default NotFound;
