import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/contactSlice';
import { authReducer } from './Auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});
