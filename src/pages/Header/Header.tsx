import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Link to="/" className={styles.logo}>
          <p>RATINA</p>
          <p>shop</p>
        </Link>
        <div className={styles.icons}>
          <Link to="/favorite" className={styles.favorite}>
            <AiOutlineHeart size={35} color="white" />
          </Link>
          <div className={styles.cart}>
            <Link to="/cart">
              <FiShoppingCart size={35} color="white" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
