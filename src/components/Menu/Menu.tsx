import React from 'react';
import MenuItem, { menu } from './MenuItem';
import styles from './Menu.module.scss';

const Menu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {menu.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
