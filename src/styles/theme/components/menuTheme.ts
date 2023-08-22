import { defineStyleConfig } from '@chakra-ui/react';
import { shadows } from '../foundations/shadow';
import { typo } from '../foundations/typo';

export const menuTheme = defineStyleConfig({
  variants: {
    sort: {
      list: {
        bg: 'grayscale.white',
        borderRadius: '0px',
        minWidth: '0px',
        ...shadows.header,
      },
      item: {
        alignItems: 'center',
        color: 'grayscale.gray-500',
        px: '8px',
        py: '8px',
        minWidth: '106px',
        ...typo.detail1.semibold,
        _hover: {
          bg: 'grayscale.white',
          color: 'primary.classcope-blue-5',
          background: 'grayscale.gray-50',
          ...typo.detail1.bold,
        },
      },
    },
  },
  defaultProps: {
    variant: 'sort',
  },
});
