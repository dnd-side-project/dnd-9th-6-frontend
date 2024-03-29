'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Fire from 'assets/icons/glass/fire/purple.svg';
import Like from 'assets/icons/glass/like.svg';
import Medal from 'assets/icons/glass/medals.svg';
import Meteor from 'assets/icons/glass/meteor/purple.svg';
import { HorizontalCard, OutlinedCard, SquareCard } from 'components/Card';
import { Button } from 'components/ui/button';
import { Separator } from 'components/ui/separator';
import { useGetScopeLectures, useGetScopeRecent, useGetScopeReviews } from 'hooks/reactQuery/scope/query';
import { useUserInfo } from 'store/user';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

function Scope() {
  const router = useRouter();
  const { data: scopeReviews, isSuccess: scopeSuccess } = useGetScopeReviews({
    select(data) {
      return data.data;
    },
  });
  const { data: scopeLectures } = useGetScopeLectures({
    select(data) {
      return data.data;
    },
  });
  const { data: scopeRecent } = useGetScopeRecent({
    select(data) {
      return data.data;
    },
  });

  const userInfo = useUserInfo();

  const hasInterests = userInfo?.interests.length > 0;

  return (
    <div className="h-full bg-gradient-main">
      {/* Scope 메인 배너 */}
      <div
        className="bg-blue-400 bg-cover py-[80px]"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL}/bgpurple.png)`,
        }}
      >
        <div className="container flex flex-col items-center justify-center">
          <div className="en-H2-semiblod text-grayscale-50">Scope</div>
          <div className="text-white H3-semibold">나의 Fit에 맞는 Scoping을 즐겨보세요</div>
        </div>
      </div>
      <div className="container px-[54px]">
        {/* Scope it 섹션 */}
        <div className="mt-[83px] inline-flex text-purple-500">
          <Fire />
          <div className="ml-8 H3-bold">Scope it</div>
        </div>
        {/* 섹션 description */}
        <div className="ml-[40px] text-grayscale-400 body3-semibold">
          관심분야 기반으로 원하는 강의를 찾을 수 있도록 탐색의 여정을 밝혀드릴게요!
        </div>
        {/* 관심분야 배너 */}
        <div
          className="mt-[32px] flex h-[127px] w-full flex-col items-start justify-center p-16 text-white"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL}/Group+48096027.png)`,
          }}
        >
          <div className="H4-bold">
            {hasInterests ? `${userInfo.name}님의 관심분야` : '나의 관심분야 등록하고 맞춤 큐레이션을 받아보세요!'}
          </div>
          <div className="mt-16 flex w-full justify-between">
            <div className="flex gap-8">
              {!hasInterests && (
                <>
                  <div className="flex h-[34px] w-[126px] items-center justify-center gap-[2px] rounded-[4px] border border-dashed border-white p-8">
                    <div className="H4-bold">?</div>
                  </div>
                  <div className="flex h-[34px] w-[126px] items-center justify-center gap-[2px] rounded-[4px] border border-dashed border-white p-8">
                    <div className="H4-bold">?</div>
                  </div>
                </>
              )}
              {hasInterests &&
                userInfo.interests.split(',').map((item) => (
                  <div
                    key={item}
                    className="flex h-[34px] items-center justify-center gap-[2px] rounded-[4px] border border-white bg-blue-500 p-8"
                  >
                    <div className="H4-bold">{item}</div>
                  </div>
                ))}
            </div>
            {/* 관심분야 등록 버튼 */}
            <Button
              size="md"
              variant="outlined"
              onClick={() => {
                router.push('/onboarding');
              }}
            >
              {hasInterests ? '관심분야 수정' : '관심분야 등록'}
            </Button>
          </div>
        </div>
        <div className="mt-[40px] flex justify-between">
          {/* 별점 높은 수강 후기들 섹션 */}
          <div className="inline-flex flex-col text-grayscale-800">
            <div className="mb-16 inline-flex">
              <Medal />
              <div className="ml-8 H5-bold">별점 높은 수강 후기들</div>
            </div>
            {scopeSuccess && scopeReviews?.data.length > 0 ? (
              <Swiper
                className="h-[678px] [--swiper-pagination-bottom:0px] [--swiper-pagination-color:bg-blue-500] [--swiper-pagination-left:auto] [--swiper-pagination-right:0px] [--swiper-pagination-top:auto]"
                direction="vertical"
                slidesPerView={3}
                spaceBetween={16}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                allowTouchMove={false}
              >
                {scopeReviews?.data?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <HorizontalCard
                      타이틀={item.lectureTitle}
                      작성자={item.userName}
                      별점={parseFloat(item.score.toFixed(1))}
                      작성일={item.createdDate}
                      내용={item.content}
                      태그={item.tags}
                      플랫폼={item.source}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="flex w-full flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="my-[72px] text-center text-grayscale-800 body2-medium">
                    아직 해당 관심분야에 별점 높은 강의가 없어요,
                    <br />
                    지금 별점 주러 가보실래요?
                  </span>
                  <Link href="/lectures" scroll>
                    <Button variant="primary" size="lg">
                      강의 별점주러 가기
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* 강의력 좋은 섹션 */}
          <div className="flex w-[389px] flex-col">
            <div className="mb-[16px] flex">
              <Like />
              <div className="ml-8 H5-bold">강의력 좋은</div>
            </div>
            {scopeLectures?.data?.length ?? -1 > 0 ? (
              <div className="flex flex-col gap-[14px]">
                {scopeLectures?.data?.map((item) => (
                  <>
                    <OutlinedCard
                      key={item.id}
                      강사={item.name === '' ? item.source : item.name}
                      타이틀={item.title}
                      플랫폼={item.source}
                      이미지={item.imageUrl}
                    />
                    <Separator />
                  </>
                ))}
              </div>
            ) : (
              <div className="flex w-full flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="my-[72px] text-center text-grayscale-800 body2-medium">
                    아직 해당 관심분야에 강의력 좋은 강의가 없어요,
                    <br />
                    지금 평가 해보러가실래요?
                  </span>
                  <Link href="/lectures" scroll>
                    <Button variant="primary" size="lg">
                      강의 평가하러러가기
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Class Review 섹션 */}
        <div className="mt-[88px] flex text-purple-500">
          <Meteor />
          <div className="ml-8 H3-bold">Class Review</div>
        </div>
        {/* 섹션 description */}
        <div className="mb-[40px] ml-[40px] text-grayscale-400 body3-semibold">
          찾아볼수 없었던 생생한 후기들을 만나보세요
        </div>
        {/* Class Review 캐러셀 */}
        <Swiper
          className="mb-[105px] h-[390px] [--swiper-pagination-bottom:-5px]"
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          {scopeRecent?.data?.map((item) => (
            <SwiperSlide key={item.lecture.lectureId}>
              <SquareCard
                작성자={item.user.nickName}
                별점={parseFloat(item.review.score.toFixed(1))}
                작성일={item.review.createdDate.slice(0, 10)}
                내용={item.review.content}
                태그={item.review.tags}
                이미지={item.lecture.imageUrl}
                플랫폼={item.lecture.source}
                찜수={item.review.likes}
                강의명={item.lecture.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Scope;
