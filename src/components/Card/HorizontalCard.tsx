'use client';
import { Card as BaseCard, CardProps, Text, Box } from '@chakra-ui/react';

import styled from '@emotion/styled';
import FastCampus from 'assets/icons/platform/fastcampus-16.svg';
import Inflearn from 'assets/icons/platform/inflearn-16.svg';
import Coloso from 'assets/icons/platform/coloso-16.svg';
import Class101 from 'assets/icons/platform/class101-16.svg';
import theme from 'styles/theme';
import { typo } from 'styles/theme/foundations/typo';
import { Tag } from 'components/Tag';

const Root = styled(BaseCard)`
  display: flex;
  width: 547px;
  height: 178px;
  padding: 16px 8px 16px 8px;
  align-items: flex-start;
  border-radius: 0px;
  background-color: ${theme.colors.grayscale.white};
  box-shadow: 4px 3px 16px 0px rgba(108, 108, 128, 0.05);
  background-size: cover;
  overflow: hidden;
`;

const TagWrap = styled.div`
  display: flex;
  width: 254px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 6px;
  flex-wrap: wrap;
`;

interface HorizontalCardProps extends CardProps {
  타이틀: string;
  작성자: string;
  별점: number;
  작성일: string;
  내용: string;
  태그: string;
  플랫폼: string;
}

const HorizontalCard = ({
  타이틀 = '',
  작성자 = '',
  별점 = 0,
  작성일 = '',
  내용 = '',
  태그 = '',
  플랫폼 = '',
  ...props
}: HorizontalCardProps) => {
  return (
    <Root {...props}>
      <Box
        style={{
          position: 'absolute',
          top: '21px',
          right: '8px',
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
      <Box
        style={{
          display: 'flex',
          width: '515px',
          height: '26px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          style={{
            display: 'flex',
            width: '388px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '2px',
          }}
        >
          <Text
            mr="16px"
            style={{
              ...typo.detail2.semibold,
            }}
          >
            {작성자}
          </Text>
          <Text
            style={{
              color: theme.colors.grayscale['gray-300'],
              ...typo.detail2.semibold,
            }}
          >
            {작성일}
          </Text>
        </Box>
        <Tag
          mr="8px"
          variant="star"
          style={{
            ...typo.body3.bold,
          }}
          gap="2px"
        >
          {별점}
        </Tag>
      </Box>

      <Box
        mt="8px"
        mb="22px"
        height="52px"
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Text
          style={{
            ...typo.body3.medium,
          }}
        >
          {내용}
        </Text>
      </Box>
      <Box display="flex">
        <TagWrap>
          {태그.split(',').map((item, index) => {
            return (
              <Tag key={index} variant="review">
                {item}
              </Tag>
            );
          })}
        </TagWrap>
        <Text
          style={{
            color: theme.colors.primary['classcope-blue-3'],
            ...typo.detail2.semibold,
          }}
        >
          {타이틀}
        </Text>
      </Box>
    </Root>
  );
};

export default HorizontalCard;
