'use client';

import {
  ButtonProps as BaseButtonProps,
  Button as BaseButton,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

// ===

type Variant = (
  'primary-filled'
  | 'primary-outlined'
  | 'secondary-filled'
  | 'red-outlined'
  | 'purple-filled'
  | 'lecture-category'
  | 'disabled'
);

type Size = 'sm' | 'md' | 'lg' | 'category';

interface ButtonProps extends Omit<BaseButtonProps, 'variant' | 'size'> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const Button = ({
  variant = 'primary-filled',
  size = 'md',
  children,
  ...props
}: ButtonProps) => (
  <BaseButton
    variant={variant}
    size={size}
    {...props}
  >
    {children}
  </BaseButton>
);

export type { ButtonProps };
export default Button;
