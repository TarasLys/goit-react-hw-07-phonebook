import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filter: '',
  contacts: [],
};

const postDetailsSlice = createSlice({
  name: 'tasks',

  initialState: INITIAL_STATE,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setContacts(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    setContactsRemove(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const { setFilter, setContacts, setContactsRemove } =
  postDetailsSlice.actions;

export const postDetailsReducer = postDetailsSlice.reducer;
