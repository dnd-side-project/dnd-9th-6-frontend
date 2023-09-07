import type { Meta, StoryObj } from '@storybook/react';
import Search from 'assets/icons/search.svg';
import { Input } from './input';

const meta = {
  title: 'Classcope/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

export const SearchInput: StoryObj<typeof Input> = {
  args: {
    variant: 'search',
    size: 'lg',
    placeholder: '검색해보세요',
  },
  render: args => (
    <div className="relative w-[695px]">
      <Input {...args} />
      <button
        type="button"
        className="absolute right-0 top-0 flex h-full w-[56px] border-l border-grayscale-200 p-16"
      >
        <div className="translate-y-[-2px]">
          <Search />
        </div>
      </button>
    </div>
  ),
};
