import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface ICard {
  name: string;
  price: number;
  image: string;
  id: number;
  description: string;
}

export interface CardsState {
  items: ICard[];
}

const initialState: CardsState = {
  items: [],
};

export const fatchCard = createAsyncThunk('card/fatchCard', async (current: any) => {
  const { data } = await axios.get(
    `https://63d685b2e60d5743697a392f.mockapi.io/Items?${
      current.value !== 'default' ? current.order : ''
    }&type=${current.type}`,
  );
  return data;
});

export const fatchCardId = createAsyncThunk('product/fatchCardId', async (id: any) => {
  const { data } = await axios.get(`https://63d685b2e60d5743697a392f.mockapi.io/Items?&id=${id}`);

  return data;
});

export const cardsSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    onAddItem: (state, actions: PayloadAction<number>) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fatchCard.pending, (state, action) => {
      state.items = [];
    });
    builder.addCase(fatchCard.fulfilled, (state, action) => {
      state.items = action.payload;
      console.log(state.items);
    });
    builder.addCase(fatchCard.rejected, (state, action) => {
      state.items = [];
    });
    builder.addCase(fatchCardId.pending, (state, action) => {
      state.items = [];
    });
    builder.addCase(fatchCardId.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(fatchCardId.rejected, (state, action) => {
      state.items = [];
    });
  },
});

export const { onAddItem } = cardsSlice.actions;

export default cardsSlice.reducer;
