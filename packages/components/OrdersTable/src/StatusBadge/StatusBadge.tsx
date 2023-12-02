import classNames from 'classnames';
import styles from './StatusBadge.module.css';

export interface StatusBadgeProps {
  status: 'ACCEPTED' | 'LIVE' | 'MISSED';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return <span className={classNames(styles.status, styles[status.toLowerCase()])}>{status}</span>;
}
