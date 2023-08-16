import StyledThemeProvider from '@/components/providers/StyledThemeProvider';
import React from 'react';

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

export default rootLayout;
