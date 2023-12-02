import styles from './QaulityBadge.module.css';

export interface QualityBadgeProps {
  quality: string;
}

export function QualityBadge({ quality }: QualityBadgeProps) {
  return <span className={styles.quality}>{quality}</span>;
}
