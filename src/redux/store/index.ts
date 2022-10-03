import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducer/userReducer';
import SportReducer from '../reducer/SportReducer';

export const store = configureStore({
  reducer:{
    userReducer, SportReducer
  }
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;