import Diary from 'components/Diary/Diary';
import Layout from 'components/Layout/Layout';
import RecomendedFood from 'components/RecomendedFood/RecomendedFood';
import MainAuth from 'pages/Auth/MainAuth/MainAuth';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../../pages/Auth/SignIn/SignIn';
import SignUp from '../../pages/Auth/SignUp/SignUp';
import ForgotPass from '../../pages/Auth/ForgotPass/ForgotPass';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainAuth />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/forgot-password" element={<ForgotPass />} />
          <Route path="/recomendedFood" element={<RecomendedFood />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
