import type { Meta, StoryObj } from '@storybook/react';
import { OrdersTable } from './OrdersTable';
import { mockedOrders } from '../__fixtures__/orders';

export default {
  title: 'Components/OrdersTable',
  component: OrdersTable,
} as Meta<typeof OrdersTable>;


export const Default: StoryObj<typeof OrdersTable> = {
  args: {
    orders: mockedOrders
  },
};

export const Empty: StoryObj<typeof OrdersTable> = {
  args: {
    orders: []
  },
};
