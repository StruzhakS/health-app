import React, { useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import styles from './MainAuth.module.css';
import { Link } from 'react-router-dom';

const MainAuth = () => {
  const AuthUser = useAuth();

  useEffect(() => {
    if (AuthUser?.user?.id) {
      //TODO if logged -> redirect
    }
  }, [AuthUser]);

  return (
    <div className={styles['auth-container']}>
      <h1 className={styles['auth-header']}>Set goals and achieve them</h1>
      <div className={styles['auth-content']}>
        <h2 className={styles['main-auth-title']}>
          The service will help you set goals and follow them.
        </h2>
        <div className={styles['main-auth-button']}>
          <div>
            <Link
              to='signin'
              className={styles['auth-button']}
            >
              sign in
            </Link>
          </div>
          <div>
            <Link
              to='signup'
              className={styles['auth-button']}
            >
              sign up
            </Link>
          </div>
        </div>
        <div>
          <ul>
            <li>Set goals</li>
            <li>Watch your calories</li>
            <li>Keep track of your water intake</li>
            <li>Control your weight</li>
          </ul>
        </div>
        {/*<div className={styles['auth-step-container']}>*/}
        {/*  <div>*/}
        {/*    {!AuthUser.step ? <Main /> : null}*/}
        {/*    {AuthUser.step === 'signIn' ? <SignIn /> : null}*/}
        {/*    {AuthUser.step === 'signUp' ? <SignUp /> : null}*/}
        {/*    {AuthUser.step === 'forgotPass' ? <ForgotPass /> : null}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default MainAuth;
