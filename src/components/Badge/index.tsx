'use client';

import {
  Badge as BaseBadge,
  BadgeProps as BaseBadgeProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type Color =
  | 'primary.classcope-blue-3'
  | 'primary.classcope-blue-3 '
  | 'grayscale.gray-600';

interface BadgeProps extends Omit<BaseBadgeProps, 'colorScheme'> {
  colorScheme?: Color;
  children: ReactNode;
}

const Badge = ({
  colorScheme = 'primary.classcope-blue-3',
  children,
  ...props
}: BadgeProps) => (
  <BaseBadge colorScheme={colorScheme} {...props}>
    {children}
  </BaseBadge>
);

export type { BadgeProps };
export { Badge };
