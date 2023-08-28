import React, { useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import styles from './MainAuth.module.css';
import { Link, useNavigate } from 'react-router-dom';
import a from '../../../animations/animations.module.css';
import * as desk from 'assets/img/desktop';
import * as mob from 'assets/img/mobile';
import * as tab from 'assets/img/tablet';
import { useMediaQuery } from 'react-responsive';

const MainAuth = () => {
  const AuthUser = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (AuthUser?.user?.token && !AuthUser?.user?.requirements) {
      return navigate('signup/goal');
    }
  }, [AuthUser, navigate]);
  const isMobile = useMediaQuery({ maxWidth: 833 });
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <div className={styles['auth-container']}>
      {isMobile && (
        <img
          className={a.slideUpToDown}
          src={mob.illustrationMob}
          alt="genders"
        />
      )}
      {isTablet && (
        <img
          className={a.slideUpToDown}
          src={tab.illustrationTab}
          alt="genders"
        />
      )}
      {isDesktop && (
        <img
          className={a.slideUpToDown}
          src={desk.illustrationDesk}
          alt="genders"
        />
      )}

      <div className={`${styles['auth-content']} ${a.slideDownToUp}`}>
        <h1 className={styles['auth-header']}>Set goals and achieve them</h1>
        <h2 className={styles['main-auth-title']}>
          The service will help you set goals and follow them.
        </h2>
        <div className={styles['main-auth-button']}>
          <div>
            <Link to="/signin" className={styles['auth-button']}>
              Sign in
            </Link>
          </div>
          <div>
            <Link
              to="/signup"
              className={`${styles['auth-button-su']} ${a.hoverCloseBtn}`}
            >
              Sign up
            </Link>
          </div>
        </div>
        <div className={styles['auth-list']}>
          <ul className={styles['auth-list-c']}>
            <li className={styles['auth-list-item']}>Set goals</li>
            <li className={styles['auth-list-item']}>Watch your calories</li>
            <li className={styles['auth-list-item']}>
              Keep track of your water intake
            </li>
            <li className={styles['auth-list-item']}>Control your weight</li>
          </ul>
          <div className={styles['auth-list-a-b']}>
            <ul className={styles['auth-list-a']}>
              <li className={styles['auth-list-item']}>Set goals</li>
              <li className={styles['auth-list-item']}>
                Keep track of your water intake
              </li>
            </ul>
            <ul className={styles['auth-list-b']}>
              <li className={styles['auth-list-item']}>Watch your calories</li>
              <li className={styles['auth-list-item']}>Control your weight</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAuth;
