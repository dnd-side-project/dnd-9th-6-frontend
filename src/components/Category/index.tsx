'use client';

import {
  Text,
  AccordionButton,
  Accordion,
  AccordionItem,
  AccordionPanel,
  Button,
  AccordionIcon,
  Box,
  BoxProps,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { colors } from 'styles/theme/foundations/colors';
import { typo } from 'styles/theme/foundations/typo';

import 전체강의 from 'assets/icons/all.svg';
import 게임 from 'assets/icons/game.svg';
import 금융투자 from 'assets/icons/money.svg';
import 드로잉 from 'assets/icons/drawing.svg';
import 디자인 from 'assets/icons/design.svg';
import 라이프스타일 from 'assets/icons/lifestyle.svg';
import 요리 from 'assets/icons/cooking.svg';
import 커리어 from 'assets/icons/career.svg';
import 프로그래밍 from 'assets/icons/programming.svg';
import 하드웨어 from 'assets/icons/hardware.svg';
import 데이터사이언스 from 'assets/icons/datascience.svg';
import 학문외국어 from 'assets/icons/language.svg';
import 크리에이티브 from 'assets/icons/createtive.svg';
import 영상3D애니메이션 from 'assets/icons/movie.svg';

const Root = styled(Box)`
  width: 192px;
  padding: 0 3px 0 3px;
  flex-direction: column;
`;

const LectureButton = styled(AccordionButton)`
  display: flex;
  width: 186px;
  padding: 8px 12px;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  &:hover {
    background: ${colors.grayscale['gray-100']};
  }
`;

const LecturePanel = styled(AccordionPanel)`
  display: flex;
  padding: 4px 0px 8px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${colors.grayscale['gray-50']};
`;

const LectureAccordianButton = styled(Button)`
  display: flex;
  width: 186px;
  padding: 8px 36px;
  align-items: center;
  justify-content: flex-start;
  color: ${colors.grayscale['gray-400']};
  background: ${colors.grayscale['gray-50']};
  &:hover {
    background: ${colors.grayscale['gray-100']};
    & p {
      color: ${colors.primary['classcope-blue-5']};
    }
  }
`;

const LectureAccordionData = [
  { main: '전체강의', icon: <전체강의 /> },
  {
    main: '게임',
    sub: ['게임/e스포츠', '게임개발', '게임제작'],
    icon: <게임 />,
  },
  {
    main: '금융/투자',
    sub: ['금융투자실무', '부동산', '재무/회계/세무', '재테크/주식'],
    icon: <금융투자 />,
  },
  {
    main: '데이터사이언스',
    sub: ['기타', '데이터분석', '데이터시각화', '데이터엔지니어링', '인공지능'],
    icon: <데이터사이언스 />,
  },
  {
    main: '드로잉',
    sub: ['웹툰/웹소설', '취미드로잉', '캐릭터일러스트', '컨셉 아트'],
    icon: <드로잉 />,
  },
  {
    main: '디자인',
    sub: ['2D/그래픽/브랜딩', '3D/건축', '제품디자인', 'UX/UI'],
    icon: <디자인 />,
  },
  {
    main: '라이프 스타일',
    sub: ['기타', '뷰티', '심리', '운동', '음악'],
    icon: <라이프스타일 />,
  },
  {
    main: '영상/3D/애니메이션',
    sub: ['3D/CG', '모션그래픽', '블렌더', '애니메이션', '영상/사진', 'VR/AR'],
    icon: <영상3D애니메이션 />,
  },
  {
    main: '요리',
    sub: ['베이킹/디저트', '요리/음료'],
    icon: <요리 />,
  },
  {
    main: '커리어',
    sub: [
      '기타',
      '마케팅',
      '마케팅/기타',
      '비즈니스',
      '비즈니스/기획',
      '업무생산성',
      '자격증',
      '창업/부업',
      '창업/부업/재테크/쇼핑몰',
    ],
    icon: <커리어 />,
  },
  {
    main: '크리에이티브',
    sub: ['공예', '기타', '메타버스', '소설/글쓰기', '음악'],
    icon: <크리에이티브 />,
  },
  {
    main: '프로그래밍',
    sub: [
      '교양',
      '기타',
      '데브옵스/인프라',
      '모바일',
      '보안네트워크',
      '블록체인',
      '시스템',
      '앱',
      '웹',
      '컴퓨터공학',
      '클라우드',
    ],
    icon: <프로그래밍 />,
  },
  {
    main: '하드웨어',
    sub: ['기타', '로봇', '모빌리티', '반도체', '임베디드', '컴퓨터구조'],
    icon: <하드웨어 />,
  },
  {
    main: '학문/외국어',
    sub: [
      '기타',
      '기타외국어',
      '수학',
      '아이/부모교육',
      '영어',
      '영어/기타외국어',
    ],
    icon: <학문외국어 />,
  },
];

const LectureAccordion = ({ ...props }: BoxProps) => {
  return (
    <Root {...props}>
      {/* 아코디언 */}
      <Accordion allowToggle bgColor="white">
        {LectureAccordionData.map(data => {
          return (
            <AccordionItem key={data.main} borderTopWidth="0">
              {/* 메인 카테고리 버튼 */}
              <LectureButton>
                <Box display="flex" gap="4px">
                  {data.icon}
                  <Text
                    color={colors.grayscale['gray-800']}
                    style={{ ...typo.body3.bold }}
                  >
                    {data.main}
                  </Text>
                </Box>
                <AccordionIcon />
              </LectureButton>
              {/* 아코디언 패널 */}
              <LecturePanel>
                {data.sub?.map(sub => {
                  return (
                    // 서브 카테고리 버튼
                    <LectureAccordianButton key={sub}>
                      <Text
                        color={colors.grayscale['gray-400']}
                        style={{ ...typo.detail1.semibold }}
                      >
                        {sub}
                      </Text>
                    </LectureAccordianButton>
                  );
                })}
              </LecturePanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Root>
  );
};

export default LectureAccordion;
