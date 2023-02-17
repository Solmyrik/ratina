import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slices/cardsSlice';
import favoriteSlice from './slices/favoriteSlice';
import { searchSlice } from './slices/searchSlice';
import { cartSlice } from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    favorite: favoriteSlice,
    card: cardsSlice,
    cart: cartSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
