'use client';

import Fire from 'assets/icons/glass/fire/purple.svg';
import Meteor from 'assets/icons/glass/meteor/purple.svg';
import Medal from 'assets/icons/glass/medals.svg';
import Like from 'assets/icons/glass/like.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import {
  useGetScopeLectures,
  useGetScopeRecent,
  useGetScopeReviews,
} from 'hooks/reactQuery/scope/query';
import { HorizontalCard, OutlinedCard, SquareCard } from 'components/Card';
import { Button } from 'components/ui/button';
import { Separator } from 'components/ui/separator';

const Scope = () => {
  const { data: scopeReviews } = useGetScopeReviews({ staleTime: Infinity });
  const { data: scopeLectures } = useGetScopeLectures({ staleTime: Infinity });
  const { data: scopeRecent } = useGetScopeRecent({ staleTime: Infinity });

  return (
    <div className="bg-gradient-main">
      {/* Scope 메인 배너 */}
      <div
        className="bg-blue-400 bg-cover py-[80px]"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL}/bgpurple.png)`,
        }}
      >
        <div className="container flex flex-col items-center justify-center">
          <div className="text-grayscale-50 en-H2-semiblod">Scope</div>
          <div className="text-white H3-semibold">
            나의 Fit에 맞는 Scoping을 즐겨보세요
          </div>
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
          관심분야 기반으로 원하는 강의를 찾을 수 있도록 탐색의 여정을
          밝혀드릴게요!
        </div>
        {/* 관심분야 배너 */}
        <div
          className="mt-[32px] flex h-[127px] w-full flex-col items-start justify-center p-16 text-white"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL}/Group+48096027.png)`,
          }}
        >
          <div className="H4-bold">
            나의 관심분야 등록하고 맞춤 큐레이션을 받아보세요!
          </div>
          <div className="mt-16 flex w-full justify-between">
            <div className="flex gap-8">
              <div className="flex h-[34px] w-[126px] items-center justify-center gap-[2px] rounded-[4px] border border-dashed border-white p-8">
                <div className="H4-bold">?</div>
              </div>
              <div className="flex h-[34px] w-[126px] items-center justify-center gap-[2px] rounded-[4px] border border-dashed border-white p-8">
                <div className="H4-bold">?</div>
              </div>
            </div>
            <Button size="md" variant="outlined">
              관심분야 등록
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
              {scopeReviews?.map(item => (
                <SwiperSlide key={item.id}>
                  <HorizontalCard
                    타이틀={item.lectureTitle}
                    작성자={item.userName}
                    별점={parseFloat(item.score.toFixed(1))}
                    작성일={item.createdDate.slice(0, 10)}
                    내용={item.content}
                    태그={item.tags}
                    플랫폼={item.source}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* 강의력 좋은 섹션 */}
          <div className="flex w-[389px] flex-col">
            <div className="mb-[16px] flex">
              <Like />
              <div className="ml-8 H5-bold">강의력 좋은</div>
            </div>
            <div className="flex flex-col gap-[14px]">
              {scopeLectures?.map(item => (
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
          {scopeRecent?.map(item => (
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
                좋아요={item.isAddLike}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Scope;
