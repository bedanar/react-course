import React from 'react';
import { ProfilePhoto } from '../ProfilePhoto';
import styles from './header.css';
import { Notifications } from './Notifications';
import { SearchBlock } from './SearchBlock';

export function Header() {
  return (
    <header className={styles.header}>
      <ProfilePhoto />
      <SearchBlock />
      <Notifications />
    </header>
  );  
}