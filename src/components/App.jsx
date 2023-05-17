import { Route, Routes } from 'react-router-dom';
import Phonebook from 'pages/Phonebook/Phonebook';
import Authorization from 'pages/Auth/Authorization';
import UserRegister from 'pages/Auth/UserRegister';
import UserLogin from 'pages/Auth/UserLogin';

export const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Phonebook />} />
      </Routes> */}
		  <Routes>
			  <Route path='/' element={<Authorization />}>
				  <Route index element={<UserRegister />} />
				  <Route path='login' element={<UserLogin/>}/>
			  </Route>
		  </Routes>
    </>
  );
};
