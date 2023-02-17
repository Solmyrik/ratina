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
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    onAddItem: (state, actions: PayloadAction<ICart>) => {
      console.log(actions.payload);
    },
  },
});

export const { onAddItem } = cartSlice.actions;

export default cartSlice.reducer;
