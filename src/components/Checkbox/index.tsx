'use client';

import {
  CheckboxProps as BaseCheckboxProps,
  Checkbox as BaseCheckbox,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type Variant = 'button' | 'review' | 'text';

interface CheckboxProps extends Omit<BaseCheckboxProps, 'variant'> {
  /** @description 버튼 종류 (button, review, text) */
  variant?: Variant;

  /** @description 버튼 텍스트 */
  children: ReactNode;
}

const Checkbox = ({
  variant = 'button',
  children,
  ...props
}: CheckboxProps) => (
  <BaseCheckbox variant={variant} {...props}>
    {children}
  </BaseCheckbox>
);

export type { CheckboxProps };
export default Checkbox;
