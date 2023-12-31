import Diary from 'components/Diary/Diary';
import Layout from 'components/Layout/Layout';
import RecomendedFood from 'components/RecomendedFood/RecomendedFood';
import MainAuth from 'pages/Auth/MainAuth/MainAuth';
import DashboardLastMonth from '../DashboardLastMonth/DashboardLastMonth';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import SignupForm from 'components/SignupForm/SignupForm';
import MainPage from 'pages/MainPage/MainPage';
import SignIn from '../../pages/Auth/SignIn/SignIn';
import SignUp from '../../pages/Auth/SignUp/SignUp';
import ForgotPass from '../../pages/Auth/ForgotPass/ForgotPass';
import PublicRoute from 'containers/PublicRoute.jsx';
import PrivateRoute from 'containers/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { updateAuthUser } from '../../redux/auth/authSlice';
import SettingsPage from 'pages/Settings/SettingsPage';
import GoogleAuth from 'components/GoogleAuth/GoogleAuth';


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authData = localStorage.getItem('user_data');
    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      dispatch(updateAuthUser(parsedAuthData));
    }
  }, [dispatch]);

  const isAuth = useSelector(state => state.auth?.user?.requirements);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isAuth ? <MainPage /> : <MainAuth />} />
          <Route
            path="/signin"
            element={<PublicRoute component={<SignIn />} />}
          />
          <Route
            path="/googleAuth"
            element={<GoogleAuth/>}
          />
          <Route
            path="/signup"
            element={<PublicRoute component={<SignUp />} />}
          />
          <Route
            path="/signup/:params"
            element={<PublicRoute component={<SignupForm />} />}
          />
          <Route
            path="/forgot-password"
            element={<PublicRoute component={<ForgotPass />} />}
          />
          <Route
            path="recommended-food"
            element={<PrivateRoute component={<RecomendedFood />} />}
          />
          <Route
            path="/diary"
            element={<PrivateRoute component={<Diary />} />}
          />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={<DashboardLastMonth />} />}
          />
          <Route
            path="/settings"
            element={<PrivateRoute component={<SettingsPage />} />}
          />
          <Route path="*" element={isAuth ? <MainPage /> : <MainAuth />} />
        </Route>
      </Routes>
    </>
  );
};
