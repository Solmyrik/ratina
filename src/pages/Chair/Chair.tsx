import React from 'react';

import Cards from '../../components/Cards/Cards';
import Upper from '../../components/Upper/Upper';

const chairUpper = {
  title: 'Дизайнерские стулья из массива дерева',
  image: 'img/upper/chair.jpg',
  description: 'Современные стулья из массива дерева',
  text: 'Basilica — идеальное дизайнерское кресло для домашнего контекста, которое благодаря своему поперечному стилю адаптируется к любому стилю. Это идеальный синтез между рациональной эстетикой и утонченной конструкцией, типичной для итальянских ремесленных традиций. Изготовленный из массива дерева, он доступен в двух моделях и трех древесных эссенциях. Идеальное завершение предлагаемых столов со столешницами из керамогранита от Atmosphere.',
};

const Chair: React.FC = () => {
  return (
    <section className="table">
      <Upper
        title={chairUpper.title}
        description={chairUpper.description}
        imageUrl={chairUpper.image}
        text={chairUpper.text}
      />
      <Cards type="chair" />
    </section>
  );
};

export default Chair;
