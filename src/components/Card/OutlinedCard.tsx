'use client';
import { Card as BaseCard, CardProps, Text, Box } from '@chakra-ui/react';

import styled from '@emotion/styled';
import FastCampus from 'assets/icons/platform/fastcampus-16.svg';
import Inflearn from 'assets/icons/platform/inflearn-16.svg';
import Coloso from 'assets/icons/platform/coloso-16.svg';
import Class101 from 'assets/icons/platform/class101-16.svg';
import theme from 'styles/theme';
import { typo } from 'styles/theme/foundations/typo';

const Root = styled(BaseCard)`
  display: flex;
  flex-direction: row;
  width: 389px;
  height: 88px;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 0px;
  background-color: ${theme.colors.grayscale.white};
  box-shadow: 4px 3px 16px 0px rgba(108, 108, 128, 0.05);
  background-size: cover;
`;

interface OutlinedCardProps extends CardProps {
  강사: string;
  타이틀: string;
  플랫폼: string;
  이미지: string;
}

const OutlinedCard = ({
  강사 = '',
  타이틀 = '',
  플랫폼 = '',
  이미지 = '',
  ...props
}: OutlinedCardProps) => {
  return (
    <Root {...props}>
      <Box
        style={{
          width: '103px',
          height: '72px',
          backgroundImage: `url(${이미지})`,
          backgroundSize: 'cover',
        }}
      />
      <Box display="flex" flexDirection="column" gap="8px" width="262px">
        <Box display="flex">
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
          <Text
            ml="8px"
            style={{
              ...typo.detail1.semibold,
            }}
          >
            {강사}
          </Text>
        </Box>
        <Text
          style={{
            ...typo.body2.bold,
          }}
        >
          {타이틀}
        </Text>
      </Box>
    </Root>
  );
};

export default OutlinedCard;
