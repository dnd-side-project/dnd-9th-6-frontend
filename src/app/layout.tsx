import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

import AppProvider from 'components/AppProvider';

interface RootLayoutProps {
  children: React.ReactNode;
}

const rootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
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

export const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export default rootLayout;
