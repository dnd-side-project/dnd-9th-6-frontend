import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

const meta = {
  title: 'Classcope/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

export const LectureSortSelect: StoryObj<typeof Select> = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="추천순" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="추천순">추천순</SelectItem>
        <SelectItem value="가격 높은순">가격 높은순</SelectItem>
        <SelectItem value="가격 낮은순">가격 낮은순</SelectItem>
        <SelectItem value="후기 많은순">후기 많은순</SelectItem>
        <SelectItem value="북마크순">북마크순</SelectItem>
      </SelectContent>
    </Select>
  ),
};
