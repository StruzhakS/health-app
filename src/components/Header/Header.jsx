import React, { useState } from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import iconsSrc from '../../assets/icons/symbol-defs.svg';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import avatar from '../../assets/icons/emoji/Waight.png';
import Modal from 'react-modal';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'transparent',
  },
};

Modal.setAppElement('#root');

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.token);
  const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    // Дополнительно, выполните переход на страницу входа или другую страницу после логаута
    // history.push('/signin'); // Если используете роутинг и имеете доступ к объекту history
  };

  return (
    <div className={s.header}>
      <NavLink to={'/'} className={s.logoLink}>
        {isAuth ? 'Your Health' : 'HealthyHub'}
      </NavLink>
      {isAuth ? (
        <div>
          <button
            type="button"
            className={s.userBtn}
            onClick={() => setSettingsModalIsOpen(true)}
          >
            UserName <img src={avatar} alt="" className={s.avatarImg} />
            <svg style={{ fill: 'white' }} width="14" height="14">
              <use href={`${iconsSrc}#arrow-down`} />
            </svg>
          </button>
          <ReactModal
            className={s.userSettingsModal}
            isOpen={settingsModalIsOpen}
            onRequestClose={() => setSettingsModalIsOpen(false)}
            style={customStyles}
            contentLabel="User Settings Modal"
          >
            <button onClick={handleLogout}>Log out</button>
          </ReactModal>
        </div>
      ) : (
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
          <svg style={{ fill: 'white' }} width="24" height="24">
            <use href={`${iconsSrc}#profile-circle`} />
          </svg>
        </nav>
      )}
    </div>
  );
};

export default Header;
