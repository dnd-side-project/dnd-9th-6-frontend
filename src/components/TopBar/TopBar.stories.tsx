import type { Meta, StoryObj } from '@storybook/react';

import TopBar from '.';

const meta = {
  title: 'Classcope/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof TopBar>;

export default meta;

export const TopBarExample: StoryObj<typeof TopBar> = {
  render: () => <TopBar />,
};
