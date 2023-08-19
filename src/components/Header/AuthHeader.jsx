import React, { useCallback, useState } from 'react';
import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { NavLink, useNavigate } from 'react-router-dom';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import iconsSrc from '../../assets/icons/symbol-defs.svg';
import Modal from 'react-modal';
import { customStyles } from './Header';
import { logout } from 'redux/auth/authSlice';
import MobileMenuModal from 'components/Modal/MobileMenuModal/MobileMenuModal';
import { logoutUser } from 'redux/auth/authOperations';

const AuthHeader = () => {
  const avatar = useSelector(state => state?.auth?.user?.avatarURL);
  const userName = useSelector(state => state?.auth?.user?.name);
  const token = useSelector(state => state?.auth?.token);

  const isTabletScreen = useMediaQuery({ minWidth: 834 });
  const isMobileScreen = useMediaQuery({ maxWidth: 834 });

  const [setingsModalIsOpen, setSetingsModalIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOper] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = useCallback(async () => {
    await dispatch(logoutUser(token));
    await dispatch(logout());
    setSetingsModalIsOpen(false);
    localStorage.removeItem('user_data');
    localStorage.removeItem('user_token');
    navigate('/');
  }, [dispatch, navigate, token]);

  return (
    <div className={s.header}>
      <div className={s.logoWrapper}>
        <NavLink to={'/'} className={s.logoLink}>
          Your Health
        </NavLink>

        {isMobileScreen && (
          <button onClick={() => setMobileMenuOper(true)}>
            <svg width="16" height="16">
              <use href={`${iconsSrc}#menu`} />
            </svg>
          </button>
        )}
      </div>
      <div className={s.controlWrapper}>
        {isTabletScreen && <ControlPanel />}
        <button
          type="button"
          className={s.userBtn}
          onClick={() => setSetingsModalIsOpen(true)}
        >
          {userName} <img src={avatar} alt="" className={s.avatarImg} />
          <svg
            style={
              !setingsModalIsOpen
                ? { fill: 'white' }
                : {
                    fill: 'white',
                    rotate: '180deg',
                  }
            }
            width="14"
            height="14"
          >
            <use href={`${iconsSrc}#arrow-down`} />
          </svg>
        </button>
      </div>
      <Modal
        className={s.userSettingsModal}
        isOpen={setingsModalIsOpen}
        onRequestClose={() => setSetingsModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className={s.userBtn} onClick={() => navigate('settings')}>
          <svg style={{ fill: 'white' }} width="16" height="16">
            <use href={`${iconsSrc}#icon-setting`} />
          </svg>
          Settings
        </button>
        <button onClick={logOut} className={s.userBtn}>
          <svg style={{ fill: 'white' }} width="16" height="16">
            <use href={`${iconsSrc}#icon-logout`} />
          </svg>
          Log out
        </button>
      </Modal>
      <MobileMenuModal
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOper={setMobileMenuOper}
      />
    </div>
  );
};

export default AuthHeader;
