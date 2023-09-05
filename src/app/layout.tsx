import './globals.css';
import localFont from 'next/font/local';

import AppProvider from 'components/AppProvider';

interface RootLayoutProps {
  children: React.ReactNode;
}

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

const rootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};



export default rootLayout;
