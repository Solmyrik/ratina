import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import type { RootState } from '../../redux/store';

import styles from './Search.module.scss';
import { onUpdate } from '../../redux/slices/searchSlice';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.search.value);

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    dispatch(onUpdate(newValue));
  };

  return (
    <div className={styles.input}>
      <FiSearch className={styles.icon} />
      <input onChange={onChangeSearch} value={searchValue} type="text" />
    </div>
  );
};

export default Search;
