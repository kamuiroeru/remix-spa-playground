import { clsx } from 'clsx/lite';

type ButtonType = 'normal' | 'outline' | 'text';
type ButtonColor =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

const color2TwBgClass: Record<ButtonColor, string> = {
  red: 'bg-red-500 hover:bg-red-600',
  orange: 'bg-orange-500 hover:bg-orange-600',
  yellow: 'bg-yellow-500 hover:bg-yellow-600',
  green: 'bg-green-500 hover:bg-green-600',
  blue: 'bg-blue-500 hover:bg-blue-600',
  indigo: 'bg-indigo-500 hover:bg-indigo-600',
  purple: 'bg-purple-500 hover:bg-purple-600',
  pink: 'bg-pink-500 hover:bg-pink-600',
};

const color2TwBorderClass: Record<ButtonColor, string> = {
  red: 'border-red-500',
  orange: 'border-orange-500',
  yellow: 'border-yellow-500',
  green: 'border-green-500',
  blue: 'border-blue-500',
  indigo: 'border-indigo-500',
  purple: 'border-purple-500',
  pink: 'border-pink-500',
};

const color2TwTextClass: Record<ButtonColor, string> = {
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
  color?: ButtonColor;
  leadingIcon?: JSX.Element;
};

export const Presentation = ({
  text,
  type = 'normal',
  color = 'blue',
  leadingIcon,
  ...buttonProps
}: Props) => (
  <button
    className={clsx(
      'flex flex-row items-center gap-2 rounded-md px-4 py-2 font-bold',
      type === 'normal' && clsx('text-white', color2TwBgClass[color]),
      type === 'outline' &&
        clsx(
          color2TwBorderClass[color],
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
