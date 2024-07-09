import { clsx } from 'clsx/lite';
import type { BasicColor } from '@/schema/color';

export const buttonTypes = ['normal', 'outline', 'text'] as const;
type ButtonType = (typeof buttonTypes)[number];

const color2TwBgClass: Record<BasicColor, string> = {
  red: 'bg-red-500 hover:bg-red-600 dark:bg-red-400 dark:hover:bg-red-300',
  orange:
    'bg-orange-500 hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-300',
  yellow:
    'bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-300',
  green:
    'bg-green-500 hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-300',
  blue: 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300',
  indigo:
    'bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-300',
  purple:
    'bg-purple-500 hover:bg-purple-600 dark:bg-purple-400 dark:hover:bg-purple-300',
  pink: 'bg-pink-500 hover:bg-pink-600 dark:bg-pink-400 dark:hover:bg-pink-300',
};

const color2TwBorderClass: Record<BasicColor, string> = {
  red: 'border-red-500',
  orange: 'border-orange-500',
  yellow: 'border-yellow-500',
  green: 'border-green-500',
  blue: 'border-blue-500',
  indigo: 'border-indigo-500',
  purple: 'border-purple-500',
  pink: 'border-pink-500',
};

const color2TwTextClass: Record<BasicColor, string> = {
  red: 'text-red-500',
  orange: 'text-orange-500',
  yellow: 'text-yellow-500',
  green: 'text-green-500',
  blue: 'text-blue-500',
  indigo: 'text-indigo-500',
  purple: 'text-purple-500',
  pink: 'text-pink-500',
};

type Props = {
  text: string;
  type?: ButtonType;
  color?: BasicColor;
  leadingIcon?: JSX.Element;
};

export const Presentation = ({
  text,
  type = 'normal',
  color = 'blue',
  leadingIcon,
}: Props) => (
  <button
    className={clsx(
      'flex flex-row items-center gap-2 rounded-md px-4 py-2 font-bold',
      type === 'normal' && clsx('text-white', color2TwBgClass[color]),
      type === 'outline' &&
        clsx(
          color2TwBorderClass[color],
          color2TwTextClass[color],
          'border-2',
          'bg-white hover:bg-gray-100',
        ),
      type === 'text' && clsx(color2TwTextClass[color], 'hover:bg-gray-100'),
    )}
  >
    {leadingIcon}
    {text}
  </button>
);
