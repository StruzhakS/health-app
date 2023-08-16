import Diary from 'components/Diary/Diary';
import Layout from 'components/Layout/Layout';
import RecomendedFood from 'components/RecomendedFood/RecomendedFood';
import Auth from 'pages/Auth';
import HomePage from 'pages/HomePage';
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/recomendedFood" element={<RecomendedFood />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
