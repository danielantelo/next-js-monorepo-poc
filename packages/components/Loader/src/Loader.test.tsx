import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

test('renders loading text', () => {
  render(<Loader />);
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});
