import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateAuthStep } from '../../../redux/auth/authSlice';
import styles from './MainAuth.module.css';

const MainAuth = () => {
  const dispatch = useDispatch();

  const updateStep = useCallback(step => {
    dispatch(updateAuthStep(step));
  }, []);

  return (
    <div className={styles['main-auth-container']}>
      <h2 className={styles['main-auth-title']}>
        The service will help you set goals and follow them.
      </h2>
      <div className={styles['main-auth-button']}>
        <div>
          <button
            className={styles['auth-button']}
            onClick={() => updateStep('signIn')}
          >
            sign in
          </button>
        </div>
        <div>
          <button
            className={styles['auth-button']}
            onClick={() => updateStep('signUp')}
          >
            sign up
          </button>
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
    </div>
  );
};

export default MainAuth;
