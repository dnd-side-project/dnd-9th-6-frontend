import React from 'react';
import Class101 from 'assets/icons/platform/class101.svg';
import Class10116 from 'assets/icons/platform/class101-16.svg';
import Class10124 from 'assets/icons/platform/class101-24.svg';
import Class10132 from 'assets/icons/platform/class101-32.svg';
import Class10140 from 'assets/icons/platform/class101-40.svg';
import Coloso from 'assets/icons/platform/coloso.svg';
import Coloso16 from 'assets/icons/platform/coloso-16.svg';
import Coloso24 from 'assets/icons/platform/coloso-24.svg';
import Coloso32 from 'assets/icons/platform/coloso-32.svg';
import Coloso40 from 'assets/icons/platform/coloso-40.svg';
import Fastcampus from 'assets/icons/platform/fastcampus.svg';
import Fastcampus16 from 'assets/icons/platform/fastcampus-16.svg';
import Fastcampus24 from 'assets/icons/platform/fastcampus-24.svg';
import Fastcampus32 from 'assets/icons/platform/fastcampus-32.svg';
import Fastcampus40 from 'assets/icons/platform/fastcampus-40.svg';
import Inflearn from 'assets/icons/platform/inflearn.svg';
import Inflearn16 from 'assets/icons/platform/inflearn-16.svg';
import Inflearn24 from 'assets/icons/platform/inflearn-24.svg';
import Inflearn32 from 'assets/icons/platform/inflearn-32.svg';
import Inflearn40 from 'assets/icons/platform/inflearn-40.svg';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'components/ui/tooltip';

type Variant = 'inflearn' | 'fastcampus' | 'coloso' | 'class101';

type IconSize = '16' | '24' | '32' | '40';

interface PlatformIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: Variant;
  size?: IconSize;
}

const PlatformIcon = React.forwardRef<HTMLOrSVGElement, PlatformIconProps>(({ variant, size }, ref) => {
  switch (variant) {
    case 'inflearn':
      switch (size) {
        case '16':
          return <Inflearn16 ref={ref} />;
        case '24':
          return <Inflearn24 ref={ref} />;
        case '32':
          return <Inflearn32 ref={ref} />;
        case '40':
          return <Inflearn40 ref={ref} />;
        default:
          return <Inflearn ref={ref} />;
      }
    case 'fastcampus':
      switch (size) {
        case '16':
          return <Fastcampus16 ref={ref} />;
        case '24':
          return <Fastcampus24 ref={ref} />;
        case '32':
          return <Fastcampus32 ref={ref} />;
        case '40':
          return <Fastcampus40 ref={ref} />;
        default:
          return <Fastcampus ref={ref} />;
      }
    case 'coloso':
      switch (size) {
        case '16':
          return <Coloso16 ref={ref} />;
        case '24':
          return <Coloso24 ref={ref} />;
        case '32':
          return <Coloso32 ref={ref} />;
        case '40':
          return <Coloso40 ref={ref} />;
        default:
          return <Coloso ref={ref} />;
      }
    case 'class101':
      switch (size) {
        case '16':
          return <Class10116 ref={ref} />;
        case '24':
          return <Class10124 ref={ref} />;
        case '32':
          return <Class10132 ref={ref} />;
        case '40':
          return <Class10140 ref={ref} />;
        default:
          return <Class101 ref={ref} />;
      }
    default:
      return <Inflearn ref={ref} />;
  }
});

PlatformIcon.displayName = 'PlatformIcon';

function TooltipIcon({ variant, size, ...props }: { variant: Variant; size: IconSize }) {
  return (
    <TooltipProvider {...props}>
      <Tooltip>
        <TooltipTrigger>
          <PlatformIcon variant={variant} size={size} />
        </TooltipTrigger>
        <TooltipContent className="m-[1px] inline-flex">{variant}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export type { PlatformIconProps };
export { PlatformIcon, TooltipIcon };
