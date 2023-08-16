import StyledThemeProvider from '@/components/providers/StyledThemeProvider';
import React from 'react';
import localFont from 'next/font/local';

interface RootLayoutProps {
  children: React.ReactNode;
}

const rootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko">
      <body>
        <StyledThemeProvider>{children}</StyledThemeProvider>
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
