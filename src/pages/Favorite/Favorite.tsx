import React from 'react';
import styles from './Favorite.module.scss';
import type { RootState, AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../../components/Item/Item';

const Favorite: React.FC = () => {
  const items = useSelector((state: RootState) => state.favorite.items);
  const indexes = useSelector((state: RootState) => state.favorite.indexes);
  return (
    <section>
      <h1 className={styles.title}>Мои избранные</h1>
      <div>
        {items.length > 0 ? (
          <div className={styles.items}>
            {items.map((item: any) => (
              <Item
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                isFavorite={true}
              />
            ))}
          </div>
        ) : (
          <p>Нет элементов</p>
        )}
      </div>
    </section>
  );
};

export default Favorite;
