import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  return (
    <>
      <Header />

      <main className={s.container}>
        <ToastContainer />

        <Outlet />
      </main>
    </>
  );
}

export default Layout;
