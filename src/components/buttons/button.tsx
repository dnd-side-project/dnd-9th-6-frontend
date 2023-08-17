'use client';
import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type ChakraButtonProps = MergeComponentProps<
  ButtonProps,
  {
    /** @description 버튼 종류 (primary-filled, primary-outlined, secondary-filled, red-outlined, purple-filled, lecture-category, disabled) */
    variant: ButtonVariant;
    /** @description 버튼 사이즈 (sm, md, lg, lecture) */
    size: ButtonSize;
    /** @description 버튼 텍스트 */
    children?: string;
  }
>;

export const Button = ({
  children,
  ...props
}: PropsWithChildren & ChakraButtonProps) => (
  <ChakraButton {...props}>{children}</ChakraButton>
);
