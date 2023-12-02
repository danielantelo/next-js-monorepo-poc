import { render, screen } from '@testing-library/react';
import { StatusBadge } from './StatusBadge';

describe('StatusBadge', () => {
  it('renders status', () => {
    render(<StatusBadge status={'LIVE'} />);
    expect(screen.getByText(/live/i)).toBeInTheDocument();
  });
});
