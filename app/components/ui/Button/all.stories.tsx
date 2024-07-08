import { Icon } from '@iconify/react';
import { buttonTypes, Presentation } from './Presentation';
import type { Meta, StoryObj } from '@storybook/react';
import { BASIC_COLORS } from '@/schema/color';

type Props = {
  text: string;
};
const PresentationMock = ({ text }: Props) => (
  <div className="grid grid-cols-8 gap-4">
    {buttonTypes.map((type) =>
      BASIC_COLORS.map((color) => (
        <Presentation
          key={`Button-${type}-${color}`}
          text={text}
          type={type}
          color={color}
          leadingIcon={<Icon icon="material-symbols:star" />}
        />
      )),
    )}
  </div>
);

type Story = StoryObj<typeof PresentationMock>;

export const Default: Story = {
  args: {
    text: 'Click me',
  },
};

export default {
  title: 'ui/Button/All',
  component: (props) => (
    <div className="min-w-[1024px]">
      <PresentationMock {...props} />
    </div>
  ),
} satisfies Meta<typeof PresentationMock>;
