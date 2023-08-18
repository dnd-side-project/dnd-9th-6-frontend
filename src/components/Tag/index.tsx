'use client';

import {
  Tag as BaseTag,
  TagProps as BaseTagProps,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type Variant = 'review' | 'category' | 'selected' | 'star';

type Size = 'sm' | 'md';

interface TagProps extends Omit<BaseTagProps, 'variant' | 'size'> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const Tag = ({ variant, size, children, ...props }: TagProps) => (
  <BaseTag variant={variant} size={size} {...props}>
    {children}
  </BaseTag>
);

export type { TagProps };
export { Tag, TagLeftIcon, TagRightIcon, TagCloseButton };
