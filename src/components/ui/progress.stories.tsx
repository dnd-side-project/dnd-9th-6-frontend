import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from './progress';

const meta = {
  title: 'Classcope/Progress',
  component: Progress,
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;

export const Primary: StoryObj<typeof Progress> = {
  render: (args) => (
    <div className="flex flex-col gap-[4px]">
      <Progress {...args} variant="primary_1" label="커리큘럼과 똑같아요" count={9} value={80} className="w-[60%]">
        Progress
      </Progress>
      <Progress {...args} variant="primary_2" label="구성이 알차요" count={9} value={60} className="w-[60%]">
        Progress
      </Progress>
      <Progress {...args} variant="primary_3" label="내용이 자세해요" count={9} value={50} className="w-[60%]">
        Progress
      </Progress>
      <Progress {...args} variant="primary_4" label="이해가 잘돼요" count={9} value={30} className="w-[60%]">
        Progress
      </Progress>
    </div>
  ),
};
