import React, { useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import styles from './MainAuth.module.css';
import { Link, useNavigate } from 'react-router-dom';
import a from '../../../animations/animations.module.css';
import IllustrationDesktop from '../../../assets/img/desktop/Illustration.png';
import IllustrationTablet from '../../../assets/img/tablet/Illustration.png';
import IllustrationMobile from '../../../assets/img/mobile/Illustration.png';

const MainAuth = () => {
  const AuthUser = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (AuthUser?.user?.token && !AuthUser?.user?.requirements) {
      return navigate('signup/goal');
    }
  }, [AuthUser, navigate]);

  return (
    <div className={styles['auth-container']}>
      <div className={`${styles['auth-img']} ${a.slideUpToDown}`}>
        <img
          className={`${styles.imgIllustrationDesktop} ${styles.imgIllustration}`}
          src={IllustrationDesktop}
          alt="Illustration"
        />
        <img
          className={`${styles.imgIllustrationTablet} ${styles.imgIllustration}`}
          src={IllustrationTablet}
          alt="Illustration"
        />
        <img
          className={`${styles.imgIllustrationMobile} ${styles.imgIllustration}`}
          src={IllustrationMobile}
          alt="Illustration"
        />
      </div>

      <div className={`${styles['auth-content']} ${a.slideDownToUp}`}>
        <h1 className={styles['auth-header']}>Set goals and achieve them</h1>
        <h2 className={styles['main-auth-title']}>
          The service will help you set goals and follow them.
        </h2>
        <div className={styles['main-auth-button']}>
          <div>
            <Link
              to="/signin"
              className={`${styles['auth-button']} ${a.mainBtnHover}`}
            >
              sign in
            </Link>
          </div>
          <div>
            <Link
              to="/signup"
              className={`${styles['auth-button']} ${a.mainBtnHover}`}
            >
              sign up
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
