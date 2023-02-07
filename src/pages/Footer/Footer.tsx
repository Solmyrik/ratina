import React from 'react';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      Copyright © 2023 <a href="https://github.com/Solmyrik">Solmyrik</a>.
    </footer>
  );
};

export default Footer;
