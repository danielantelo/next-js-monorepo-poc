import type { Meta, StoryObj } from '@storybook/react';
import { CollapsibleSection } from './CollapsibleSection';

export default {
  title: 'Components/CollapsibleSection',
  component: CollapsibleSection,
} as Meta<typeof CollapsibleSection>;

export const Default: StoryObj<typeof CollapsibleSection> = {
  render: () => (
    <CollapsibleSection title="Section 2">
      <div style={{ background: 'white', padding: '10px' }}>content</div>
    </CollapsibleSection>
  ),
};

export const Collapsed: StoryObj<typeof CollapsibleSection> = {
  render: () => (
    <CollapsibleSection title="Section 2" collapsed={true}>
      <div style={{ background: 'white', padding: '10px' }}>content</div>
    </CollapsibleSection>
  ),
};
