import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/Auth/authSlectors';
import Phonebook from 'pages/Phonebook/Phonebook';
import Authorization from 'pages/Auth/Authorization';
import UserRegister from 'pages/Auth/UserRegister';
import UserLogin from 'pages/Auth/UserLogin';

export const App = () => {
	const isAuth = useSelector(selectIsAuth);
	console.log(isAuth)
  return (
	  <>

      {isAuth ? (
        <Routes>
          <Route path="/contacts" element={<Phonebook />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Authorization />}>
            <Route index element={<UserRegister />} />
            <Route path="login" element={<UserLogin />} />
          </Route>
        </Routes>
      )}

      {/* <Routes>
			  <Route path='/' element={<Authorization />}>
				  <Route index element={<UserRegister />} />
				  <Route path='login' element={<UserLogin/>}/>
			  </Route>
		  </Routes> */}
    </>
  );
};
