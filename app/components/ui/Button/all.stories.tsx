import { Icon } from '@iconify/react';
import { buttonColors, buttonTypes, Presentation } from './Presentation';
import type { Meta, StoryObj } from '@storybook/react';

type Props = {
  text: string;
};
const PresentationMock = ({ text }: Props) => (
  <div className="grid grid-cols-8 gap-4">
    {buttonTypes.map((type) =>
      buttonColors.map((color) => (
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
