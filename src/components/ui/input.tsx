import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'utils/twUtils';

const inputVariant = cva(
  'flex w-full rounded-[2px] border border-grayscale-50 bg-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grayscale-300 focus-visible:shadow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        search: 'shadow-main',
      },
      size: {
        sm: 'h-[32px] p-8',
        lg: 'h-[48px] p-16 ',
      },
    },
    defaultVariants: {
      variant: 'search',
      size: 'lg',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariant> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariant({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
