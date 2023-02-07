import React from 'react';

import styles from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main__left}>
        <h1 className={styles.main__title}>
          Магазин <span>Ratina</span>, дом итальянской керамики
        </h1>
        <div className={styles.main__content}>
          <p>
            Ratina Shop — это электронная коммерция Ratina Group Srl SB, проект, основанный на
            основополагающих ценностях итальянской керамики: ноу-хау, итальянский вкус, технологии.
          </p>
          <p>
            Мы создаем плитку из керамогранита для внутренних и наружных пространств, для
            архитектурных и частных проектов, предлагая широкий ассортимент продукции, стилей и
            дизайнов.
          </p>
        </div>
      </div>
      <div className={styles.main__right}>
        <div className={styles.main__image}>
          <img src="img/main/bg.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Main;
