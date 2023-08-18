import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { typo } from '../foundations/typo';

const tabsVariant = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
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
      bg: `${c}`,
      gap: '16px',
    },
  };
});

export const tabsTheme = defineStyleConfig({
  variants: {
    tabsVariant,
  },

  defaultProps: {
    variant: 'tabsVariant',
  },
});
