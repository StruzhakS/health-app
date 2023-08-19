import React, { useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import styles from './MainAuth.module.css';
import { Link, Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const MainAuth = () => {
  const AuthUser = useAuth();

  useEffect(() => {
    if (AuthUser?.user?.id) {
      // Пример редиректа, если пользователь авторизован
      return <Navigate to="/mainpage" />;
    }
  }, [AuthUser]);

  return (
    <div className={styles['auth-container']}>
      <div className={styles['auth-img']}>
        <img
          className={styles.imgIllustration}
          src="https://i.ibb.co/bvdHLJW/Illustration.png"
          alt="Illustration"
        />
      </div>

      <div className={styles['auth-content']}>
        <h1 className={styles['auth-header']}>Set goals and achieve them</h1>
        <h2 className={styles['main-auth-title']}>
          The service will help you set goals and follow them.
        </h2>
        <div className={styles['main-auth-button']}>
          <div>
            <Link to="/signin" className={styles['auth-button']}>
              sign in
            </Link>
          </div>
          <div>
            <Link to="/signup" className={styles['auth-button']}>
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
