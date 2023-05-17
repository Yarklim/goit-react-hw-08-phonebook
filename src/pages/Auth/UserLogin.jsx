import { useDispatch } from 'react-redux';
import AuthForm from 'components/AuthForm/AuthForm';

const UserLogin = () => {
  const dispatch = useDispatch();

  const handleLoginUser = data => {
    // dispatch(loginUser(data));
  };

  return (
    <>
      <h1>Login</h1>
      <AuthForm submitTitle="Login" onSubmit={handleLoginUser} />
    </>
  );
};

export default UserLogin;
