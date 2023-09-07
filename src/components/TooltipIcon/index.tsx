import React from 'react';
import Inflearn from 'assets/icons/platform/inflearn.svg';
import Fastcampus from 'assets/icons/platform/fastcampus.svg';
import Coloso from 'assets/icons/platform/coloso.svg';
import Class101 from 'assets/icons/platform/class101.svg';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'components/ui/tooltip';

type Variant = 'inflearn' | 'fastcampus' | 'coloso' | 'class101';

interface PlatformIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: Variant;
}

const PlatformIcon = React.forwardRef<HTMLOrSVGElement, PlatformIconProps>(
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
  }
);

PlatformIcon.displayName = 'PlatformIcon';

const TooltipIcon = ({ variant, ...props }: { variant: Variant }) => (
  <TooltipProvider {...props}>
    <Tooltip>
      <TooltipTrigger>
        <PlatformIcon variant={variant} />
      </TooltipTrigger>
      <TooltipContent className="m-[1px] inline-flex">{variant}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export type { PlatformIconProps };
export { TooltipIcon, PlatformIcon };
