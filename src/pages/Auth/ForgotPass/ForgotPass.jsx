import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from 'redux/auth/authOperations';
import styles from './ForgotPass.module.css';
import { Link } from 'react-router-dom';

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

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src="https://i.ibb.co/bvdHLJW/Illustration.png"
          alt="Illustration"
        />
      </div>
      <h2 className={styles.heading}>Forgot Password</h2>
      <h3 className={styles.h3}>
        We will send you an email with recovery instructions
      </h3>
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
        <p className={styles.account}>If you don't have an account yet</p>
      </form>
      <Link to="/auth/signin" className={styles.signInLink}>
        Sign in
      </Link>
    </div>
  );
};

export default ForgotPass;
