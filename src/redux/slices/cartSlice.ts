import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ICart = {
  name: string;
  price: number;
  image: string;
  id: number;
  quantity: number;
};

export interface CartState {
  items: ICart[];
  indexes: number[];
}

const initialState: CartState = {
  items: [],
  indexes: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    onAddItem: (state, actions: PayloadAction<ICart>) => {
      if (!state.indexes.includes(actions.payload.id)) {
        state.indexes = [...state.indexes, actions.payload.id];
        state.items = [...state.items, actions.payload];
      } else {
        if (actions.payload.quantity > 0) {
          state.items = state.items.map((e) => {
            if (e.id === actions.payload.id) {
              e.quantity = actions.payload.quantity;
              return e;
            } else {
              return e;
            }
          });
        } else {
          let index = state.indexes.indexOf(actions.payload.id);
          state.items = state.items.filter((e) => e.id !== actions.payload.id);
          state.indexes.splice(index, 1);
        }
      }

      // if(index) {
      //   state.items =  state.items.map()
      // }
      // state.items = [...state.items, actions.payload];
      // console.log(state.items, index);
    },
    allDeleteItems: (state) => {
      state.items = [];
      state.indexes = [];
    },
    deleteItem: (state, actions: PayloadAction<number>) => {
      state.items = state.items.filter((e) => e.id !== actions.payload);
      state.indexes = state.indexes.filter((e) => e !== actions.payload);
    },
  },
});

export const { onAddItem, allDeleteItems, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
