'use client';

import { ReactNode, useEffect, useState } from 'react';
import { LECTURES_KEY } from 'constants/querykeys';
import TIME from 'constants/time';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ChannelService from './ChannelTalk';

type AppProviderProps = {
  children: ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  useEffect(() => {
    ChannelService.loadScript();

    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_ID || '',
    });
  }, []);

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
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export type { AppProviderProps };
export default AppProvider;
