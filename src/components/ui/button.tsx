import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'utils/twUtils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-white body3-bold disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-blue-300 text-white hover:bg-blue-500 active:bg-blue-400',
        outlined:
          'border-[1px] border-blue-400 bg-white text-blue-300 hover:bg-blue-50 active:bg-blue-400 active:text-white',
        secondary:
          'bg-grayscale-100 text-grayscale-700 hover:bg-grayscale-200 active:bg-grayscale-400 active:text-white',
        red: 'border-[1px] border-grayscale-100 bg-white text-grayscale-300 hover:border-red hover:text-red active:border-red active:bg-[#FDE7E7] active:text-red',
        purple:
          'bg-purple-300 text-white hover:bg-purple-500 active:bg-purple-400',
        category:
          'rounded-[4px] bg-white text-grayscale-500 shadow-main detail1-semibold hover:border-[1px] hover:border-blue-500 hover:text-blue-500 hover:shadow-blue active:border-[1px] active:border-blue-500 active:bg-blue-500/40 active:text-blue-500',
      },
      size: {
        sm: 'p-8',
        md: 'px-16 py-8',
        lg: 'w-[312px] px-16 py-12',
        icon: 'h-[88px] w-[104px] flex-col items-center justify-center gap-[4px] p-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
