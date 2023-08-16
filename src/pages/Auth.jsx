import React from 'react';
import SignIn from 'components/Auth/SignIn/SignIn';
import SignUp from 'components/Auth/SignUp/SignUp';
import ForgotPass from 'components/Auth/ForgotPass/ForgotPass';
import { useAuth } from '../hooks/useAuth';
import Main from '../components/Auth/MainAuth/MainAuth';
import styles from './Auth.module.css';
const Auth = () => {
  const AuthUser = useAuth();

  return (
    <div className={styles['auth-container']}>
      <div className={styles['auth-step']}>
        <img src="" alt="woman" />
      </div>
      <h1 className={styles['auth-header']}>Set goals and achieve them</h1>
      <div className={styles['auth-content']}>
        <div className={styles['auth-step-container']}>
          <div>
            {!AuthUser.step ? <Main /> : null}
            {AuthUser.step === 'signIn' ? <SignIn /> : null}
            {AuthUser.step === 'signUp' ? <SignUp /> : null}
            {AuthUser.step === 'forgotPass' ? <ForgotPass /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
