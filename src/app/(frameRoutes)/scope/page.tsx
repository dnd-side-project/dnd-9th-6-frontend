'use client';

import {
  Box,
  Center,
  CheckboxGroup,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
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
import {
  useGetScopeLectures,
  useGetScopeRecent,
  useGetScopeReviews,
} from 'hooks/reactQuery/scope/query';
import { HorizontalCard, OutlinedCard, SquareCard } from 'components/Card';
import Checkbox from 'components/Checkbox';

const SwiperStyledRoot = styled.div`
  --swiper-pagination-color: ${colors.primary['classcope-blue-5']};
  --swiper-pagination-left: auto;
  --swiper-pagination-right: 0px;
  --swiper-pagination-bottom: 0px;
  --swiper-pagination-top: auto;
`;

const TopBackground = styled.div`
  position: absolute;
  display: flex;
  background-color: ${colors.secondary['classcope-purple-3']};
  width: 100%;
  height: 236px;
  left: 0;
  top: 52px;
`;

const Scope = () => {
  const { data: scopeReviews } = useGetScopeReviews({ staleTime: Infinity });
  const { data: scopeLectures } = useGetScopeLectures({ staleTime: Infinity });
  const { data: scopeRecent } = useGetScopeRecent({ staleTime: Infinity });
  // const { data: scopeKeyword } = useGetScopeKeyword({
  //   keyword: '빠른 답변',
  // });

  return (
    <Container>
      <TopBackground />
      {/* Scope 메인 배너 */}
      <Box
        display="flex"
        position="relative"
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
        <Box display="flex" justifyContent="space-between">
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
            {/* <img src="/images/demo.png" alt="" width="547px" height="683px" /> */}
            <Swiper
              style={{
                height: '678px',
              }}
              direction="vertical"
              slidesPerView={3}
              spaceBetween={16}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <Box
                style={{
                  position: 'absolute',
                  width: '547px',
                  height: '678px',
                  display: 'flex',
                  top: '0',
                  background:
                    'linear-gradient(0deg, #EFF1F8 7.81%, rgba(248, 249, 252, 0.00) 100%)',
                  zIndex: '10',
                }}
              />
              {scopeReviews?.map(item => (
                <SwiperSlide key={item.id}>
                  <HorizontalCard
                    타이틀={item.lectureTitle}
                    작성자={item.userName}
                    별점={item.score.toFixed(1)}
                    작성일={item.createdDate.slice(0, 10)}
                    내용={item.content}
                    태그={item.tags}
                    플랫폼={item.source}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          {/* 강의력 좋은 섹션 */}
          <Box
            display="inline-flex"
            flexDirection="column"
            mt="40px"
            color={colors.grayscale['gray-800']}
          >
            <Box display="inline-flex" mb="16px">
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
            {/* <img src="/images/demo2.png" alt="" width="389px" /> */}
            <VStack
              divider={
                <StackDivider borderColor={colors.grayscale['gray-100']} />
              }
            >
              {scopeLectures?.map(item => (
                <OutlinedCard
                  key={item.id}
                  강사={item.name === '' ? item.source : item.name}
                  타이틀={item.title}
                  플랫폼={item.source}
                  이미지={item.imageUrl}
                />
              ))}
            </VStack>
          </Box>
        </Box>
        {/* Class Review 섹션 */}
        <Box
          display="inline-flex"
          mt="8px"
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
            {scopeRecent?.map(item => (
              <SwiperSlide key={item.lecture.lectureId}>
                <SquareCard
                  작성자={item.user.nickName}
                  별점={item.review.score.toFixed(1)}
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
        <Center gap={3} mb="8px">
          <CheckboxGroup isNative>
            <Checkbox variant="review">빠른 답변 ⚡️</Checkbox>
            <Checkbox variant="review">커리큘럼과 똑같아요 ⚡️</Checkbox>
            <Checkbox variant="review">듣기 좋은 목소리 👄</Checkbox>
            <Checkbox variant="review">도움이 많이 됐어요 👏🏻</Checkbox>
            <Checkbox variant="review">뛰어난 강의력 👨‍🏫</Checkbox>
          </CheckboxGroup>
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
            {/* {scopeKeyword?.map(item => (
              <SwiperSlide key={item.id}>
                <HorizontalCard
                  타이틀={item.lectureTitle}
                  작성자={item.userName}
                  별점={item.score.toFixed(1)}
                  작성일={item.createdDate.slice(0, 10)}
                  내용={item.content}
                  태그={item.tags}
                  플랫폼={item.source}
                />
              </SwiperSlide>
            ))} */}
            {Array(10)
              .fill(0)
              .map(index => (
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

export default Scope;
