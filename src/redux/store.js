import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/contactSlice';

export const store = configureStore({
  reducer: contactsReducer,
});
