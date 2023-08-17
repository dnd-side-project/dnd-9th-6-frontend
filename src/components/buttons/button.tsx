'use client';
import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const Button = ({
  children,
  ...props
}: PropsWithChildren & ButtonProps) => (
  <ChakraButton {...props}>{children}</ChakraButton>
);
