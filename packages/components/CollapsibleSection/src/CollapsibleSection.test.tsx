import { fireEvent, render, screen } from '@testing-library/react';
import { CollapsibleSection } from './CollapsibleSection';

describe('CollapsibleSection', () => {
  it('renders status', () => {
    render(<CollapsibleSection title={'My Title'}>my content</CollapsibleSection>);
    expect(screen.getByText(/my title/i)).toBeInTheDocument();
    expect(screen.getByText(/my content/i)).toBeInTheDocument();
    expect(screen.getByText(/collapse/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Collapse'));
    expect(screen.getByText(/expand/i)).toBeInTheDocument();
    expect(screen.queryByText(/my content/i)).not.toBeInTheDocument();
  });
});
