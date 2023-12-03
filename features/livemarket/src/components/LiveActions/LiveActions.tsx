'use client';

import styles from './LiveActions.module.css';

interface LiveActionsProps {
  id: number;
  onClickAccept?: (id: number) => void;
  onClickIgnore?: (id: number) => void;
}

export function LiveActions({ id, onClickAccept, onClickIgnore }: LiveActionsProps) {
  return (
    <>
      <button className={styles.accept} onClick={() => onClickAccept?.(id)}>
        Accept
      </button>
      <button className={styles.ignore} onClick={() => onClickIgnore?.(id)}>
        Ignore
      </button>
    </>
  );
}
