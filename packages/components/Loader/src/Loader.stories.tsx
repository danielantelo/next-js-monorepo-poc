import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta<typeof Loader>;

export const Default: StoryObj<typeof Loader> = {
  args: {},
};
