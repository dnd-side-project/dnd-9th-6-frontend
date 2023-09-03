import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'utils/twUtils';

const buttonVariants = cva(
  'body3-bold inline-flex items-center justify-center rounded-md text-white disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'text-white bg-blue-300 hover:bg-blue-500 active:bg-blue-400',
        outlined: 'bg-white border-[1px] border-blue-400 text-blue-300 hover:bg-blue-50 active:bg-blue-400 active:text-white',
        secondary: 'bg-grayscale-100 text-grayscale-700 hover:bg-grayscale-200 active:bg-grayscale-400 active:text-white',
        red: 'bg-white border-[1px] border-grayscale-100 text-grayscale-300 hover:border-red hover:text-red active:border-red active:bg-[#FDE7E7] active:text-red',
        purple: 'bg-purple-300 text-white hover:bg-purple-500 active:bg-purple-400',
        category: 'detail1-semibold bg-white text-grayscale-500 rounded-[4px] shadow-main hover:text-blue-500 hover:border-[1px] hover:border-blue-500 hover:shadow-blue active:text-blue-500 active:bg-blue-500/40 active:border-[1px] active:border-blue-500'
      },
      size: {
        sm: 'p-8',
        md: 'px-16 py-8',
        lg: 'w-[312px] px-16 py-12',
        icon: 'w-[104px] h-[88px] p-8 flex-col justify-center items-center gap-[4px]',
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
