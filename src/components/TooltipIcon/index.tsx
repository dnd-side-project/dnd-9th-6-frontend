'use client';

import {
  Box,
  Tooltip,
  TooltipProps as BaseTooltipProps,
  forwardRef,
} from '@chakra-ui/react';
import Inflearn from 'assets/icons/platform/inflearn.svg';
import Fastcampus from 'assets/icons/platform/fastcampus.svg';
import Coloso from 'assets/icons/platform/coloso.svg';
import Class101 from 'assets/icons/platform/class101.svg';

type Variant = 'inflearn' | 'fastcampus' | 'coloso' | 'class101';

interface PlatformIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: Variant;
}

const PlatformIcon = forwardRef<PlatformIconProps, 'svg'>(
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

interface TooltipProps extends Omit<BaseTooltipProps, 'variant' | 'children'> {
  variant?: Variant;
}

const TooltipIcon = ({ variant, ...props }: TooltipProps) => (
  <Tooltip hasArrow zIndex={200} placement="top" label={variant} {...props}>
    <Box m="1px" display="inline-flex">
      <PlatformIcon variant={variant} />
    </Box>
  </Tooltip>
);

export type { PlatformIconProps, TooltipProps };
export { TooltipIcon, PlatformIcon };
