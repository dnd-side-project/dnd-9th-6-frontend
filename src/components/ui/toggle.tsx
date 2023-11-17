'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'utils/twUtils';

import * as TogglePrimitive from '@radix-ui/react-toggle';

const toggleVariants = cva('inline-flex cursor-pointer items-center justify-center transition-colors', {
  variants: {
    variant: {
      default: 'bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
