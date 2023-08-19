'use client';

import {
  ButtonProps as BaseButtonProps,
  Button as BaseButton,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

// ===

type Variant =
  | 'primary-filled'
  | 'primary-outlined'
  | 'secondary-filled'
  | 'red-outlined'
  | 'purple-filled'
  | 'lecture-category-main'
  | 'lecture-category-sub'
  | 'disabled'
  | 'google'
  | 'kakao';

type Size = 'sm' | 'md' | 'lg' | 'category-main' | 'category-sub';

interface ButtonProps extends Omit<BaseButtonProps, 'variant' | 'size'> {
  /** @description 버튼 종류 (primary-filled, primary-outlined, secondary-filled, red-outlined, purple-filled, lecture-category, disabled, google, kakao) */
  variant?: Variant;
  /** @description 버튼 사이즈 (sm, md, lg, category) */
  size?: Size;
  /** @description 버튼 텍스트 */
  children: ReactNode;
}

const Button = ({
  variant = 'primary-filled',
  size = 'md',
  children,
  ...props
}: ButtonProps) => (
  <BaseButton variant={variant} size={size} {...props}>
    {children}
  </BaseButton>
);

export type { ButtonProps };
export default Button;
