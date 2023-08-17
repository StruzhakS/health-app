import Diary from 'components/Diary/Diary';
import Layout from 'components/Layout/Layout';
import RecomendedFood from 'components/RecomendedFood/RecomendedFood';
import MainAuth from 'pages/Auth/MainAuth/MainAuth';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../../pages/Auth/SignIn/SignIn';
import SignUp from '../../pages/Auth/SignUp/SignUp';
import ForgotPass from '../../pages/Auth/ForgotPass/ForgotPass';
import PublicRoute from 'containers/PublicRoute.jsx';
import PrivateRoute from 'containers/PrivateRoute';
import MainPage from 'pages/MainPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainAuth />} />
          <Route
            path="/signin"
            element={
              <PublicRoute component={<SignIn />} redirect="/recomendedFood" />
            }
          />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPass />} />

          <Route
            path="/recomendedFood"
            element={<PrivateRoute component={<RecomendedFood />} />}
          />

          <Route path="/diary" element={<Diary />} />
          <Route path="*" element={<MainAuth />} />
        </Route>
      </Routes>
    </>
  );
};
