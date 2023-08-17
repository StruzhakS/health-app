import React, { useCallback, useState } from 'react';
import s from './Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import iconsSrc from '../../assets/icons/symbol-defs.svg';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import { logout } from '../../redux/auth/authSlice';

export const customStyles = {
  overlay: {
    background: 'transparent',
  },
};

Modal.setAppElement('#root');

const Header = () => {
  const isAuth = useSelector(state => state?.auth?.token);
  const avatar = useSelector(state => state?.auth?.user?.avatarURL);
  const userName = useSelector(state => state?.auth?.user?.name);

  const [setingsModalIsOpen, setSetingsModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = useCallback(async () => {
    await dispatch(logout());
    localStorage.removeItem('user_data');
    localStorage.removeItem('user_token');
    navigate('/');
  }, []);

  return isAuth ? (
    <div className={s.header}>
      <NavLink to={'/'} className={s.logoLink}>
        Your Health
      </NavLink>
      <div className={s.controlWrapper}>
        <ControlPanel />
        <button
          type='button'
          className={s.userBtn}
          onClick={() => setSetingsModalIsOpen(true)}
        >
          {userName} <img src={avatar} alt='' className={s.avatarImg} />
          <svg style={{ fill: 'white' }} width='14' height='14'>
            <use href={`${iconsSrc}#arrow-down`} />
          </svg>
        </button>
      </div>
      <Modal
        className={s.userSettingsModal}
        isOpen={setingsModalIsOpen}
        onRequestClose={() => setSetingsModalIsOpen(false)}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <button className={s.userBtn} onClick={() => navigate('settings')}>
          <svg style={{ fill: 'white' }} width='16' height='16'>
            <use href={`${iconsSrc}#icon-setting`} />
          </svg>
          Settings
        </button>
        <button onClick={logOut} className={s.userBtn}>
          <svg style={{ fill: 'white' }} width='16' height='16'>
            <use href={`${iconsSrc}#icon-logout`} />
          </svg>
          Log out
        </button>
      </Modal>
    </div>
  ) : (
    <div className={s.header}>
      <NavLink to={'/'} className={s.logoLink}>
        HealthyHub
      </NavLink>
      <nav className={s.navlink}>
        <NavLink
          to={'/signin'}
          className={({ isActive }) =>
            isActive ? clsx(s.authLinkUp, s.active) : s.authLinkUp
          }
        >
          Sign in
        </NavLink>
        <span>/</span>
        <NavLink
          to={'/signup'}
          className={({ isActive }) =>
            isActive ? clsx(s.authLinkIn, s.active) : s.authLinkUp
          }
        >
          Sign up
        </NavLink>
        <svg style={{ fill: 'white' }} width='24' height='24'>
          <use href={`${iconsSrc}#profile-circle`} />
        </svg>
      </nav>
    </div>
  );
};

export default Header;
