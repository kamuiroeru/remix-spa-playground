import { Icon } from '@iconify/react';
import { ChangeEvent, useId } from 'react';
import { clsx } from 'clsx/lite';

// Inspired by https://codepen.io/Umer_Farooq/pen/eYJgKGN
type Props = {
  checked: boolean;
  onChange?: (checked: boolean) => void;
};

export const Presentation = ({ checked, onChange = (_) => {} }: Props) => {
  const id = useId();
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  return (
    <div>
      <input
        checked={checked}
        id={id}
        className="group/lightDarkSwitchInput absolute opacity-0"
        type="checkbox"
        defaultChecked={checked}
        onChange={onChangeHandler}
      />
      <label
        htmlFor={id}
        className="relative flex h-[26px] w-[50px] cursor-pointer items-center justify-between rounded-full bg-black p-1"
      >
        <Icon icon="bi:moon-fill" className="text-yellow-500" />
        <Icon icon="bi:sun-fill" className="text-orange-500" />
        <span
          className={clsx(
            'absolute left-[2px] top-[2px] h-[22px] w-[22px] rounded-full bg-white transition-transform',
            checked ? 'translate-x-6' : '',
          )}
        />
      </label>
    </div>
  );
};
