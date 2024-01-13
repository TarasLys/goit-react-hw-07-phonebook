import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(
      'https://65a13bd4600f49256fb139d4.mockapi.io/contacts'
    );
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post(
      'https://65a13bd4600f49256fb139d4.mockapi.io/contacts',
      contact
    );
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(
      `https://65a13bd4600f49256fb139d4.mockapi.io/contacts/${id}`
    );
    return id;
  }
);
