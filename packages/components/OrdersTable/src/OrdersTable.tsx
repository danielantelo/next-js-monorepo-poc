import { Order } from '@rooser/domain-orders';
import { formatDate } from '@rooser/util-dates';
import { formatAmount } from '@rooser/util-currency';
import styles from './OrdersTable.module.css';
import { QualityBadge } from './QualityBadge';
import { StatusBadge } from './StatusBadge';
import classNames from 'classnames';

export interface OrdersTableProps {
  orders: Order[];
}

export function OrdersTable({ orders }: OrdersTableProps) {
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
        {orders.map((order) => (
          <tr className={styles.trow} key={`product-${order.id}`}>
            <td className={styles.cell}>
              <div>
                {order.status && <StatusBadge status={order.status} />} {order.product}
              </div>
              <div className={styles.info}>
                {order.grade} {order.variation} {order.fishingMethod} {order.country}
              </div>
            </td>
            <td className={styles.cell}>
              <QualityBadge quality={order.quality} />
            </td>
            <td className={styles.cell}>{formatDate(order.dispatch)}</td>
            <td className={styles.cell}>{order.quantity}</td>
            <td className={classNames(styles.cell, styles.price)}>{formatAmount(order.price, order.currency)}</td>
            <td className={styles.cell}></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
