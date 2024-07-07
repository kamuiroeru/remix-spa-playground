import { Presentation } from './Presentation';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Presentation>;

export const Default: Story = {
  args: {
    onChange: (checked) => {
      console.log('checked:', checked);
    },
  },
};

export default {
  title: 'ui/LightDarkSwitch',
  component: (props) => <Presentation {...props} />,
} satisfies Meta<typeof Presentation>;
