import { defineStyleConfig } from '@chakra-ui/react';
import { typo } from '../foundations/typo';
import { shadows } from '../foundations/shadow';

export const checkboxTheme = defineStyleConfig({
  variants: {
    button: {
      control: {
        display: 'none',
      },
      container: {
        display: 'inline-flex',
        alignItems: 'center',
        py: '8px',
        px: '16px',
        bg: 'grayscale.white',
        color: 'grayscale.gray-400',
        border: '1px solid',
        borderColor: 'grayscale.gray-50',
        ...shadows.card,
        _hover: {
          color: 'primary.classcope-blue-5',
        } as unknown as string,
        _checked: {
          bg: 'primary.classcope-blue-0.5',
          color: 'primary.classcope-blue-5',
          borderColor: 'primary.classcope-blue-5',
          ...shadows.blue,
        } as unknown as string,
      },
      label: {
        ...typo.body3.semibold,
      },
    },
    review: {
      control: {
        display: 'none',
      },
      container: {
        display: 'inline-flex',
        alignItems: 'center',
        py: '8px',
        px: '16px',
        bg: 'grayscale.white',
        color: 'grayscale.gray-400',
        border: '1px solid',
        borderColor: 'grayscale.gray-100',
        ...shadows.card,
        _hover: {
          color: 'primary.classcope-blue-5',
        } as unknown as string,
        _checked: {
          bg: 'primary.classcope-blue-0.5',
          color: 'primary.classcope-blue-5',
          borderColor: 'primary.classcope-blue-5',
          ...shadows.blue,
        } as unknown as string,
      },
      label: {
        ...typo.body3.medium,
      },
    },
    text: {
      control: {
        borderRadius: '0px',
        _hover: {
          bg: 'primary.classcope-blue-0.5',
          borderColor: 'primary.classcope-blue-5',
        },
        _checked: {
          bg: 'primary.classcope-blue-5',
          borderColor: 'primary.classcope-blue-5',
        },
      },
      label: {
        ...typo.body3.semibold,
      },
      bg: 'grayscale.gray-100',
      color: 'grayscale.gray-300',
    },
  },
  defaultProps: {
    variant: 'button',
  },
});
