import { defineStyleConfig } from '@chakra-ui/react';
import { typo } from '../foundations/typo';

export const tagTheme = defineStyleConfig({
  sizes: {
    sm: {
      ...typo.detail3.bold,
    },
    md: {
      ...typo.detail1.semibold,
    },
  },
  variants: {
    review: {
      container: {
        bg: 'grayscale.gray-50',
        color: 'grayscale.gray-600',
        justifyContent: 'center',
        alignItems: 'center',
        py: '4px',
        px: '8px',
        borderRadius: '2px',
        ...typo.detail1.semibold,
      },
    },
    category: {
      container: {
        bg: 'grayscale.white',
        color: 'primary.classcope-blue-4',
        justifyContent: 'center',
        alignItems: 'center',
        py: '4px',
        px: '8px',
        gap: '2px',
        border: '1px solid',
        borderColor: 'grayscale.gray-100',
        borderRadius: '4px',
        ...typo.H5.bold,
      },
    },
    selected: {
      container: {
        bg: 'grayscale.white',
        color: 'grayscale.gray-700',
        justifyContent: 'center',
        alignItems: 'center',
        py: '4px',
        px: '8px',
        border: '1px solid',
        borderColor: 'grayscale.gray-100',
        borderRadius: '2px',
        ...typo.detail1.bold,
      },
    },
    star: {
      container: {
        bg: 'grayscale.white',
        color: 'grayscale.gray-800',
        justifyContent: 'center',
        alignItems: 'center',
        p: '4px',
        borderRadius: '2px',
      },
    },
  },
  defaultProps: {
    variant: 'review',
  },
});
