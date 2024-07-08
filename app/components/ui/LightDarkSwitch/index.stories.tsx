import { useState } from 'react';
import { Presentation } from './Presentation';
import type { Meta, StoryObj } from '@storybook/react';

const PresentationMock = () => {
  const [checked, setChecked] = useState(false);
  const onChange = (checked: boolean) => {
    console.log('checked:', checked);
    setChecked(checked);
  };
  return <Presentation checked={checked} onChange={onChange} />;
};

type Story = StoryObj<typeof PresentationMock>;

export const Default: Story = {
  args: {},
};

export default {
  title: 'ui/LightDarkSwitch',
  component: () => <PresentationMock />,
} satisfies Meta<typeof PresentationMock>;
