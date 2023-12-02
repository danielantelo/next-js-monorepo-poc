'use client';

import { PropsWithChildren, useState } from 'react';
import styles from './CollapsibleSection.module.css';

export interface CollapsibleSectionProps {
  title: string;
  isCollapsed?: boolean;
}

export function CollapsibleSection({
  isCollapsed = false,
  title,
  children,
}: PropsWithChildren<CollapsibleSectionProps>) {
  const [collapsed, setCollapsed] = useState<boolean>(isCollapsed);

  const onToggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2>{title}</h2>
        <button className={styles.collapser} onClick={onToggleCollapse}>
          {collapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>
      {!collapsed && <div>{children}</div>}
    </section>
  );
}
