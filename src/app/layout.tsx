import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

interface RootLayoutProps {
  children: React.ReactNode;
}

const rootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
};

export default rootLayout;
