import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.scss';

export const menu: IMenuLink[] = [
  {
    name: 'Столы',
    link: '/table',
  },
  {
    name: 'Стулья',
    link: '/chair',
  },
  {
    name: 'Плитка',
    link: '/tile',
  },
];

interface IMenuLink {
  name: string;
  link: string;
}

interface IMenuItem {
  item: IMenuLink;
}

const MenuItem: React.FC<IMenuItem> = ({ item }) => {
  return (
    <li>
      <Link className={styles.menu__item} to={item.link}>
        {item.name}
      </Link>
    </li>
  );
};

export default MenuItem;
