'use client';

import {
  Box,
  Tooltip,
  TooltipProps as BaseTooltipProps,
} from '@chakra-ui/react';
import { forwardRef } from 'react';
import Inflearn from 'assets/icons/platform/inflearn.svg';
import Fastcampus from 'assets/icons/platform/fastcampus.svg';
import Coloso from 'assets/icons/platform/coloso.svg';
import Class101 from 'assets/icons/platform/class101.svg';

type Variant = 'inflearn' | 'fastcampus' | 'coloso' | 'class101';

const CustomIcon = forwardRef<SVGAElement, { variant?: Variant }>(
  ({ variant }, ref) => {
    switch (variant) {
      case 'inflearn':
        return <Inflearn ref={ref} />;
      case 'fastcampus':
        return <Fastcampus ref={ref} />;
      case 'coloso':
        return <Coloso ref={ref} />;
      case 'class101':
        return <Class101 ref={ref} />;
      default:
        return <Inflearn ref={ref} />;
    }
  },
);

CustomIcon.displayName = 'CustomIcon';

interface TooltipProps extends Omit<BaseTooltipProps, 'variant' | 'children'> {
  variant?: Variant;
}

const TooltipIcon = ({ variant, ...props }: TooltipProps) => (
  <Tooltip hasArrow zIndex={200} placement="top" label={variant} {...props}>
    <Box m="1px" display="inline-flex">
      <CustomIcon variant={variant} />
    </Box>
  </Tooltip>
);

export default TooltipIcon;
