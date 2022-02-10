import React from 'react';
import { MenuIcon } from '../../../../icons/MenuIcon';
import { Dropdown } from '../../../Dropdown';
import styles from './menu.css';

export function Menu() {
  return (
    <Dropdown button = {
      <button>
        <MenuIcon />
      </button>
    } isOpen={false}>
      Menu
      Close button
    </Dropdown>
  );
}
