'use client';
import {
  Card as BaseCard,
  CardProps,
  CardBody as BaseCardBody,
  Text,
  Box,
} from '@chakra-ui/react';

import styled from '@emotion/styled';
import { Badge } from 'components/Badge';
import { TooltipIcon } from 'components/TooltipIcon';
import theme from 'styles/theme';
import { typo } from 'styles/theme/foundations/typo';
import Bookmark from 'assets/icons/bookmark.svg';
import CardShape from 'assets/icons/card/whitebg.svg';

const Root = styled(BaseCard)`
  display: flex;
  width: 275px;
  height: 264px;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 0px;
  background-color: ${theme.colors.grayscale['gray-50']};
  box-shadow: none;
  background-size: cover;
  overflow: hidden;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(1.06);
    & img {
      transform: scale(1.06);
    }
    & button {
      display: block;
    }
  }
`;

const BackgroundImage = styled.img`
  src: url(${props => props.src});
  object-fit: cover;
  width: 275px;
  height: 190px;
  position: absolute;
  top: 0;
  transition: transform 0.3s ease-out;
`;

const CardBody = styled(BaseCardBody)`
  position: absolute;
  bottom: 0;
  width: 275px;
  height: 118px;
`;

const CardShapeWrap = styled(CardShape)`
  position: absolute;
  bottom: 0;
`;

const ReviewBadge = styled(Badge)`
  cursor: pointer;
  transition: 0.3s ease-out;
  &:hover {
    background-color: ${theme.colors.primary['classcope-blue-4']};
    color: ${theme.colors.grayscale.white};
    span {
      display: none;
    }
    &:before {
      content: '후기 작성하기';
    }
  }
`;

const BookmarkButton = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  z-index: 10;
  & .bookmark {
    path {
      fill: ${theme.colors.grayscale['gray-500']};
      transition: all ease 0.3s;
    }
  }
  &:hover {
    & .bookmark {
      path {
        fill: ${theme.colors.primary['classcope-blue-4']};
      }
    }
  }
`;

interface LandScapeCardProps extends CardProps {
  강사: string;
  타이틀: string;
  가격: string;
  플랫폼: string;
  이미지?: string;
  후기수: number;
}

const LandScapeCard = ({
  강사 = '강사명',
  타이틀 = '강의명',
  가격 = '가격',
  플랫폼 = 'fastcampus',
  이미지 = '',
  후기수 = 0,
  ...props
}: LandScapeCardProps) => {
  return (
    <Root {...props}>
      <BackgroundImage src={이미지} />
      <BookmarkButton>
        <Bookmark className="bookmark" />
      </BookmarkButton>
      <CardShapeWrap>
        <CardShape />
      </CardShapeWrap>
      <CardBody>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <Text
            style={{
              color: theme.colors.grayscale['gray-300'],
              ...typo.detail2.semibold,
            }}
          >
            {강사}
          </Text>
          <Text
            style={{
              ...typo.body3.semibold,
            }}
          >
            {타이틀}
          </Text>
          <Text
            style={{
              ...typo.body1.extrabold,
            }}
          >
            {가격}
          </Text>
        </Box>
        <Box
          style={{
            position: 'absolute',
            left: '16px',
            bottom: '100px',
          }}
        >
          {(() => {
            switch (플랫폼) {
              case 'fastcampus':
                return <TooltipIcon variant="fastcampus" />;
              case 'inflearn':
                return <TooltipIcon variant="inflearn" />;
              case 'coloso':
                return <TooltipIcon variant="coloso" />;
              case 'class101':
                return <TooltipIcon variant="class101" />;
              default:
                return null;
            }
          })()}
        </Box>
        <Box
          style={{
            position: 'absolute',
            right: '16px',
            bottom: '16px',
          }}
        >
          <ReviewBadge>
            <span>후기 {후기수}</span>
          </ReviewBadge>
        </Box>
      </CardBody>
    </Root>
  );
};

export default LandScapeCard;
