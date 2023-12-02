import type { Meta, StoryObj } from '@storybook/react';
import { QualityBadge } from './QualityBadge';

export default {
  title: 'Components/QualityBadge',
  component: QualityBadge,
} as Meta<typeof QualityBadge>;

export const Default: StoryObj<typeof QualityBadge> = {
  args: {
    quality: 'A',
  },
};
