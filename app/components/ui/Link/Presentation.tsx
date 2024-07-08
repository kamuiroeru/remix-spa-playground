import { Link, type LinkProps } from '@remix-run/react';
import { clsx } from 'clsx/lite';
import { forwardRef, ReactNode, Ref } from 'react';

type Props = LinkProps;
const _Presentation = (
  { children, className, ...props }: Props,
  ref: Ref<HTMLAnchorElement>,
) => (
  <Link
    ref={ref}
    className={clsx(
      'text-blue-600 underline visited:text-purple-800 dark:text-blue-400 dark:visited:text-purple-400',
      className,
    )}
    {...props}
  >
    {children as ReactNode}
  </Link>
);

export const Presentation = forwardRef(_Presentation);
