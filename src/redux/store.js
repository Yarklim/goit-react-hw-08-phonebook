import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { contactsReducer } from './Contacts/contactSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});
