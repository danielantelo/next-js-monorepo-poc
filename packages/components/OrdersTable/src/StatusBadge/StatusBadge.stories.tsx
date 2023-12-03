import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

export default {
  title: 'Components/StatusBadge',
  component: StatusBadge,
} as Meta<typeof StatusBadge>;

export const Accepted: StoryObj<typeof StatusBadge> = {
  args: {
    status: 'ACCEPTED',
  },
};

export const Live: StoryObj<typeof StatusBadge> = {
  args: {
    status: 'LIVE',
  },
};

export const Missed: StoryObj<typeof StatusBadge> = {
  args: {
    status: 'MISSED',
  },
};
