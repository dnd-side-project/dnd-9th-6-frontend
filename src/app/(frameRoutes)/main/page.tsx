'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Book from 'assets/icons/glass/bookmark.svg';
import SectionIcon from 'assets/icons/glass/bookmark2.svg';
import Chat from 'assets/icons/glass/chat/purple.svg';
import Search from 'assets/icons/search.svg';
import Banner from 'assets/images/banner.svg';
import SectionBG from 'assets/images/section_bg.svg';
import { CoverCard, LandScapeCard, OutlinedCard } from 'components/Card';
import LectureDialog from 'components/Dialog/LectureDialog';
import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { Separator } from 'components/ui/separator';
import { CategoryData } from 'constants/category';
import { useGetLectures } from 'hooks/reactQuery/lectures/query';
import { useIsSignedIn } from 'store/auth';
import { useUserInterests, useUserName } from 'store/user';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Home() {
  const router = useRouter();
  const [value, setValue] = useState('');

  const userName = useUserName();
  const isSignedIn = useIsSignedIn();
  const interests = useUserInterests();

  const myInterest = CategoryData.filter((item) => item.main === interests.split(',')[0])[0];

  // 나의 관심분야
  const { data: interestData } = useGetLectures(
    {
      mainCategoryId: myInterest?.id || 11,
    },
    {
      select(data) {
        return data?.data.data.lectures;
      },
    }
  );
  // 후기가 많이 달린 강의
  const { data: reviewData } = useGetLectures(
    {
      sort: 'review,asc',
    },
    {
      select(data) {
        return data?.data.data.lectures;
      },
    }
  );
  // 많이 찜한 강의
  const { data: bookmarkData } = useGetLectures(
    {
      sort: 'bookmark,asc',
    },
    {
      select(data) {
        return data?.data.data.lectures;
      },
    }
  );

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
            <div className="en-H2-semiblod text-grayscale-50">Search</div>
            <div className="text-white H3-semibold">클래스코프와 함께 편리한 강의 탐색을 시작하세요!</div>
          </div>
        </div>
        {/* 검색바 */}
        <div className="flex items-center justify-center body2-medium">
          <div className="relative w-[695px] translate-y-[-24px]">
            <Input
              variant="search"
              size="lg"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onKeyDown={(e) => {
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
              {isSignedIn ? (
                <>
                  <div className="H3-bold">{userName}님을 위한</div>
                  <div className="flex items-center gap-8">
                    <div className="inline-flex items-center justify-center gap-8 rounded-[4px] border border-grayscale-100 bg-white p-8">
                      <div className="text-blue-400 H5-bold">{interests.split(',')[0]}</div>
                    </div>
                    <div className="H3-bold">강의들을 모아놨어요!</div>
                  </div>
                </>
              ) : (
                <div className="H3-bold">로그인하고 관심분야를 등록해보세요!</div>
              )}
              <div className="flex items-center justify-between">
                <div className="text-grayscale-400 body3-semibold">관심분야 기반으로 맞춤 추천을 받으세요!</div>
                <Button
                  variant="outlined"
                  size="sm"
                  onClick={() => {
                    router.push('/onboarding');
                  }}
                >
                  {isSignedIn ? '관심분야 수정' : '관심분야 등록'}
                </Button>
              </div>
            </div>
            {/* 배너 + 캐러셀 */}
            <div className="flex items-center justify-between gap-16">
              {interestData && (
                <LectureDialog
                  강의ID={interestData[0].id}
                  강사명={interestData[0].name}
                  강의명={interestData[0].title}
                  가격={interestData[0].price}
                  리뷰수={interestData[0].reviewCount}
                  별점={interestData[0].averageScore ?? 0}
                  플랫폼={interestData[0].source}
                  URL={interestData[0].url}
                  이미지={interestData[0].imageUrl}
                  추천후기={
                    interestData[0].reviews?.map((review) => {
                      return {
                        타이틀: interestData[0].title,
                        작성자: review.nickname,
                        별점: review.score,
                        작성일: review.createdDate,
                        내용: review.content,
                        태그: review.tags.join(','),
                        플랫폼: interestData[0].source,
                      };
                    }) ?? []
                  }
                  태그그룹={interestData[0].tagGroups ?? []}
                >
                  <CoverCard
                    강사={interestData[0].name}
                    타이틀={interestData[0].title}
                    가격={interestData[0].price}
                    플랫폼={interestData[0].source}
                    이미지={interestData[0].imageUrl}
                  />
                </LectureDialog>
              )}
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
                {interestData &&
                  interestData.map((item) => (
                    <SwiperSlide key={item.id}>
                      <LectureDialog
                        강의ID={item.id}
                        강사명={item.name}
                        강의명={item.title}
                        가격={item.price}
                        리뷰수={item.reviewCount}
                        별점={item.averageScore ?? 0}
                        플랫폼={item.source}
                        URL={item.url}
                        이미지={item.imageUrl}
                        추천후기={
                          item.reviews?.map((review) => {
                            return {
                              타이틀: item.title,
                              작성자: review.nickname,
                              별점: review.score,
                              작성일: review.createdDate,
                              내용: review.content,
                              태그: review.tags.join(','),
                              플랫폼: item.source,
                            };
                          }) ?? []
                        }
                        태그그룹={item.tagGroups ?? []}
                      >
                        <OutlinedCard
                          강사={item.name}
                          타이틀={item.title}
                          플랫폼={item.source}
                          이미지={item.imageUrl}
                          fixed
                        />
                      </LectureDialog>
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
                <div className="mt-8 text-purple-400 H4-bold">후기가 많이달린</div>
                <div className="text-grayscale-700 H4-bold">강의들을 확인해보세요</div>
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
                {reviewData?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <LectureDialog
                      강의ID={item.id}
                      강사명={item.name}
                      강의명={item.title}
                      가격={item.price}
                      리뷰수={item.reviewCount}
                      별점={item.averageScore ?? 0}
                      플랫폼={item.source}
                      URL={item.url}
                      이미지={item.imageUrl}
                      추천후기={
                        item.reviews?.map((review) => {
                          return {
                            타이틀: item.title,
                            작성자: review.nickname,
                            별점: review.score,
                            작성일: review.createdDate,
                            내용: review.content,
                            태그: review.tags.join(','),
                            플랫폼: item.source,
                          };
                        }) ?? []
                      }
                      태그그룹={item.tagGroups ?? []}
                    >
                      <LandScapeCard
                        강사={item.name}
                        타이틀={item.title}
                        가격={item.price}
                        플랫폼={item.source}
                        이미지={item.imageUrl}
                        후기수={item.reviewCount}
                      />
                    </LectureDialog>
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
                <div className="mt-8 text-grayscale-800 H4-bold">다른사람들이</div>
                <div className="text-grayscale-700 H4-bold">
                  <span className="text-blue-500">많이 찜한 강의</span>를 구경해 보세요
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
                {bookmarkData?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <LectureDialog
                      강의ID={item.id}
                      강사명={item.name}
                      강의명={item.title}
                      가격={item.price}
                      리뷰수={item.reviewCount}
                      별점={item.averageScore ?? 0}
                      플랫폼={item.source}
                      URL={item.url}
                      이미지={item.imageUrl}
                      추천후기={
                        item.reviews?.map((review) => {
                          return {
                            타이틀: item.title,
                            작성자: review.nickname,
                            별점: review.score,
                            작성일: review.createdDate,
                            내용: review.content,
                            태그: review.tags.join(','),
                            플랫폼: item.source,
                          };
                        }) ?? []
                      }
                      태그그룹={item.tagGroups ?? []}
                    >
                      <LandScapeCard
                        강사={item.name}
                        타이틀={item.title}
                        가격={item.price}
                        플랫폼={item.source}
                        이미지={item.imageUrl}
                        후기수={item.reviewCount}
                      />
                    </LectureDialog>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* 로그인하고 찜하러 가기 버튼 */}
          {isSignedIn ? (
            <div className="mt-[48px]" />
          ) : (
            <Button asChild variant="outlined" size="md" className="mb-[140px] mt-[48px]">
              <Link href="/login">로그인하고 찜하러 가기</Link>
            </Button>
          )}
        </div>
        <div className="absolute bottom-0 left-0" />
      </div>
    </>
  );
}

export default Home;
