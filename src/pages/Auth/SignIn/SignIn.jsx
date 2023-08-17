import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SignIn.module.css';
import { signIn } from '../../../redux/auth/authOperations';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (email && password) {
      dispatch(signIn({ email, password }));
    }
  };
  const isAuth = useSelector(state => state.auth.token);

  console.log(isAuth);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src="https://i.ibb.co/bvdHLJW/Illustration.png"
          alt="Illustration"
        />
      </div>
      <h2 className={styles.heading}>Sign In</h2>
      <h3 className={styles.subheading}>
        You need to login to use the service
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
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Sign In
        </button>

        <Link to="/forgot-password" className={styles.forgotPasswordLink}>
          Forgot your password?
        </Link>
      </form>
      <div className={styles.signupContainer}>
        <p className={styles.signupText}>If you don't have an account yet</p>
        <Link to="/signup" className={styles.signupLink}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
