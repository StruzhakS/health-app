import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';

function Layout() {
  return (
    <>
      <Header />

      <main className={s.container}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
