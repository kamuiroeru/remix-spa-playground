import { Presentation } from './Presentation';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Presentation>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export default {
  title: 'ui/Label',
  component: (props) => <Presentation {...props} />,
} satisfies Meta<typeof Presentation>;
