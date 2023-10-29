'use client';

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LECTURES_KEY } from 'constants/querykeys';
import TIME from 'constants/time';
import { RecoilRoot } from 'recoil';

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
            staleTime: 1000 * 20,
          },
        },
      })
  );

  queryClient.setQueryDefaults(LECTURES_KEY.all, {
    staleTime: TIME.DAY,
    cacheTime: Infinity,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{children}</RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export type { AppProviderProps };
export default AppProvider;
