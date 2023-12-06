import classNames from 'classnames';
import { Order } from '@poc/domain-orders';
import { formatDate } from '@poc/util-dates';
import { formatAmount } from '@poc/util-currency';
import styles from './OrdersTable.module.css';
import { QualityBadge } from './QualityBadge';
import { StatusBadge } from './StatusBadge';

export interface OrdersTableProps {
  orders: Order[];
  actions?: (id: number) => JSX.Element;
}

export function OrdersTable({ orders, actions }: OrdersTableProps) {
  if (orders.length === 0) {
    return (
      <div className={styles.noOrders}>
        <p>No orders</p>
      </div>
    );
  }

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th></th>
          <th>Quality</th>
          <th>Dispatch date</th>
          <th>Quantity</th>
          <th className={styles.price}>Price / Kg</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order: Order, idx: number) => (
          <tr key={`product-${order.id}-${idx}`}>
            <td className={styles.cell}>
              <div>
                {order.status && <StatusBadge status={order.status} />} {order.product}
              </div>
              <div className={styles.info}>
                {order.grade && <span className={styles.infoPoint}>{order.grade}</span>}
                {order.variation && <span className={styles.infoPoint}>{order.variation}</span>}
                {order.fishingMethod && <span className={styles.infoPoint}>{order.fishingMethod}</span>}
                {order.country && (
                  <span className={classNames(styles.infoPoint, styles[`country-${order.country}`])}>
                    {order.country}
                  </span>
                )}
              </div>
            </td>
            <td className={styles.cell}>
              <QualityBadge quality={order.quality} />
            </td>
            <td className={styles.cell}>{formatDate(order.dispatch)}</td>
            <td className={styles.cell}>{order.quantity}</td>
            <td className={classNames(styles.cell, styles.price)}>{formatAmount(order.price, order.currency)}</td>
            <td className={classNames(styles.cell, styles.actions)}>{actions?.(order.id)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
