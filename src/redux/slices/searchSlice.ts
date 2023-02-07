import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    onUpdate: (state, actions: PayloadAction<string>) => {
      state.value = actions.payload;
    },
  },
});

export const { onUpdate } = searchSlice.actions;

export default searchSlice.reducer;
