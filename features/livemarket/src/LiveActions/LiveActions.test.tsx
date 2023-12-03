import { fireEvent, render, screen } from '@testing-library/react';
import { LiveActions } from './LiveActions';

describe('LiveActions', () => {
  it('renders status', () => {
    render(<LiveActions id={1} />);
    expect(screen.getByText(/Accept/i)).toBeInTheDocument();
    expect(screen.getByText(/Ignore/i)).toBeInTheDocument();
  });

  it('triggers given action funvtions', () => {
    const acceptFn = jest.fn();
    const ingoreFn = jest.fn();
    render(<LiveActions id={2} onClickAccept={acceptFn} onClickIgnore={ingoreFn} />);

    fireEvent.click(screen.getByText(/Accept/i));
    expect(acceptFn).toHaveBeenCalledTimes(1);
    expect(acceptFn).toHaveBeenCalledWith(2);

    fireEvent.click(screen.getByText(/Ignore/i));
    expect(ingoreFn).toHaveBeenCalledTimes(1);
    expect(ingoreFn).toHaveBeenCalledWith(2);
  });
});
