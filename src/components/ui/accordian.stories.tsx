import SideBar from 'components/SideBar';
import { Accordion } from 'components/ui/accordion';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Classcope/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

export const SideBarExample: StoryObj<typeof Accordion> = {
  render: () => <SideBar />,
};
