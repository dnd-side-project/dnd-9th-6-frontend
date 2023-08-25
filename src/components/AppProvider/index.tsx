'use client';
import { ReactNode, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider as ChakraCacheProvider } from '@chakra-ui/next-js';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import theme from 'styles/theme';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <EmotionThemeProvider theme={theme}>
        <ChakraCacheProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </ChakraCacheProvider>
      </EmotionThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export type { AppProviderProps };
export default AppProvider;
