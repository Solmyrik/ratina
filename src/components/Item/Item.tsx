import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { onAddItem } from '../../redux/slices/favoriteSlice';
import type { RootState, AppDispatch } from '../../redux/store';

import styles from './Item.module.scss';

interface IItem {
  name: string;
  price: number;
  image: string;
  id: number;
  isFavorite: boolean;
}

const Item: React.FC<IItem> = ({ name, price, image, id, isFavorite }) => {
  const [favorite, setFavorite] = React.useState(isFavorite);
  const dispatch = useDispatch();
  const favoriteId = useSelector((state: RootState) => state.favorite.indexes);

  React.useEffect(() => {
    if (favoriteId.includes(id)) {
      setFavorite(true);
    }
  }, [favorite, favoriteId]);

  const onAddFavoriteId = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(onAddItem({ name, price, image, id }));
    setFavorite(!favorite);
  };
  return (
    <Link to={`/product/${id}`} className={styles.item}>
      <div className={styles.item__image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.item__text}>
        <h3 className={styles.item__name}>{name}</h3>
        <p className={styles.item__price}>{price} ₽</p>
      </div>
      <AiOutlineHeart
        onClick={(e) => onAddFavoriteId(e)}
        className={styles.item__favorite}
        size={35}
        color={favorite ? 'red' : '#d3a76d'}
      />
    </Link>
  );
};

export default Item;
