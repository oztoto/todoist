import { configureStore } from '@reduxjs/toolkit';
import { counterReducers } from '../modules/counter';

export const store = configureStore({
  reducer: {
    counter: counterReducers,
  },
});
