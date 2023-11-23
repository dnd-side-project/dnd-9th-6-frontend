import LectureDialog from 'components/Dialog/LectureDialog';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import { Dialog } from './dialog';

const meta = {
  title: 'Classcope/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;

export const DialogExample: StoryObj<typeof LectureDialog> = {
  args: {
    가격: '100,000원',
    플랫폼: 'fastcampus',
    이미지: 'https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202308/132817-865/thumb--1-.jpg',
    별점: 4.5,
    리뷰수: 100,
    추천후기: [
      {
        타이틀: '김코딩의 자바스크립트 강의',
        작성자: '김코딩',
        별점: 4.5,
        작성일: '2023-08-23T00:00:00',
        내용: '강의가 너무 좋아요',
        태그: '뛰어난 강의력,구성이 알차요,도움이 많이 됐어요',
        플랫폼: 'fastcampus',
      },
      {
        타이틀: '김코딩의 자바스크립트 강의',
        작성자: '김코딩',
        별점: 4.5,
        작성일: '2023-08-23T00:00:00',
        내용: '강의가 너무 좋아요',
        태그: '뛰어난 강의력,구성이 알차요,도움이 많이 됐어요',
        플랫폼: 'fastcampus',
      },
      {
        타이틀: '김코딩의 자바스크립트 강의',
        작성자: '김코딩',
        별점: 4.5,
        작성일: '2023-08-23T00:00:00',
        내용: '강의가 너무 좋아요',
        태그: '뛰어난 강의력,구성이 알차요,도움이 많이 됐어요',
        플랫폼: 'fastcampus',
      },
    ],
  },
  render: (args) => (
    <LectureDialog {...args}>
      <Button variant="primary">Dialog</Button>
    </LectureDialog>
  ),
};
