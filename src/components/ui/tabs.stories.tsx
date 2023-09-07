import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger } from './tabs';

const meta = {
  title: 'Classcope/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

export const TobBarTab: StoryObj<typeof Tabs> = {
  args: {},
  render: args => (
    <Tabs {...args} className="bg-blue-500">
      <TabsList>
        <TabsTrigger value="강의">강의</TabsTrigger>
        <TabsTrigger value="스코프">스코프</TabsTrigger>
        <TabsTrigger value="찜한 강의">찜한 강의</TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};
