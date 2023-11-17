import './globals.css';
import localFont from 'next/font/local';
import { Metadata } from 'next';

import AppProvider from 'components/AppProvider';
import META from 'constants/metadata';
import GoogleAnalytics from 'components/GoogleAnalytics';

interface RootLayoutProps {
  children: React.ReactNode;
}

const pretendard = localFont({
  src: [
    {
      path: '/fonts/Pretendard-Thin.woff2',
      weight: '100',
      style: 'woff2',
    },
    {
      path: '/fonts/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'woff2',
    },
    {
      path: '/fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'woff2',
    },
    {
      path: '/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'woff2',
    },
    {
      path: '/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'woff2',
    },
    {
      path: '/fonts/Pretendard-Semibold.woff2',
      weight: '600',
      style: 'woff2',
    },
    {
      path: '/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'woff2',
    },
    {
      path: '/fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'woff2',
    },
    {
      path: '/fonts/Pretendard-Black.woff2',
      weight: '900',
      style: 'woff2',
    },
  ],
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

export const metadata: Metadata = {
  metadataBase: new URL(META.DOMAIN_URL),
  title: {
    default: META.TITLE,
    template: `%s | ${META.SITE_NAME}`,
  },
  description: META.DESCRIPTION,
  keywords: [...META.KEYWORD],
  openGraph: {
    title: META.TITLE,
    description: META.DESCRIPTION,
    siteName: META.SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    url: META.DOMAIN_URL,
  },
  twitter: {
    title: META.TITLE,
    description: META.DESCRIPTION,
  },
};

const rootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={pretendard.className}>
        <AppProvider>{children}</AppProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
};

export default rootLayout;
