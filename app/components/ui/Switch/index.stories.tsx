import { useState } from 'react';
import { BASIC_COLORS, BasicColor } from '@/schema/color';
import { Presentation } from './Presentation';
import type { Meta, StoryObj } from '@storybook/react';

type Props = {
  onColor: BasicColor;
};
const PresentationMock = ({ onColor }: Props) => {
  const [checked, setChecked] = useState(true);

  return (
    <Presentation checked={checked} onColor={onColor} onChange={setChecked} />
  );
};

type Story = StoryObj<typeof PresentationMock>;

export const Default: Story = {
  args: {
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
  title: 'ui/Switch',
  component: PresentationMock,
} satisfies Meta<typeof PresentationMock>;
