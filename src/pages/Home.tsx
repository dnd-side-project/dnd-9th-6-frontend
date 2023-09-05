'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';
import {
  Box,
  Grid,
  Image,
  StackDivider,
  Flex,
  Text,
  VStack,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import Search from 'assets/icons/search.svg';
import CategoryIcon from 'assets/icons/glass/all-i.svg';
import ProgrammingIcon from 'assets/icons/glass/programming-l v.svg';
import DSIcon from 'assets/icons/glass/datascience-l.svg';
import HardwareIcon from 'assets/icons/glass/hardware-l.svg';
import DrawingIcon from 'assets/icons/glass/drawing-l.svg';
import DesignIcon from 'assets/icons/glass/design-l.svg';
import MovieIcon from 'assets/icons/glass/movie-l.svg';
import GameIcon from 'assets/icons/glass/game-l.svg';
import CookingIcon from 'assets/icons/glass/cooking-l.svg';
import CreativeIcon from 'assets/icons/glass/cratetive-l.svg';
import MoneyIcon from 'assets/icons/glass/money-l.svg';
import LanguageIcon from 'assets/icons/glass/language.svg';
import CareerIcon from 'assets/icons/glass/career-l.svg';
import LifestyleIcon from 'assets/icons/glass/lifestyle-l.svg';
import ProgrammingSmallIcon from 'assets/icons/glass/programming.svg';
import Button from 'components/Button';
import Container from 'components/Container';
import { useGetLecturesParameter } from 'hooks/reactQuery/lectures/query';
import { CoverCard, OutlinedCard } from 'components/Card';
import { colors } from 'styles/theme/foundations/colors';
import { Input } from 'components/ui/input';

const Root = styled.div`
  width: 100%;
`;

const TitleSectionContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SearchBarInputGroup = styled(InputGroup)`
  box-shadow: 0px 3px 12px rgba(184.45, 184.45, 204, 0.2);
  position: relative;
  transform: translateY(-50%);
`;

const categoryItems = [
  {
    id: 'category',
    img: CategoryIcon,
    text: '카테고리',
    to: '/lectures',
  },
  {
    id: 'programming',
    img: ProgrammingIcon,
    text: '프로그래밍',
    to: '/lectures?mainCategoryId=11',
  },
  {
    id: 'ds',
    img: DSIcon,
    text: '데이터사이언스',
    to: '/lectures?mainCategoryId=3',
  },
  {
    id: 'hardware',
    img: HardwareIcon,
    text: '하드웨어',
    to: '/lectures?mainCategoryId=12',
  },
  {
    id: 'drawing',
    img: DrawingIcon,
    text: '드로잉',
    to: '/lectures?mainCategoryId=4',
  },
  {
    id: 'design',
    img: DesignIcon,
    text: '디자인',
    to: '/lectures?mainCategoryId=5',
  },
  {
    id: 'movie',
    img: MovieIcon,
    text: '영상 3D 애니메이션',
    to: '/lectures?mainCategoryId=7',
  },
  {
    id: 'game',
    img: GameIcon,
    text: '게임',
    to: '/lectures?mainCategoryId=1',
  },
  {
    id: 'cooking',
    img: CookingIcon,
    text: '요리',
    to: '/lectures?mainCategoryId=8',
  },
  {
    id: 'creative',
    img: CreativeIcon,
    text: '크리에이티브',
    to: '/lectures?mainCategoryId=10',
  },
  {
    id: 'money',
    img: MoneyIcon,
    text: '금융 투자',
    to: '/lectures?mainCategoryId=2',
  },
  {
    id: 'language',
    img: LanguageIcon,
    text: '학문 외국어',
    to: '/lectures?mainCategoryId=13',
  },
  {
    id: 'career',
    img: CareerIcon,
    text: '커리어',
    to: '/lectures?mainCategoryId=9',
  },
  {
    id: 'lifestyle',
    img: LifestyleIcon,
    text: '라이프 스타일',
    to: '/lectures?mainCategoryId=6',
  },
];

const Home = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const { data } = useGetLecturesParameter({
    mainCategoryId: 11,
  });

  const lectureInterest = data?.lectures;

  return (
    <Root>
      <Box
        backgroundColor="#90A9FE"
        py="80px"
        backgroundImage={`url(${process.env.NEXT_PUBLIC_IMAGE_URL}/bgblue.png)`}
      >
        <Container>
          <TitleSectionContentWrapper>
            <Text
              color="#F8F9FC"
              fontSize="16px"
              fontWeight={600}
              lineHeight="24px"
            >
              Search
            </Text>
            <Text
              color="white"
              fontSize="30px"
              fontWeight={600}
              lineHeight="46px"
              mt="8px"
            >
              클래스코프와 함께 편리한 강의 탐색을 시작하세요!
            </Text>
          </TitleSectionContentWrapper>
        </Container>
      </Box>
      <div className="flex items-center justify-center">
        <div className="relative w-[695px] translate-y-[-24px]">
          <Input
            variant="search"
            size="lg"
            value={value}
            onChange={e => {
              setValue(e.target.value);
            }}
            placeholder="검색해보세요"
          />
          <button
            className="absolute right-0 top-0 flex h-full w-[56px] border-l border-grayscale-200 p-16"
            onClick={() => {
              router.push(`/lectures?searchKeyword=${value}`);
            }}
          >
            <div className="translate-y-[-2px]">
              <Search />
            </div>
          </button>
        </div>
      </div>
      <Box pt="34px" pb="76px">
        <Container>
          <Grid
            templateColumns="repeat(7, 1fr)"
            gap={4}
            maxWidth="824px"
            mx="auto"
          >
            {categoryItems.map(({ id, img: Icon, text, to }) => (
              <Box
                key={id}
                px="8px"
                py="18px"
                background="white"
                borderRadius="4px"
                height="88px"
                width="104px"
                textAlign="center"
                boxShadow="md"
                onClick={() => {
                  router.push(to);
                }}
              >
                <Icon style={{ margin: 'auto' }} />
                <Text
                  mt="4px"
                  fontSize="12px"
                  fontWeight="600"
                  color="gray.500"
                >
                  {text}
                </Text>
              </Box>
            ))}
          </Grid>
          <Image src="/images/banner.png" alt="banner" width={1080} mt="58px" />
          <Text mt="60px" fontSize={16} fontWeight={700} color="#7795FE">
            나의 관심분야
          </Text>
          <Text mt="8px" fontSize={30} fontWeight={700}>
            000님을 위한
          </Text>
          <Flex mt="8px" alignItems="center">
            <Box backgroundColor="white" p="8px" borderRadius="4px" mr="8px">
              <Flex alignItems="center">
                <ProgrammingSmallIcon />
                <Text color="#7795FE" fontSize={20} fontWeight={700}>
                  프로그래밍
                </Text>
              </Flex>
            </Box>
            <Text mt="8px" fontSize={30} fontWeight={700}>
              강의들을 모아놨어요!
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Text mt="8px" fontSize={16} fontWeight={600} color="#9191A6">
              관심분야 기반으로 맞춤 추전을 받으세요!
            </Text>
            <Button variant="primary-outlined" marginLeft="auto">
              관심분야 등록
            </Button>
          </Flex>
          <Grid templateColumns="repeat(2, 1fr)" gap="16px" mt="32px">
            {lectureInterest && (
              <CoverCard
                강사={lectureInterest[0]?.name}
                타이틀={lectureInterest[0]?.title}
                가격={lectureInterest[0]?.price}
                플랫폼={lectureInterest[0]?.source}
                이미지={lectureInterest[0]?.imageUrl}
              />
            )}
            <VStack
              divider={
                <StackDivider borderColor={colors.grayscale['gray-100']} />
              }
            >
              {lectureInterest && (
                <OutlinedCard
                  key={lectureInterest[0]?.id}
                  강사={
                    lectureInterest[0]?.name === ''
                      ? lectureInterest[0]?.source
                      : lectureInterest[0]?.name
                  }
                  타이틀={lectureInterest[0]?.title}
                  플랫폼={lectureInterest[0]?.source}
                  이미지={lectureInterest[0]?.imageUrl}
                />
              )}
            </VStack>
          </Grid>
        </Container>
      </Box>
    </Root>
  );
};

export default Home;
