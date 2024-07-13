import { Icon } from '@iconify/react';
import { BASIC_COLORS } from '@/schema/color';
import { buttonTypes, Presentation } from './Presentation';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Presentation>;

export const Default: Story = {
  args: {
    text: 'Click me',
    type: 'normal',
    color: 'blue',
  },
  argTypes: {
    text: { control: 'text' },
    type: {
      control: 'radio',
      options: buttonTypes,
    },
    color: {
      control: 'radio',
      options: BASIC_COLORS,
    },
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Click me',
    type: 'normal',
    color: 'blue',
    leadingIcon: <Icon icon="material-symbols:star" />,
  },
  argTypes: {
    text: { control: 'text' },
    type: {
      control: 'radio',
      options: buttonTypes,
    },
    color: {
      control: 'radio',
      options: BASIC_COLORS,
    },
  },
};

export default {
  title: 'ui/Button',
  component: (props) => <Presentation {...props} />,
} satisfies Meta<typeof Presentation>;
