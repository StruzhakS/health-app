import Diary from 'components/Diary/Diary';

import Layout from 'components/Layout/Layout';
import RecomendedFood from 'components/RecomendedFood/RecomendedFood';
import SignupForm from 'components/SignupForm/SignupForm';
import HomePage from 'pages/HomePage/HomePage';
import MainPage from 'pages/MainPage/MainPage';
import SignInPage from 'pages/SignInPage/SignInPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';

import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup/:params" element={<SignupForm />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/recomendedFood" element={<RecomendedFood />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
