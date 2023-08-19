import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { typo } from '../foundations/typo';

const badgeVariant = defineStyle(props => {
  const { colorScheme } = props;
  return {
    color: 'grayscale.gray-50',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    py: '4px',
    px: '8px',
    borderRadius: '2px',
    bg: `${colorScheme}`,
    textTransform: 'none',
    ...typo.detail2.bold,
  };
});

export const badgeTheme = defineStyleConfig({
  baseStyle: {
    color: 'grayscale.gray-50',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    py: '4px',
    px: '8px',
    borderRadius: '2px',
  },
  variants: {
    badgeVariant,
  },
  defaultProps: {
    variant: 'badgeVariant',
  },
});
