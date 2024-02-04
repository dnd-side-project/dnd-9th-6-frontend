'use client';

import Link from 'next/link';
import BookMark from 'assets/icons/glass/bookmark.svg';
import Logo from 'assets/icons/logo-gray.svg';
import { LandScapeCard } from 'components/Card';
import { Button } from 'components/ui/button';
import { Separator } from 'components/ui/separator';
import { useGetBookmark } from 'hooks/reactQuery/bookmark/query';
import { useUserInfo } from 'store/user';

import 'swiper/css';
import 'swiper/css/pagination';

function Scope() {
  const { data: bookmark } = useGetBookmark({
    select(data) {
      return data.data.data;
    },
  });

  const userInfo = useUserInfo();

  return (
    <div className="h-full bg-gradient-main">
      <div className="container px-[54px]">
        <div className="mt-[40px] flex w-full justify-between">
          {/* 별점 높은 수강 후기들 섹션 */}
          <div className="inline-flex w-full flex-col text-grayscale-800">
            <div className="mb-16 inline-flex">
              <BookMark />
              <div className="ml-8 H4-bold">
                <span className="mr-[6px] text-blue-300 H3-semibold">{userInfo.name || '000'}</span>
                님이 찜한 강의
              </div>
            </div>
            {bookmark ? (
              <div className="flex flex-col gap-[14px]">
                {bookmark?.map((item) => (
                  <>
                    <LandScapeCard
                      강사={item.name}
                      타이틀={item.title}
                      가격={item.price}
                      플랫폼={item.source}
                      이미지={item.lectureImageUrl}
                      후기수={undefined}
                    />
                    <Separator />
                  </>
                ))}
              </div>
            ) : (
              <div className="flex min-h-screen w-full flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <Logo />
                  <span className="mb-[72px] text-center text-grayscale-800 body2-medium">
                    아직 찜해놓은 강의가 없어요,
                    <br />
                    지금 탐색하러 가보실래요?
                  </span>
                  <Link href="/lectures" scroll>
                    <Button variant="primary" size="lg">
                      강의 찜하러 가기
                    </Button>
                  </Link>
                </div>
              </div>
            )}{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scope;
