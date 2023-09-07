import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from 'utils/twUtils';

const badgeVariants = cva(
  'inline-flex items-center rounded-[2px] px-[8px] py-[4px] transition-colors detail2-bold',
  {
    variants: {
      variant: {
        white: 'bg-grayscale-50 text-blue-300',
        blue: 'bg-blue-400 text-white',
        black: 'bg-black text-white',
      },
    },
    defaultVariants: {
      variant: 'white',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
