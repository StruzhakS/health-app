import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from 'redux/auth/authOperations';
import styles from './ForgotPass.module.css';
import { updateAuthStep } from '../../../redux/auth/authSlice';

const ForgotPass = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      dispatch(forgotPassword(email));
    }
  };

  const updateStep = useCallback((step) => {
    dispatch(updateAuthStep(step));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Forgot Password</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Send Reset Email
        </button>
      </form>

      <button onClick={() => updateStep('signIn')}>sign in</button>

    </div>
  );
};

export default ForgotPass;
