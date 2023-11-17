import LectureDialog from 'components/Dialog/LectureDialog';

import type { Meta, StoryObj } from '@storybook/react';

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
  },
  render: (args) => <LectureDialog {...args} />,
};
