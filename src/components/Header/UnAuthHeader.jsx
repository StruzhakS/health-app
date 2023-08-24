import React from 'react';
import s from './Header.module.css';
import a from '../../animations/animations.module.css';
import { NavLink } from 'react-router-dom';
import iconsSrc from '../../assets/icons/symbol-defs.svg';
import clsx from 'clsx';

const UnAuthHeader = () => {
  return (
    <div className={s.header}>
      <div className={s.headerContainer}>
        <NavLink to={'/'} className={`${s.logoLink} ${a.logoHover}`}>
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
    </div>
  );
};

export default UnAuthHeader;
