import type { Meta, StoryObj } from '@storybook/react';
import { CollapsibleSection } from './CollapsibleSection';

export default {
  title: 'Components/CollapsibleSection',
  component: CollapsibleSection,
} as Meta<typeof CollapsibleSection>;

export const Default: StoryObj<typeof CollapsibleSection> = {
  render: () => (
    <CollapsibleSection title="Section 2">
      <div>content</div>
    </CollapsibleSection>
  ),
};
