import { useId } from 'react';
import { BasicColor } from '@/schema/color';
import { Switch } from '@/components/ui/Switch';
import { Label } from '../Label';

type Props = {
  checked: boolean;
  label: string;
  onColor?: BasicColor;
  onChange?: (checked: boolean) => void;
};

export const Presentation = ({
  checked,
  label,
  onColor = 'blue',
  onChange = (_) => {},
}: Props) => {
  const id = useId();
  return (
    <div className="flex flex-row items-center gap-2">
      <Switch checked={checked} onColor={onColor} onChange={onChange} id={id} />
      <Label htmlFor={id} className="cursor-pointer">
        {label}
      </Label>
    </div>
  );
};
