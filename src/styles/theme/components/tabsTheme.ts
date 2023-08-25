import { defineStyleConfig } from '@chakra-ui/react';
import { typo } from '../foundations/typo';

export const tabsTheme = defineStyleConfig({
  variants: {
    tabsVariant: {
      tab: {
        color: 'grayscale.white',
        opacity: 0.7,
        py: '16px',
        px: '24px',
        ...typo.body3.bold,
        _selected: {
          opacity: 1,
          borderBottom: '2px solid',
          borderColor: 'grayscale.white',
        },
      },
      tablist: {
        display: 'inline-flex',
        bg: 'transparent',
        gap: '16px',
      },
    },
  },

  defaultProps: {
    variant: 'tabsVariant',
  },
});
