import { Route, Routes } from 'react-router-dom';
import Phonebook from 'pages/Phonebook/Phonebook';
import Authorization from 'pages/Auth/Authorization';
import UserRegister from 'pages/Auth/UserRegister';
import UserLogin from 'pages/Auth/UserLogin';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authorization />}>
          <Route
            index
            element={
              <RestrictedRoute
                component={UserRegister}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={UserLogin} redirectTo="/contacts" />
            }
          />
        </Route>
        <Route
          path="/contacts"
          element={<PrivateRoute component={Phonebook} redirectTo="/" />}
        />
      </Routes>
    </>
  );
};
