import React from 'react';
import Cards from '../../components/Cards/Cards';
import Upper from '../../components/Upper/Upper';

const tableUpper = {
  title: 'Дизайнерские столы из керамогранита',
  image: 'img/upper/table.jpg',
  description: 'Дизайнерские столы из керамогранита и массива дерева',
  text: 'Драгоценные материалы «Сделано в Италии» и эстетическая изысканность объединяются в дизайнерских решениях для обустройства жилых помещений. Столы из керамогранита с культовыми и изысканными поверхностями создадут уникальные и неповторимые сценарии. Откройте для себя коллекции столов для гостиной, кухни и столовой и выберите из возможных комбинаций столешниц и древесных материалов для уникальных продуктов.',
};

const Table: React.FC = () => {
  return (
    <section className="table">
      <Upper
        title={tableUpper.title}
        description={tableUpper.description}
        imageUrl={tableUpper.image}
        text={tableUpper.text}
      />
      <Cards type="table" />
    </section>
  );
};

export default Table;
