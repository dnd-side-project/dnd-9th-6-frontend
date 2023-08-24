'use client';

import {
  Badge as BaseBadge,
  BadgeProps as BaseBadgeProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type Color =
  | 'grayscale.gray-50'
  | 'primary.classcope-blue-4'
  | 'grayscale.gray-600';

interface BadgeProps extends Omit<BaseBadgeProps, 'colorScheme'> {
  colorScheme?: Color;
  children: ReactNode;
}

const Badge = ({
  colorScheme = 'grayscale.gray-50',
  children,
  ...props
}: BadgeProps) => (
  <BaseBadge
    colorScheme={colorScheme}
    color={colorScheme === 'grayscale.gray-50' ? '#90A9FE' : 'white'}
    {...props}
  >
    {children}
  </BaseBadge>
);

export type { BadgeProps };
export { Badge };
