import type { Theme as ChakraTheme, ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import { buttonTheme } from './components/buttonTheme';
// Foundations
import { foundations } from './foundations';
// Global styles (overrides)
import styles from './styles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  styles,
  config,
  ...foundations,
  components: { Button: buttonTheme },
}) as Theme;

type Theme = ChakraTheme & typeof foundations;

export type { Theme };
export default theme;
