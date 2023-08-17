'use client';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

export default function StyledThemeProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
