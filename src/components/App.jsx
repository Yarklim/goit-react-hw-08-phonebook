import { Route, Routes } from 'react-router-dom';
import Phonebook from 'pages/Phonebook';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Phonebook />} />
    </Routes>
  );
};
