import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './contactsSlice';
import { filterReducer } from './filterSlise';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});
