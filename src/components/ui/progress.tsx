'use client';

import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from 'utils/twUtils';

import * as ProgressPrimitive from '@radix-ui/react-progress';

const progressVariants = cva('h-full w-full flex-1 transition-all', {
  variants: {
    variant: {
      primary_1: 'bg-[#80C9FF]',
      primary_2: 'bg-[#9FD3FC]',
      primary_3: 'bg-[#BEDDF9]',
      primary_4: 'bg-[#D3E4F7]',
      secondary_1: 'bg-purple-400',
      secondary_2: 'bg-purple-300',
      secondary_3: 'bg-purple-200',
      secondary_4: 'bg-purple-100',
      blue_1: 'bg-blue-500',
      blue_2: 'bg-blue-400',
      blue_3: 'bg-blue-300',
    },
  },
  defaultVariants: {
    variant: 'primary_1',
  },
});

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, variant, value, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn('relative h-24 w-full overflow-hidden rounded-sm bg-grayscale-100', className)}
      {...props}
    >
      <p className="absolute left-8 z-1 translate-y-1/2 text-white detail2-semibold">커리큘럼과 똑같아요</p>
      <ProgressPrimitive.Indicator
        className={cn(progressVariants({ variant }))}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
