'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import theme from '@/styles/theme';
import { CacheProvider } from '@chakra-ui/next-js';
export default function ChakraUIProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
