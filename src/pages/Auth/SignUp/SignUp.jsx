import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (email && password && name) {
      dispatch(signUp({ name, email, password }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          src="https://i.ibb.co/bvdHLJW/Illustration.png"
          alt="Illustration"
        />
      </div>
      <h2 className={styles.heading}>Sign Up</h2>
      <h3 className={styles.subheading}>
        You need to register to use the service
      </h3>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
          Sign Up
        </button>
      </form>
      <div className={styles.linkContainer}>
        <p className={styles.linkText}>Do you already have an account?</p>
        <Link to="/signin" className={styles.link}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
