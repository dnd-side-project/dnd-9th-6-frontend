import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio-group';

const meta = {
  title: 'Classcope/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;

export const RadioGroupExample: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <RadioGroupItem value="option-one" id="option-one">
        전체
      </RadioGroupItem>
      <RadioGroupItem value="option-two" id="option-two">
        카테고리
      </RadioGroupItem>
    </RadioGroup>
  ),
};
