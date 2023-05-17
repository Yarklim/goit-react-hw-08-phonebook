import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';
import { useDispatch } from 'react-redux';

const UserRegister = () => {
  const dispatch = useDispatch();

  const handleRegisterUser = data => {
    // dispatch(registerUser(data));
  };

  return (
    <>
      <h1>Registration</h1>
      <AuthForm onSubmit={handleRegisterUser} submitTitle="Registration" />
    </>
  );
};

export default UserRegister;
