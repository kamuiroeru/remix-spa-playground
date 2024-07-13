import { useState } from 'react';
import { BASIC_COLORS } from '@/schema/color';
import { Presentation } from './Presentation';
import type { Meta, StoryObj } from '@storybook/react';

const PresentationMock = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div className="grid grid-cols-4 gap-2">
      {BASIC_COLORS.map((color) => (
        <Presentation
          key={`Switch--${color}`}
          checked={checked}
          onColor={color}
          onChange={setChecked}
        />
      ))}
    </div>
  );
};

type Story = StoryObj<typeof PresentationMock>;

export const Default: Story = {};

export default {
  title: 'ui/Switch/All',
  component: () => (
    <div className="w-[250px]">
      <PresentationMock />
    </div>
  ),
} satisfies Meta<typeof PresentationMock>;
