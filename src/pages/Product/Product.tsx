import React, { useEffect, useState } from 'react';
import type { RootState, AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fatchCardId } from '../../redux/slices/cardsSlice';

import styles from './Product.module.scss';
import { onAddItem } from '../../redux/slices/cartSlice';

const Product: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const items = useSelector((state: RootState) => state.card.items);
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(fatchCardId(id));
  }, []);

  const decrement = () => {
    if (value > 0) {
      setValue((value) => value - 1);
      onChangeProduct(value - 1);
    }
  };

  const increment = () => {
    setValue((value) => value + 1);
    onChangeProduct(value + 1);
  };

  const onChangeProduct = (value: number) => {
    const obj = {
      name: items[0].name,
      price: items[0].price,
      image: items[0].image,
      id: items[0].id,
      quantity: value,
    };
    dispatch(onAddItem(obj));
  };

  return (
    <div>
      {items.map((e, i) => {
        if (i === 0) {
          return (
            <div className={styles.product}>
              <div className={styles.right}>
                <img src={`${window.location.origin}/${e.image}`} alt={e.name} />
              </div>
              <div className={styles.left}>
                <h2 className={styles.title}>{e.name}</h2>
                <div className={styles.name}>Количество в корзине:</div>
                <div className={styles.count}>
                  <button onClick={decrement} className={styles.button}>
                    -
                  </button>
                  <div className={styles.value}>{value}</div>
                  <button onClick={increment} className={styles.button}>
                    +
                  </button>
                </div>
                <div className={styles.price}>
                  Стоимость: <span>{e.price} ₽</span>
                </div>
                <div className={styles.description}>
                  <div>Описание:</div>
                  <p>{e.description}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Product;
