import { render, screen } from '@testing-library/react';
import { QualityBadge } from './QualityBadge';

describe('QualityBadge', () => {
  it('renders expected headers', () => {
    render(<QualityBadge quality={'A'} />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });
});
