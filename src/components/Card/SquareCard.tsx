'use client';

import {
  Card as BaseCard,
  CardProps,
  CardBody as BaseCardBody,
  Text,
  Box,
} from '@chakra-ui/react';

import styled from '@emotion/styled';
import FastCampus from 'assets/icons/platform/fastcampus-32.svg';
import Inflearn from 'assets/icons/platform/inflearn-32.svg';
import Coloso from 'assets/icons/platform/coloso-32.svg';
import Class101 from 'assets/icons/platform/class101-32.svg';
import theme from 'styles/theme';
import { typo } from 'styles/theme/foundations/typo';
import CardShape from 'assets/icons/card/whitebg-large.svg';
import { Tag } from 'components/Tag';
import Star from 'assets/icons/rating/star.svg';
import Button from 'components/Button';

const Root = styled(BaseCard)`
  display: flex;
  width: 305px;
  height: 364px;
  flex-direction: column;
  align-items: center;
  border-radius: 0px;
  border: 0.8px solid ${theme.colors.grayscale['gray-100']};
  background-color: ${theme.colors.grayscale['gray-50']};
  box-shadow: none;
  background-size: cover;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  src: url(${props => props.src});
  object-fit: cover;
  width: 305px;
  height: 200px;
  position: absolute;
  top: 0;
`;

const CardBody = styled(BaseCardBody)`
  position: absolute;
  bottom: 0;
  width: 305px;
  padding: 16px;
`;

const CardShapeWrap = styled(CardShape)`
  position: absolute;
  bottom: 0;
`;

const TagWrap = styled.div`
  display: flex;
  width: 273px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 2px;
  flex-wrap: wrap;
`;

interface SquareCardProps extends CardProps {
  작성자: string;
  별점: string;
  작성일: string;
  내용: string;
  태그: string;
  이미지: string;
  플랫폼: string;
  찜수: number;
  좋아요: boolean;
}

const SquareCard = ({
  작성자 = '',
  별점 = '',
  작성일 = '',
  내용 = '',
  태그 = '',
  이미지 = '',
  플랫폼 = '',
  찜수 = 0,
  좋아요 = false,
  ...props
}: SquareCardProps) => {
  return (
    <Root {...props}>
      {/* 배경 이미지 */}
      <BackgroundImage src={이미지} />
      {/* 플랫폼 아이콘 */}
      <Box
        style={{
          position: 'absolute',
          top: '72px',
          left: '16px',
          zIndex: 10,
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
      {/* CardBody Shape */}
      <CardShapeWrap>
        <CardShape />
      </CardShapeWrap>
      {/* CardBody */}
      <CardBody>
        {/* 작성자, 별점, 작성일 Text */}
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '3px',
          }}
        >
          <Text
            mr="16px"
            style={{
              ...typo.detail1.semibold,
            }}
          >
            {작성자}
          </Text>
          <Tag
            variant="star"
            style={{
              ...typo.detail1.semibold,
            }}
            gap="2px"
          >
            <Star />
            {별점}
          </Tag>
          <Text
            style={{
              color: theme.colors.grayscale['gray-300'],
              ...typo.detail1.semibold,
            }}
          >
            {작성일}
          </Text>
        </Box>
        {/* 내용 Text */}
        <Box
          mt="8px"
          mb="24px"
          height="52px"
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              ...typo.detail1.medium,
            }}
          >
            {내용}
          </Text>
        </Box>
        {/* 태그 아이템 */}
        <TagWrap>
          {태그.split(',').map(item => {
            return (
              <Tag key={item} variant="review">
                {item}
              </Tag>
            );
          })}
        </TagWrap>
        {/* 찜수 Text */}
        <Box
          mt="16px"
          height="35px"
          mb="35px"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: theme.colors.grayscale['gray-300'],
              ...typo.detail1.semibold,
            }}
          >
            {찜수}
          </Text>
        </Box>
      </CardBody>
      {/* 좋아요 버튼 (임시) */}
      <Box
        style={{
          position: 'absolute',
          width: '305px',
          left: '0',
          bottom: '0',
        }}
      >
        <Button width="304px" variant="red-outlined">
          {좋아요 ? '좋아요 취소' : '좋아요'}
        </Button>
      </Box>
    </Root>
  );
};

export default SquareCard;
