import ChakraUIProvider from '@/components/providers/ChakraUIProvider';
import { PropsWithChildren } from 'react';
import localFont from 'next/font/local';

const rootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko">
      <body>
        <ChakraUIProvider>{children}</ChakraUIProvider>
      </body>
    </html>
  );
};

export const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

export default rootLayout;
