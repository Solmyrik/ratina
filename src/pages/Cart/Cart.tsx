import { FC, useState } from 'react';
import styles from './Cart.module.scss';
import type { RootState, AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { TiDelete } from 'react-icons/ti';
import { allDeleteItems } from '../../redux/slices/cartSlice';

const Cart: FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const [value, setValue] = useState(0);
  const [allPrice, setAllPrice] = useState(0);
  const decrement = () => {};
  const increment = () => {};
  const allDelete = () => {
    dispatch(allDeleteItems());
  };
  return (
    <section>
      <h1 className={styles.title}>Корзина</h1>
      <div className={styles.cart__items}>
        {items.map((e) => {
          return (
            <div className={styles.cart__item}>
              <div className={styles.cart__delete}>
                <TiDelete size={35} />
              </div>
              <div className={styles.cart__image}>
                <img src={e.image} alt="" />
              </div>
              <div className={styles.cart__name}>{e.name}</div>
              <div className={styles.count}>
                <button onClick={decrement} className={styles.button}>
                  -
                </button>
                <div className={styles.value}>{e.quantity}</div>
                <button onClick={increment} className={styles.button}>
                  +
                </button>
              </div>
              <div className={styles.cart__price}>
                Стоимость за единицу: <span>{e.price} ₽</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.cart__bar}>
        <div className={styles.cart__top}>
          <div className={styles.cart__alldelete}>Очистить корзину</div>
          <div className={styles.cart__allprice}>Сумма корзины: {allPrice} ₽</div>
        </div>
        <div className={styles.cart__bottom}>
          <button onClick={allDelete} className={styles.cart__button}>
            Заказать
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
