import React, { useCallback, useEffect, useState } from 'react';
import s from './Header.module.css';
import a from '../../animations/animations.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { NavLink, useNavigate } from 'react-router-dom';
import ControlPanel from 'components/ControlPanel/ControlPanel';
import iconsSrc from '../../assets/icons/symbol-defs.svg';
import Modal from 'react-modal';

import MobileMenuModal from 'components/Modal/MobileMenuModal/MobileMenuModal';
import { logoutUserThunk } from 'redux/auth/authOperations';

const AuthHeader = () => {
  const avatar = useSelector(state => state?.auth?.user?.avatarURL);
  const userName = useSelector(state => state?.auth?.user?.name);

  const isTabletScreen = useMediaQuery({ minWidth: 834 });
  const isMobileScreen = useMediaQuery({ maxWidth: 834 });

  const [setingsModalIsOpen, setSetingsModalIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOper] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = useCallback(async () => {
    dispatch(logoutUserThunk());
    setSetingsModalIsOpen(false);
    navigate('/');
  }, [dispatch, navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (setingsModalIsOpen && !event.target.closest(`.${s.userSettingsModal}`)) {
        setClickedOutside(true);
      }
    };

    if (clickedOutside) {
      setSetingsModalIsOpen(false);
      setClickedOutside(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setingsModalIsOpen, clickedOutside]);

  return (
    <div className={s.header}>
      <div className={s.headerContainer}>
        <div className={s.logoWrapper}>
          <NavLink to={'/'} className={`${s.logoLink} ${a.logoHover}`}>
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
            {userName} <img src={avatar} alt="avatar" className={s.avatarImg} />
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
        <div className={s.positionModalHeader} id="headerModal">
        <Modal
          className={`${s.userSettingsModal} ${a.scaleInCenter}`}
          isOpen={setingsModalIsOpen}
          onRequestClose={() => setSetingsModalIsOpen(false)}
       
            contentLabel="Example Modal"
            parentSelector={() => document.querySelector('#headerModal')}
              overlayClassName={s.modalHeaderOverlay}
        >
          <button
            className={s.userBtn}
            onClick={() => {
              navigate('settings');
              setSetingsModalIsOpen(false);
            }}
          >
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
        </Modal></div>
        <MobileMenuModal
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOper={setMobileMenuOper}
        />
      </div>
    </div>
  );
};

export default AuthHeader;
