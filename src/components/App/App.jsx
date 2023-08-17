import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Diary from '../Diary/Diary';
import Layout from '../Layout/Layout';
import RecomendedFood from '../RecomendedFood/RecomendedFood';
import MainAuth from '../../pages/Auth/MainAuth/MainAuth';
import HomePage from '../../pages/HomePage';
import SignIn from '../../pages/Auth/SignIn/SignIn';
import SignUp from '../../pages/Auth/SignUp/SignUp';
import ForgotPass from '../../pages/Auth/ForgotPass/ForgotPass';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainAuth />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/recomendedFood" element={<RecomendedFood />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
