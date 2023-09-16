'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Search from 'assets/icons/search.svg';
import ProgrammingSmallIcon from 'assets/icons/glass/programming.svg';
import Banner from 'assets/images/banner.svg';
import SectionBG from 'assets/images/section_bg.svg';

import Chat from 'assets/icons/glass/chat/purple.svg';
import Book from 'assets/icons/glass/bookmarrk.svg';
import SectionIcon from 'assets/icons/glass/bookmark2.svg';

import { useGetLectures } from 'hooks/reactQuery/lectures/query';
import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';
import { CoverCard, LandScapeCard, OutlinedCard } from 'components/Card';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Separator } from 'components/ui/separator';
import { CategoryData } from 'constants/category';
import Link from 'next/link';

const Home = () => {
  const router = useRouter();
  const [value, setValue] = useState('');

  // 나의 관심분야
  const { data: interestData } = useGetLectures({
    mainCategoryId: 11,
  });
  // 후기가 많이 달린 강의
  const { data: reviewData } = useGetLectures({
    sort: 'review,asc',
  });
  // 많이 찜한 강의
  const { data: bookmarkData } = useGetLectures({
    sort: 'bookmark,asc',
  });

  const lectureInterest = interestData?.lectures;
  const lectureReview = reviewData?.lectures;
  const lectureBookmark = bookmarkData?.lectures;

  return (
    <>
      {/* Top Section */}
      <div className="bg-gradient-main">
        {/* 배너 섹션 */}
        <div
          className="bg-blue-400 bg-cover py-[80px]"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL}/bgblue.png)`,
          }}
        >
          <div className="container flex flex-col items-center justify-center">
            <div className="text-grayscale-50 en-H2-semiblod">Search</div>
            <div className="text-white H3-semibold">
              클래스코프와 함께 편리한 강의 탐색을 시작하세요!
            </div>
          </div>
        </div>
        {/* 검색바 */}
        <div className="flex items-center justify-center body2-medium">
          <div className="relative w-[695px] translate-y-[-24px]">
            <Input
              variant="search"
              size="lg"
              value={value}
              onChange={e => {
                setValue(e.target.value);
              }}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  router.push(`/lectures?searchKeyword=${value}`);
                }
              }}
              placeholder="검색해보세요"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center border-l border-grayscale-200 p-16"
              onClick={() => {
                router.push(`/lectures?searchKeyword=${value}`);
              }}
            >
              <Search />
            </button>
          </div>
        </div>
        {/* 메인 컨테이너 */}
        <div className="container flex flex-col items-center justify-center pb-[76px] pt-[34px]">
          {/* 카테고리 아이콘 */}
          <div className="mb-[58px] flex w-[824px] flex-wrap items-start justify-start gap-16">
            {CategoryData.map(({ id, mainCategoryIcon, main }) => (
              <Link href={`lectures?mainCategoryId=${id}`} key={id}>
                <Button variant="category" size="icon">
                  {mainCategoryIcon}
                  {main}
                </Button>
              </Link>
            ))}
          </div>
          {/* 배너 이미지 */}
          <Banner />
          {/* 나의 관심분야 섹션 */}
          <div className="my-[60px] flex w-full flex-col justify-start gap-[34px]">
            {/* 나의 관심분야 Description */}
            <div className="flex flex-col gap-[6px]">
              <div className=" text-blue-400 body2-bold">나의 관심분야</div>
              <div className="H3-bold">000님을 위한</div>
              <div className="flex items-center gap-8">
                <div className="inline-flex items-center justify-center gap-8 rounded-[4px] border border-grayscale-100 bg-white p-8">
                  <ProgrammingSmallIcon />
                  <div className="text-blue-400 H5-bold">프로그래밍</div>
                </div>
                <div className="H3-bold">강의들을 모아놨어요!</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-grayscale-400 body3-semibold">
                  관심분야 기반으로 맞춤 추전을 받으세요!
                </div>
                <Button variant="outlined" size="sm">
                  관심분야 등록
                </Button>
              </div>
            </div>
            {/* 배너 + 캐러셀 */}
            <div className="flex items-center justify-between gap-16">
              <CoverCard
                강사={lectureInterest?.[0].name ?? ''}
                타이틀={lectureInterest?.[0].title ?? ''}
                가격={lectureInterest?.[0].price ?? ''}
                플랫폼={lectureInterest?.[0].source ?? ''}
                이미지={lectureInterest?.[0].imageUrl ?? ''}
              />
              <Swiper
                className="main-vertical-carousel-bullet h-[272px] w-full"
                direction="vertical"
                slidesPerView={3}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
              >
                {lectureInterest?.map(item => (
                  <SwiperSlide key={item.id}>
                    <OutlinedCard
                      강사={item.name}
                      타이틀={item.title}
                      플랫폼={item.source}
                      이미지={item.imageUrl}
                      fixed
                    />
                    <Separator className="w-[458px]" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-grayscale-50">
        {/* 메인 컨테이너 */}
        <div className="container flex flex-col items-center justify-center pt-[48px]">
          {/* 후기가 많이 달린 섹션 */}
          <div className="flex w-full flex-col justify-start gap-[40px]">
            {/* 후기가 많이 달린 Description */}
            <div className="flex justify-between">
              <div className="flex flex-col">
                <Chat />
                <div className="mt-8 text-purple-400 H4-bold">
                  후기가 많이달린
                </div>
                <div className="text-grayscale-700 H4-bold">
                  강의들을 확인해보세요
                </div>
                <div className="mt-16 text-grayscale-400 body3-semibold">
                  찾아 볼 수 없었던 생생한 강의 후기를 확인하고 등록해보세요
                </div>
              </div>
              <SectionBG />
            </div>
            {/* 캐러셀 */}
            <div className="flex items-center justify-between gap-16">
              <Swiper
                className="main-vertical-carousel-bullet h-[320px] max-w-[890px]"
                slidesPerView={3}
                spaceBetween={32}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
              >
                {lectureReview?.map(item => (
                  <SwiperSlide key={item.id}>
                    <LandScapeCard
                      강사={item.name}
                      타이틀={item.title}
                      가격={item.price}
                      플랫폼={item.source}
                      이미지={item.imageUrl}
                      후기수={item.reviewCount}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* 많이 찜한 강의 섹션 */}
          <div className="flex w-full flex-col justify-start gap-[40px]">
            {/* 많이 찜한 강의 Description */}
            <div className="flex items-end justify-between">
              <div className="flex flex-col">
                <Book />
                <div className="mt-8 text-grayscale-800 H4-bold">
                  다른사람들이
                </div>
                <div className="text-grayscale-700 H4-bold">
                  <span className="text-blue-500">많이 찜한 강의</span>를 구경해
                  보세요
                </div>
                <div className="mt-16 text-grayscale-400 body3-semibold">
                  찾아 볼 수 없었던 생생한 강의 후기를 확인하고 등록해보세요
                </div>
              </div>
              <SectionIcon />
            </div>
            {/* 캐러셀 */}
            <div className="flex items-center justify-between gap-16">
              <Swiper
                className="main-vertical-carousel-bullet h-[264px] max-w-[890px] [--swiper-navigation-sides-offset:10px] [--swiper-navigation-size:15px]"
                slidesPerView={3}
                spaceBetween={32}
                navigation
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
              >
                {lectureBookmark?.map(item => (
                  <SwiperSlide key={item.id}>
                    <LandScapeCard
                      강사={item.name}
                      타이틀={item.title}
                      가격={item.price}
                      플랫폼={item.source}
                      이미지={item.imageUrl}
                      후기수={item.reviewCount}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* 로그인하고 찜하러 가기 버튼 */}
          <Button variant="outlined" size="md" className="mb-[140px] mt-[48px]">
            로그인하고 찜하러 가기
          </Button>
        </div>
        <div className="absolute bottom-0 left-0" />
      </div>
    </>
  );
};

export default Home;
