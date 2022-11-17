import { configureStore } from '@reduxjs/toolkit';
import { groceryReducer } from '../grocery-reducer';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: false,
});

export const store = configureStore({
  reducer: {
    groceries: groceryReducer,
  },
  middleware: [logger],
});
