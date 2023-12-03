'use client';

import { PropsWithChildren, useState } from 'react';
import styles from './CollapsibleSection.module.css';

export interface CollapsibleSectionProps {
  title: string;
  collapsed?: boolean;
}

export function CollapsibleSection({
  collapsed = false,
  title,
  children,
}: PropsWithChildren<CollapsibleSectionProps>) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed);

  const onToggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2>{title}</h2>
        <button className={styles.collapser} onClick={onToggleCollapse}>
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>
      {!collapsed && <div>{children}</div>}
    </section>
  );
}
