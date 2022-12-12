import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsSlice from '../redux/productSlice';
import userSlice from '../redux/userSlice';

const reducer = combineReducers({
  counter: productsSlice,
  user: userSlice
});

export const store = configureStore({
  reducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
