import { Presentation } from './Presentation';
import type { Meta, StoryObj } from '@storybook/react';

const PresentationMock = () => (
  <ul className="ml-4 list-disc">
    <li>
      <Presentation to="/" children="Visited Link" />
    </li>
    <li>
      <Presentation to={`/${Math.random()}`} children="UnVisited Link" />
    </li>
  </ul>
);

type Story = StoryObj<typeof PresentationMock>;

export const Default: Story = {};

export default {
  title: 'ui/Link',
  component: PresentationMock,
} satisfies Meta<typeof PresentationMock>;
