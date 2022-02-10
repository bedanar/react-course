import React from 'react';
import styles from './textcontent.css';
import { UserLink } from './UserLink';
import { Username } from './Username';

export function TextContent() {
  return (
    <div className={styles.textContent}>
        <div className={styles.metaData}>
          <UserLink />
          <span className={styles.createdAt}>4 hours ago</span>
          <Username />
      </div>
    </div>
  );
}
