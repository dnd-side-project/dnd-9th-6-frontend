import CategoryIcon from 'assets/icons/glass/all-i.svg';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
  title: 'Classcope/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    size: 'sm',
    variant: 'primary',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const Outlined: StoryObj<typeof Button> = {
  args: {
    size: 'sm',
    variant: 'outlined',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    size: 'sm',
    variant: 'secondary',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const Red: StoryObj<typeof Button> = {
  args: {
    size: 'sm',
    variant: 'red',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const Purple: StoryObj<typeof Button> = {
  args: {
    size: 'sm',
    variant: 'purple',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const Category: StoryObj<typeof Button> = {
  args: {
    size: 'icon',
    variant: 'category',
  },
  render: (args) => (
    <Button {...args}>
      <CategoryIcon />
      Button
    </Button>
  ),
};
