import React from 'react';
import styles from './controls.css';

export function Controls() {
  return (
    <div className={styles.controls}>
        <div className={styles.karmaCounter}>
          <button className={styles.up}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
            </svg>
          </button>
          <span className={styles.karmaValue}>234</span>
          <button className={styles.down}>
              <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
              </svg>
          </button>
        </div>
        <button className={styles.commentsButton}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z" fill="#C4C4C4"/>
          </svg>
          <span className={styles.commentsNumber}>13</span>
        </button>
      </div>
  );
}
