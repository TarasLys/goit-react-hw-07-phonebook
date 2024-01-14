import { createSelector } from '@reduxjs/toolkit';
export const getTasks = state => state.tasks;

export const selectContacts = state => state.tasks.items;

export const selectFilter = state => state.filter;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter?.toLowerCase().trim())
    );
  }
);
