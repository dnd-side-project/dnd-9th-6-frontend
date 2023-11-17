import { CoverCard, HorizontalCard, LandScapeCard, OutlinedCard, SquareCard } from 'components/Card';

import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './card';

const meta = {
  title: 'Classcope/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

export const CoverCardExample: StoryObj<typeof CoverCard> = {
  args: {
    강사: '김코딩',
    타이틀: '김코딩의 자바스크립트 강의',
    가격: '100,000',
    플랫폼: 'fastcampus',
    이미지: 'https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202308/132817-865/thumb--1-.jpg',
  },
  render: (args) => <CoverCard {...args} />,
};

export const OutlinedCardExample: StoryObj<typeof OutlinedCard> = {
  args: {
    강사: '김코딩',
    타이틀: '김코딩의 자바스크립트 강의',
    플랫폼: 'fastcampus',
    이미지: 'https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202308/132817-865/thumb--1-.jpg',
  },
  render: (args) => <OutlinedCard {...args} />,
};

export const LandScapeCardExample: StoryObj<typeof LandScapeCard> = {
  args: {
    강사: '김코딩',
    타이틀: '김코딩의 자바스크립트 강의',
    가격: '100,000',
    플랫폼: 'fastcampus',
    이미지: 'https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202308/132817-865/thumb--1-.jpg',
    후기수: 100,
  },
  render: (args) => <LandScapeCard {...args} />,
};
export const HorizontalCardExample: StoryObj<typeof HorizontalCard> = {
  args: {
    타이틀: '김코딩의 자바스크립트 강의',
    작성자: '김코딩',
    별점: 4.5,
    작성일: '2023-08-23T00:00:00',
    내용: '강의가 너무 좋아요',
    태그: '뛰어난 강의력,구성이 알차요,도움이 많이 됐어요',
    플랫폼: 'fastcampus',
  },
  render: (args) => <HorizontalCard {...args} />,
};

export const SquareCardExample: StoryObj<typeof SquareCard> = {
  args: {
    작성자: '김코딩',
    별점: 4.5,
    작성일: '2023-08-23T00:00:00',
    내용: '강의가 너무 좋아요',
    태그: '뛰어난 강의력,구성이 알차요,도움이 많이 됐어요',
    이미지: 'https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202308/132817-865/thumb--1-.jpg',
    플랫폼: 'fastcampus',
    찜수: 100,
    좋아요: true,
  },
  render: (args) => <SquareCard {...args} />,
};
