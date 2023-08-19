'use client';
import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider as ChakraCacheProvider } from '@chakra-ui/next-js';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import theme from 'styles/theme';

type AppProviderProps = {
  children: ReactNode,
};


const AppProvider = ({
  children,
}: AppProviderProps) => (
  <EmotionThemeProvider theme={theme}>
    <ChakraCacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </ChakraCacheProvider>
  </EmotionThemeProvider>
);

export type { AppProviderProps };
export default AppProvider;
