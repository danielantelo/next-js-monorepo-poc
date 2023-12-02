import { render, screen, within } from '@testing-library/react';
import { OrdersTable } from './OrdersTable';
import { mockedOrders } from '../__fixtures__/orders';

describe('OrdersTable', () => {
  it('renders expected headers', () => {
    render(<OrdersTable orders={mockedOrders} />);
    const rows = screen.getAllByRole('row');
    const headers = within(rows[0]).getAllByRole('columnheader');
    expect(headers.length).toEqual(6);
    expect(within(headers[1]).getByText(/quality/i)).toBeInTheDocument();
    expect(within(headers[2]).getByText(/dispatch date/i)).toBeInTheDocument();
    expect(within(headers[3]).getByText(/quantity/i)).toBeInTheDocument();
    expect(within(headers[4]).getByText(/price/i)).toBeInTheDocument();
  });

  it('renders expected rows', () => {
    render(<OrdersTable orders={mockedOrders} />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toEqual(3); // 1 header row + 2 order rows

    const cells = within(rows[1]).getAllByRole('cell');
    expect(within(cells[0]).getByText(/salmon/i)).toBeInTheDocument();
    expect(within(cells[1]).getByText(/A+/i)).toBeInTheDocument();
    expect(within(cells[2]).getByText(/Thu, 30 Nov/i)).toBeInTheDocument();
    expect(within(cells[3]).getByText(/10 boxes/i)).toBeInTheDocument();
    expect(within(cells[4]).getByText(/21.99/i)).toBeInTheDocument();
  });
});
