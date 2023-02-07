import React, { useEffect } from 'react';
import Select from 'react-select';
import Item from '../Item/Item';
import Search from '../Search/Search';
import type { RootState, AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Cards.module.scss';
import { fatchCard } from '../../redux/slices/cardsSlice';

interface ICards {
  type: string;
}

const options = [
  { value: 'default', label: 'По умолчанию' },
  { value: 'price', label: 'Дороже' },
  { value: 'price-', label: 'Дешевле' },
];

const Cards: React.FC<ICards> = ({ type }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentSelect, setCurrentSelect] = React.useState({
    value: 'default',
    label: 'По умолчанию',
  });
  const searchValue = useSelector((state: RootState) => state.search.value);
  const items = useSelector((state: RootState) => state.card.items);

  useEffect(() => {
    let order = '';
    if (currentSelect.value.includes('price')) {
      order = currentSelect.value.includes('price-')
        ? '&sortBy=price&order=asc'
        : '&sortBy=price&order=desc';
    }
    let current = { value: currentSelect.value, order: order, type };
    console.log(current);
    dispatch(fatchCard(current));
  }, [currentSelect]);

  const getSelect = () => {
    return currentSelect ? options.find((c) => c.value === currentSelect.value) : '';
  };

  const onChangeSelect = (newValue: any) => {
    setCurrentSelect(newValue);
  };

  useEffect(() => {
    if (currentSelect.value === 'default') {
      // items.sort((a, b) => a.price - b.price);
      console.log(items);
    }
  }, [currentSelect]);

  return (
    <div className={styles.cards}>
      <div className={styles.cards__top}>
        <Search />
        <Select
          classNamePrefix="custom-select"
          isSearchable={false}
          onChange={onChangeSelect}
          value={getSelect()}
          options={options}
        />
      </div>
      {items.length > 0 ? (
        <div className={styles.cards__items}>
          {items
            .filter((e: any) => e.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item: any) => (
              <Item
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                isFavorite={false}
              />
            ))}
        </div>
      ) : (
        <p>Нет элементов</p>
      )}
    </div>
  );
};

export default Cards;
