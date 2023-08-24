'use client';
import { Box, Center, Text } from '@chakra-ui/react';
import Container from 'components/Container';
import { typo } from 'styles/theme/foundations/typo';
import Fire from 'assets/icons/glass/fire/purple.svg';
import Meteor from 'assets/icons/glass/meteor/purple.svg';
import Chat from 'assets/icons/glass/chat/purple.svg';
import { colors } from 'styles/theme/foundations/colors';
import Button from 'components/Button';
import Medal from 'assets/icons/glass/medals.svg';
import Like from 'assets/icons/glass/like.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import styled from '@emotion/styled';

const SwiperStyledRoot = styled.div`
  --swiper-pagination-color: ${colors.primary['classcope-blue-5']};
  --swiper-pagination-left: auto;
  --swiper-pagination-right: 0px;
  --swiper-pagination-bottom: 0px;
  --swiper-pagination-top: auto;
`;

const frame = () => {
  return (
    <Container>
      {/* Scope 메인 배너 */}
      <Box
        display="flex"
        height="236px"
        backgroundImage={`url(${process.env.NEXT_PUBLIC_IMAGE_URL}/bgpurple.png)`}
        justifyContent="center"
        alignItems="center"
      >
        <Center flexDirection="column" color="white">
          <Text
            style={{
              ...typo.body2.medium,
            }}
          >
            Scope
          </Text>
          <Text
            style={{
              textShadow: '0px 0px 3px rgba(0, 0, 0, 0.20)',
              ...typo.H2.bold,
            }}
          >
            나의 Fit에 맞는 Scoping을 즐겨보세요
          </Text>
        </Center>
      </Box>
      <Box px="54px">
        {/* Scope it 섹션 */}
        <Box
          display="inline-flex"
          mt="83px"
          color={colors.secondary['classcope-purple-5']}
        >
          <Fire
            style={{
              width: '32px',
              height: '32px',
            }}
          />
          <Text
            ml="8px"
            style={{
              ...typo.H3.bold,
            }}
          >
            Scope it
          </Text>
        </Box>
        {/* 섹션 description */}
        <Text
          color={colors.grayscale['gray-400']}
          ml="40px"
          style={{
            ...typo.body3.semibold,
          }}
        >
          관심분야 기반으로 원하는 강의를 찾을 수 있도록 탐색의 여정을
          밝혀드릴게요!
        </Text>
        {/* 관심분야 배너 */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="972px"
          height="127px"
          p="16px"
          mt="32px"
          color="white"
          backgroundImage={`url(${process.env.NEXT_PUBLIC_IMAGE_URL}/Group+48096027.png)`}
        >
          <Text
            style={{
              ...typo.H4.bold,
            }}
          >
            나의 관심분야 등록하고 맞춤 큐레이션을 받아보세요!
          </Text>
          <Box display="flex" justifyContent="space-between" mt="16px">
            <Box display="flex" gap="8px">
              <Box
                display="flex"
                width="126px"
                height="34px"
                p="8px"
                justifyContent="center"
                alignItems="center"
                gap="2px"
                style={{
                  borderRadius: '4px',
                  border: '1px dashed #FFF',
                  background: '#434350',
                }}
              >
                <Text
                  style={{
                    ...typo.H4.bold,
                  }}
                >
                  ?
                </Text>
              </Box>
              <Box
                display="flex"
                width="126px"
                height="34px"
                p="8px"
                justifyContent="center"
                alignItems="center"
                gap="2px"
                style={{
                  borderRadius: '4px',
                  border: '1px dashed #FFF',
                  background: '#434350',
                }}
              >
                <Text
                  style={{
                    ...typo.H4.bold,
                  }}
                >
                  ?
                </Text>
              </Box>
            </Box>
            <Button size="md" variant="primary-outlined">
              관심분야 등록
            </Button>
          </Box>
        </Box>
        <Box display="flex">
          {/* 별점 높은 수강 후기들 섹션 */}
          <Box
            display="inline-flex"
            flexDirection="column"
            mt="40px"
            color={colors.grayscale['gray-800']}
          >
            <Box display="inline-flex" mb="16px">
              <Medal
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
              <Text
                ml="8px"
                style={{
                  ...typo.H5.bold,
                }}
              >
                별점 높은 수강 후기들
              </Text>
            </Box>
            <img src="/images/demo.png" alt="" width="547px" height="683px" />
          </Box>
          {/* 강의력 좋은 섹션 */}
          <Box
            display="inline-flex"
            flexDirection="column"
            mt="40px"
            color={colors.grayscale['gray-800']}
          >
            <Box display="inline-flex" mb="24px">
              <Like
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
              <Text
                ml="8px"
                style={{
                  ...typo.H5.bold,
                }}
              >
                강의력 좋은
              </Text>
            </Box>
            <img src="/images/demo2.png" alt="" width="389px" />
          </Box>
        </Box>
        {/* Class Review 섹션 */}
        <Box
          display="inline-flex"
          mt="12px"
          color={colors.secondary['classcope-purple-5']}
        >
          <Meteor
            style={{
              width: '32px',
              height: '32px',
            }}
          />
          <Text
            ml="8px"
            style={{
              ...typo.H3.bold,
            }}
          >
            Class Review
          </Text>
        </Box>
        {/* 섹션 description */}
        <Text
          color={colors.grayscale['gray-400']}
          ml="40px"
          mb="40px"
          style={{
            ...typo.body3.semibold,
          }}
        >
          찾아볼수 없었던 생생한 후기들을 만나보세요
        </Text>
        {/* Class Review 캐러셀 */}
        <SwiperStyledRoot>
          <Swiper
            style={{
              height: '387px',
            }}
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
            className="mySwiper"
          >
            {Array(10)
              .fill(0)
              .map((item, index) => (
                <SwiperSlide key={index}>
                  <img src="/images/Squarecard.png" alt="" width="305px" />
                </SwiperSlide>
              ))}
          </Swiper>
        </SwiperStyledRoot>
        {/* Review Keyword 섹션 */}
        <Box
          display="inline-flex"
          mt="85px"
          color={colors.secondary['classcope-purple-5']}
        >
          <Chat
            style={{
              width: '32px',
              height: '32px',
            }}
          />
          <Text
            ml="8px"
            style={{
              ...typo.H3.bold,
            }}
          >
            Review keyword
          </Text>
        </Box>
        {/* 섹션 description */}
        <Text
          color={colors.grayscale['gray-400']}
          ml="40px"
          mb="40px"
          style={{
            ...typo.body3.semibold,
          }}
        >
          찾아볼수 없었던 생생한 후기들을 만나보세요
        </Text>
        {/* CheckButtonGroup 섹션 */}
        <Center gap={3}>
          <Button size="md" variant="primary-outlined">
            빠른 답변 ⚡️
          </Button>
          <Button size="md" variant="primary-outlined">
            커리큘럼과 똑같아요 ⚡️
          </Button>
          <Button size="md" variant="primary-outlined">
            듣기 좋은 목소리 👄
          </Button>
          <Button size="md" variant="primary-outlined">
            도움이 많이 됐어요 👏🏻
          </Button>
          <Button size="md" variant="primary-outlined">
            빠른 답변 ⚡️
          </Button>
          <Button size="md" variant="primary-outlined">
            뛰어난 강의력
          </Button>
          <Button size="md" variant="primary-outlined">
            구성이 알차요
          </Button>
        </Center>
        {/* Review Keword 캐러셀 */}
        <SwiperStyledRoot>
          <Swiper
            style={{
              height: '207px',
              marginBottom: '180px',
            }}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {Array(10)
              .fill(0)
              .map((item, index) => (
                <SwiperSlide key={index}>
                  <img src="/images/HorizontalCard.png" alt="" width="306px" />
                </SwiperSlide>
              ))}
          </Swiper>
        </SwiperStyledRoot>
      </Box>
    </Container>
  );
};

export default frame;
