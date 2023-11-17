'use client';

import Chat from 'assets/images/chat.svg';
import Logo from 'assets/images/logo.svg';
import Platform from 'assets/images/platform.svg';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

function LoginCarousel() {
  return (
    <Swiper
      className="flex h-[500px] w-full items-center justify-center [--swiper-pagination-bottom:-5px] [--swiper-pagination-bullet-horizontal-gap:10px] [--swiper-pagination-color:white]"
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
    >
      <SwiperSlide>
        <div className="flex h-full flex-col items-center justify-center gap-[80px]">
          <div className="flex flex-col items-center justify-center text-center text-white H5-semibold">
            넘쳐나는 강의 플랫폼에서 <br />
            나에게 맞는 강의를 찾기 어렵진 않으셨나요?
          </div>
          <Platform />
          <div className="flex flex-col items-center justify-center text-center text-white H3-semibold">
            이제 클래스코프에서 총 20,394개의 강의를 <br />
            한번에 비교해보세요!
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full flex-col items-center justify-center gap-[30px]">
          <div className="flex flex-col items-center justify-center text-center text-white H5-semibold">
            기존에는 강의 후기를 쉽게 볼 수 없어 <br />
            답답하고 불편하셨죠?!
          </div>
          <Chat />
          <div className="flex flex-col items-center justify-center text-center text-white H3-semibold">
            클래스코프에서는 다른 코프님들의 <br />
            리얼한 후기를 만나볼 수 있어요!
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full items-center justify-center">
          <Logo />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default LoginCarousel;
