'use client';

import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from 'utils/twUtils';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root className={cn('flex max-w-[660px] flex-wrap gap-8', className)} {...props} ref={ref} />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupVariants = cva('flex appearance-none items-center justify-center whitespace-nowrap', {
  variants: {
    variant: {
      lecture:
        'rounded-[2px] border-[1px] border-grayscale-100 bg-white px-16 py-8 text-grayscale-800 body3-medium disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-blue-400 data-[state=checked]:text-blue-500 data-[state=checked]:body3-semibold',
      review:
        'rounded-[2px] border-[1px] border-grayscale-50 bg-white px-16 py-8 text-grayscale-400 shadow-card body3-semibold disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-blue-400 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-500 data-[state=checked]:shadow-blue',
    },
  },
  defaultVariants: {
    variant: 'lecture',
  },
});

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof RadioGroupVariants> {}

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item ref={ref} className={cn(RadioGroupVariants({ variant }), className)} {...props}>
        {children}
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
