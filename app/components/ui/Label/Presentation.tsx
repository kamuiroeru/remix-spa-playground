import { clsx } from 'clsx/lite';
import { forwardRef, ReactNode, Ref, LabelHTMLAttributes } from 'react';

type Props = LabelHTMLAttributes<HTMLLabelElement>;
const _Presentation = (
  { children, className, ...props }: Props,
  ref: Ref<HTMLLabelElement>,
) => (
  <label
    ref={ref}
    className={clsx('text-gray-800 dark:text-gray-200', className)}
    {...props}
  >
    {children as ReactNode}
  </label>
);

export const Presentation = forwardRef(_Presentation);
