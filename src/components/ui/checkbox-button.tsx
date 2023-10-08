'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from 'utils/twUtils';

const CheckboxButton = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'flex appearance-none items-center justify-center gap-[4px] whitespace-nowrap rounded-[2px] border-[1px] border-grayscale-50 bg-white px-16 py-8 text-grayscale-400 shadow-card body3-semibold disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-blue-400 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-500 data-[state=checked]:shadow-blue',
      className
    )}
    {...props}
  >
    {children || <Check className="h-4 w-4" />}
  </CheckboxPrimitive.Root>
));
CheckboxButton.displayName = CheckboxPrimitive.Root.displayName;

export { CheckboxButton };
