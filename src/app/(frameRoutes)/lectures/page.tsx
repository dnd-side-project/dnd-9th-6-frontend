'use client';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useRadioGroup,
} from '@chakra-ui/react';
import LectureAccordion from 'components/Category';
import Container from 'components/Container';
import Pentip from 'assets/icons/designlarge.svg';
import { typo } from 'styles/theme/foundations/typo';
import Radio from 'components/Radio';
import Search from 'assets/icons/search.svg';
import { Menu, MenuButton, MenuList, MenuItem } from 'components/Menu';
import { colors } from 'styles/theme/foundations/colors';
import Arrow from 'assets/icons/angle-down.svg';

const page = () => {
  const options = [
    '전체',
    'UI/UX',
    '2D/그래픽/브랜딩',
    '3D/건축',
    '제품디자인',
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'category',
    defaultValue: '전체',
  });

  const group = getRootProps();
  return (
    <Container>
      <Box
        mt="54px"
        style={{
          display: 'flex',
        }}
      >
        {/* 카테고리 사이드바 */}
        <LectureAccordion />
        {/* 강의 검색 결과 섹션 */}
        <Box
          ml="31px"
          width="100%"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* 검색 타이틀 */}
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Pentip />
            <Text
              style={{
                ...typo.H4.bold,
              }}
            >
              디자인
            </Text>
          </Box>
          {/* 라디오 버튼 & 검색창 */}
          <Box
            display="flex"
            justifyContent="space-between"
            mt="25px"
            {...group}
          >
            <Box display="flex" gap="8px">
              {options.map(value => {
                const radio = getRadioProps({ value });
                return (
                  <Radio key={value} {...radio}>
                    {value}
                  </Radio>
                );
              })}
            </Box>
            <InputGroup
              style={{
                display: 'flex',
                width: '190px',
                height: '32px',
              }}
            >
              <Input
                placeholder="전체 강의 검색"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '8px',
                  gap: '10px',
                  borderRadius: '2px',
                  border: '1px solid #B8B8CC',
                  background: '#FFF',
                  boxShadow: '0px 3px 12px 0px rgba(184, 184, 204, 0.20)',
                  ...typo.body3.medium,
                }}
              />
              <InputRightElement>
                <Box
                  as="button"
                  style={{
                    width: '32px',
                    paddingLeft: '4px',
                    borderLeft: '1px solid #B8B8CC',
                  }}
                >
                  <Search />
                </Box>
              </InputRightElement>
            </InputGroup>
          </Box>
          {/* 검색 결과 텍스트 & 필터 드롭다운 */}
          <Box
            mt="33px"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                ...typo.body3.medium,
              }}
            >
              6개의 검색결과를 찾았어요
            </Text>
            <Menu>
              <MenuButton
                style={{
                  // hover 시 색상 변경
                  display: 'flex',
                  padding: '8px 8px 8px 16px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '4px',
                  borderRadius: '2px',
                  color: colors.grayscale['gray-700'],
                  background: colors.grayscale['gray-100'],
                  ...typo.body3.bold,
                }}
                _hover={{
                  color: colors.grayscale.white,
                  background: colors.grayscale['gray-400'],
                }}
              >
                <Box display="flex" gap="4px">
                  추천순
                  <Arrow fill={colors.grayscale['gray-700']} />
                </Box>
              </MenuButton>
              <MenuList>
                <MenuItem>추천순</MenuItem>
                <MenuItem>가격 높은순</MenuItem>
                <MenuItem>가격 낮은순</MenuItem>
                <MenuItem>후기 많은순</MenuItem>
                <MenuItem>북마크 순</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <img
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
            }}
            src="/images/demo3.png"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default page;
