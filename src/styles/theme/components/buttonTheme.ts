import { defineStyleConfig } from '@chakra-ui/react';
import { typo } from '../foundations/typo';

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    letterSpacing: '-0.42px',
    borderRadius: '2px',
  },
  sizes: {
    sm: {
      w: '68px',
      p: '8px',
    },
    md: {
      w: '108px',
      px: '16px',
      py: '8px',
    },
    lg: {
      w: '312px',
      px: '16px',
      py: '12px',
    },
    category: {
      w: '104px',
      p: '8px',
      ...typo.detail1.semibold,
    },
  },
  variants: {
    'primary-filled': {
      bg: 'primary.classcope-blue-3',
      color: 'white',
      _hover: {
        bg: 'primary.classcope-blue-5',
      },
      _active: {
        bg: 'grayscale.gray-600',
      },
    },
    'primary-outlined': {
      border: '1px solid',
      borderColor: 'primary.classcope-blue-4',
      bg: 'grayscale.white',
      color: 'primary.classcope-blue-4',
      _hover: {
        bg: 'grayscale.gray-50',
      },
      _active: {
        bg: 'primary.classcope-blue-4',
        color: 'grayscale.white',
      },
    },
    'secondary-filled': {
      bg: 'grayscale.gray-50',
      color: 'grayscale.gray-700',
      _hover: {
        bg: 'secondgrayscale.gray-100',
      },
      _active: {
        bg: 'primary.classcope-blue-4',
        color: 'grayscale.white',
      },
    },
    'red-outlined': {
      border: '1px solid',
      borderColor: 'grayscale.gray-100',
      bg: 'grayscale.white',
      color: 'grayscale.gray-300',
      _hover: {
        borderColor: 'red',
        bg: '#FDE7E7',
        color: 'red',
      },
      _active: {
        borderColor: 'grayscale.gray-100',
        bg: 'grayscale.white',
        color: 'red',
      },
    },
    'purple-filled': {
      bg: 'secondary.classcope-purple-3',
      color: 'grayscale.white',
      _hover: {
        bg: 'secondary.classcope-purple-5',
      },
      _active: {
        bg: 'grayscale.gray-600',
      },
    },
    'lecture-category': {
      bg: 'grayscale.white',
      color: 'grayscale.gray-500',
      borderRadius: '4px',
      boxShadow: '0px 3px 12px 0px rgba(184, 184, 204, 0.20)',
      _hover: {
        border: '1px solid',
        borderColor: 'primary.classcope-blue-5',
        color: 'primary.classcope-blue-5',
      },
      _active: {
        bg: 'rgba(205, 216, 255, 0.36)',
      },
    },
    disabled: {
      bg: 'grayscale.gray-100',
      color: 'grayscale.gray-300',
    },
  },
  defaultProps: {
    size: 'category',
    variant: 'lecture-category',
  },
});
