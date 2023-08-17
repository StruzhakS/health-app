import React, { useState } from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import iconsSrc from '../../assets/icons/symbol-defs.svg';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
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

// const bg = {
//   overlay: {
//     background: 'transparent',
//   },
// };

Modal.setAppElement('#root');

const Header = () => {
  const isAuth = useSelector(state => state.auth.token);
  const [setingsModalIsOpen, setSetingsModalIsOpen] = useState(false);

  // ReactModal

  return isAuth ? (
    <div className={s.header}>
      <NavLink to={'/'} className={s.logoLink}>
        Your Health
      </NavLink>
      <div></div>
      <div></div>
      <button
        type="button"
        className={s.userBtn}
        onClick={() => setSetingsModalIsOpen(true)}
      >
        UserName <img src={avatar} alt="" className={s.avatarImg} />
        <svg style={{ fill: 'white' }} width="14" height="14">
          <use href={`${iconsSrc}#arrow-down`} />
        </svg>
      </button>

      <ReactModal
        className={s.userSettingsModal}
        isOpen={setingsModalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setSetingsModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button>Settings</button>
        <button>Log out</button>
      </ReactModal>
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
        <svg style={{ fill: 'white' }} width="24" height="24">
          <use href={`${iconsSrc}#profile-circle`} />
        </svg>
      </nav>
    </div>
  );
};

export default Header;
