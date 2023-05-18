import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthForm from 'components/AuthForm/AuthForm';
import { registerOperation } from 'redux/Auth/authOperations';

const optionsRegisterForm = [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
    palceholder: 'Enter your name...',
  },
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    palceholder: 'Enter email...',
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    palceholder: 'Enter password...',
  },
];

const initialStateRegisterForm = {
  name: '',
  email: '',
  password: '',
};

const UserRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterUser = newUser => {
    dispatch(registerOperation(newUser)).then(response => {
      if (response.error) {
        toast.error('Please enter valid data!');
        navigate('/');
      } else {
        navigate('/contacts');
      }
    });
  };
  return (
    <>
      <h1>Registration</h1>
      <AuthForm
        onSubmit={handleRegisterUser}
        submitTitle="Registration"
        options={optionsRegisterForm}
        initialState={initialStateRegisterForm}
      />
      <ToastContainer autoClose={3500} theme="colored" />
    </>
  );
};

export default UserRegister;
