import React from 'react';
import styles from './userblock.css';
import {Text} from '../Text'
import { ProfileIcon } from '../../icons/ProfileIcon';


interface IUserBlockProps {
  avatarSrc?: string,
  username?: string
}


export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (  
    <a href='https://www.reddit.com/api/v1/authorize?client_id=CrqCT5sj5pPIJQVyF_HDng&response_type=code&state=random_string&redirect_uri=https://localhost:8080/auth&duration=permanent&scope=read submit identity' className={styles.userBlock}>
      <div className={styles.avatarBlock}>
        {avatarSrc ? 
        <img src={avatarSrc} alt="" className={styles.avatarImg} />
        : 
        <ProfileIcon />}
      </div>
      <div className={styles.username}>
        <Text size={20}>{username ? username : 'Anonym'}</Text>
      </div>
    </a>
  );
}
