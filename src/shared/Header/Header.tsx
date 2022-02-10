import React, { useContext } from 'react';
import { ProfilePhoto } from '../ProfilePhoto';
import { UserBlock } from '../UserBlock';
import styles from './header.css';
import { Notifications } from './Notifications';
import { SearchBlock } from './SearchBlock';
import {tokenContext} from '../Context/context'
interface IHeaderProps {
  token: string
}

export function Header() {

  return (
    <header className={styles.header}>
      <ProfilePhoto />
      {/* <Consumer>
        {(token) => <SearchBlock token={token}/>}
      </Consumer> */}
      <SearchBlock />
      <Notifications />
      <UserBlock />
    </header>
  );  
}