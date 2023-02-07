import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type IItemsFavorite = {
  name: string;
  price: number;
  image: string;
  id: number;
};

export interface FavoriteState {
  indexes: number[];
  items: IItemsFavorite[];
}

const initialState: FavoriteState = {
  indexes: [],
  items: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    onAddItem: (state, actions: PayloadAction<IItemsFavorite>) => {
      if (!state.indexes.includes(actions.payload.id)) {
        state.indexes = [...state.indexes, actions.payload.id];
        state.items = [...state.items, actions.payload];
      } else {
        let index = state.indexes.indexOf(actions.payload.id);
        state.items = state.items.filter((e) => e.id !== actions.payload.id);
        state.indexes.splice(index, 1);
      }
    },
  },
});

export const { onAddItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;
