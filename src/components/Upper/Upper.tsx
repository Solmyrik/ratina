import React from 'react';

import styles from './Upper.module.scss';

interface IUpper {
  title: string;
  imageUrl: string;
  description: string;
  text: string;
}

const Upper: React.FC<IUpper> = ({ title, imageUrl, description, text }) => {
  return (
    <div className={styles.upper}>
      <h1 className={styles.upper__title}>{title}</h1>
      <div className={styles.upper__img}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.upper__content}>
        <p className={styles.upper__description}>{description}</p>
        <p className={styles.upper__text}>{text}</p>
      </div>
    </div>
  );
};

export default Upper;
