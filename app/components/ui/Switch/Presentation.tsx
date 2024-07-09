import { ChangeEvent, useId } from 'react';
import { clsx } from 'clsx/lite';
import { BasicColor } from '@/schema/color';

const color2TwBgClass: Record<BasicColor, string> = {
  red: 'bg-red-500 hover:bg-red-600 dark:hover:bg-red-400',
  orange: 'bg-orange-500 hover:bg-orange-600 dark:hover:bg-orange-400',
  yellow: 'bg-yellow-500 hover:bg-yellow-600 dark:hover:bg-yellow-400',
  green: 'bg-green-500 hover:bg-green-600 dark:hover:bg-green-400',
  blue: 'bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-400',
  indigo: 'bg-indigo-500 hover:bg-indigo-600 dark:hover:bg-indigo-400',
  purple: 'bg-purple-500 hover:bg-purple-600 dark:hover:bg-purple-400',
  pink: 'bg-pink-500 hover:bg-pink-600 dark:hover:bg-pink-400',
};

// Inspired by https://codepen.io/Umer_Farooq/pen/eYJgKGN
type Props = {
  checked: boolean;
  onColor?: BasicColor;
  onChange?: (checked: boolean) => void;
  id?: string;
};

export const Presentation = ({
  checked,
  onColor = 'blue',
  onChange = (_) => {},
  id = useId(),
}: Props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  return (
    <div>
      <input
        checked={checked}
        id={id}
        className="absolute opacity-0"
        type="checkbox"
        defaultChecked={checked}
        onChange={onChangeHandler}
      />
      <label
        htmlFor={id}
        className={clsx(
          'relative flex h-[26px] w-[50px] cursor-pointer items-center justify-between rounded-full p-1 transition-colors',
          checked
            ? color2TwBgClass[onColor]
            : 'bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-400',
        )}
      >
        <span
          className={clsx(
            'absolute left-[2px] top-[2px] h-[22px] w-[22px] rounded-full bg-white transition-transform dark:bg-gray-50',
            checked ? 'translate-x-6' : '',
          )}
        />
      </label>
    </div>
  );
};
