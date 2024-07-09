import { Presentation } from './Presentation';
import type { Meta, StoryObj } from '@storybook/react';
import { BASIC_COLORS, type BasicColor } from '@/schema/color';
import { useState } from 'react';

type Props = {
  label: string;
  onColor?: BasicColor;
};
const PresentationMock = ({ onColor, label }: Props) => {
  const [checked, setChecked] = useState(true);
  return (
    <Presentation
      checked={checked}
      label={label}
      onColor={onColor}
      onChange={setChecked}
    />
  );
};

type Story = StoryObj<typeof PresentationMock>;

export const Default: Story = {
  args: {
    label: 'LabelSwitch',
    onColor: 'blue',
  },
  argTypes: {
    onColor: {
      options: BASIC_COLORS,
      control: 'radio',
    },
  },
};

export default {
  title: 'ui/SwitchLabel',
  component: PresentationMock,
} satisfies Meta<typeof PresentationMock>;
