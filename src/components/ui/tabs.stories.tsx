import type { Meta, StoryObj } from '@storybook/react';
import Cog from 'assets/icons/cog.svg';
import Pencil from 'assets/icons/pencil.svg';
import Headset from 'assets/icons/headset.svg';
import Logout from 'assets/icons/logout.svg';
import { Tabs, TabsList, TabsTrigger } from './tabs';

const meta = {
  title: 'Classcope/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

export const TopBarTab: StoryObj<typeof Tabs> = {
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

export const MyProfileTab: StoryObj<typeof Tabs> = {
  args: {},
  render: args => (
    <Tabs {...args} className="inline-flex bg-white">
      <TabsList className="flex max-w-[174px] flex-col items-start gap-0">
        <TabsTrigger
          value="내 프로필"
          asChild
          className="text-grayscale-500 data-[state=active]:border-b-0 data-[state=active]:border-l-2 data-[state=active]:border-blue-500 data-[state=active]:bg-grayscale-50 data-[state=active]:text-blue-500"
        >
          <div className="flex w-full cursor-pointer gap-8 px-16 py-12">
            <Cog />
            <p className="body3-bold">내 프로필</p>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="내 후기"
          asChild
          className="text-grayscale-500 data-[state=active]:border-b-0 data-[state=active]:border-l-2 data-[state=active]:border-blue-500 data-[state=active]:bg-grayscale-50 data-[state=active]:text-blue-500"
        >
          <div className="flex w-full cursor-pointer gap-8 px-16 py-12">
            <Pencil />
            <p className="body3-bold">내 후기</p>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="문의하기"
          asChild
          className="text-grayscale-500 data-[state=active]:border-b-0 data-[state=active]:border-l-2 data-[state=active]:border-blue-500 data-[state=active]:bg-grayscale-50 data-[state=active]:text-blue-500"
        >
          <div className="flex w-full cursor-pointer gap-8 px-16 py-12">
            <Headset />
            <p className="body3-bold">문의하기</p>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="로그아웃"
          asChild
          className="text-grayscale-500 data-[state=active]:border-b-0 data-[state=active]:border-l-2 data-[state=active]:border-blue-500 data-[state=active]:bg-grayscale-50 data-[state=active]:text-blue-500"
        >
          <div className="flex w-full cursor-pointer gap-8 px-16 py-12">
            <Logout />
            <p className="body3-bold">로그아웃</p>
          </div>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};
