'use client';
import { Card as BaseCard, CardProps, Text, Box } from '@chakra-ui/react';

import styled from '@emotion/styled';
import theme from 'styles/theme';
import { typo } from 'styles/theme/foundations/typo';
import FastCampus from 'assets/icons/platform/fastcampus-32.svg';
import Inflearn from 'assets/icons/platform/inflearn-32.svg';
import Coloso from 'assets/icons/platform/coloso-32.svg';
import Class101 from 'assets/icons/platform/class101-32.svg';
import Button from 'components/Button';
import Bookmark from 'assets/icons/bookmark-border.svg';
import Edge from 'assets/icons/card/edge.svg';

const Root = styled(BaseCard)`
  display: flex;
  width: 523px;
  height: 263px;
  padding: 24px 16px 24px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 4px;
  box-shadow: none;
  background: black;
  background-size: cover;
  z-index: 10;
  &:hover {
    & img {
      opacity: 1;
    }
  }
`;

const Background = styled.img`
  src: url(${props => props.src});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  z-index: -1;
  transition: opacity 0.3s ease-out;
`;

interface CoverCardProps extends CardProps {
  강사: string;
  타이틀: string;
  가격: string;
  플랫폼: string;
  이미지?: string;
}

const CoverCard = ({
  강사 = '강사명',
  타이틀 = '강의명',
  가격 = '가격',
  플랫폼 = 'fastcampus',
  이미지 = '',
  ...props
}: CoverCardProps) => {
  return (
    <Root {...props}>
      {/* 배경 이미지 */}
      <Background src={이미지} />
      {/* 강사명, 타이틀명 Text */}
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '459px',
          gap: '8px',
        }}
      >
        <Text
          style={{
            color: theme.colors.primary['classcope-blue-3'],
            ...typo.body3.bold,
          }}
        >
          {강사}
        </Text>
        <Text
          style={{
            color: theme.colors.grayscale.white,
            ...typo.H5.semibold,
          }}
        >
          {타이틀}
        </Text>
      </Box>
      {/* 가격 Text */}
      <Text
        style={{
          color: theme.colors.grayscale.white,
          ...typo.H4.bold,
        }}
      >
        {가격}
      </Text>
      {/* 플랫폼 Icon */}
      <Box
        style={{
          position: 'absolute',
          width: '32px',
          height: '32px',
          top: '24px',
          right: '16px',
        }}
      >
        {(() => {
          switch (플랫폼) {
            case 'fastcampus':
              return <FastCampus />;
            case 'inflearn':
              return <Inflearn />;
            case 'coloso':
              return <Coloso />;
            case 'class101':
              return <Class101 />;
            default:
              return null;
          }
        })()}
      </Box>
      {/* 강의 찜 버튼 */}
      <Box
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '16px',
        }}
      >
        <Button size="sm" variant="primary-outlined" gap="4px" pl="16px">
          강의 찜하기
          {<Bookmark />}
        </Button>
      </Box>
      {/* 왼쪽 밑 엣지 배경 */}
      <Box
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
        }}
      >
        <Edge />
      </Box>
    </Root>
  );
};

export default CoverCard;
