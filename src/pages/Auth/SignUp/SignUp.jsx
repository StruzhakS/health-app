import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SignUp.module.css';
import { signUp, signIn } from '../../../redux/auth/authOperations';
import { Link, useNavigate } from 'react-router-dom';
import { updateAuthUser } from '../../../redux/auth/authSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(state => state.auth.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (email && password && name) {
      const res = await dispatch(signUp({ name, email, password }));
      if (res?.payload?.success) {
        const signInRes = await dispatch(signIn({ email, password }));
        if (signInRes?.payload?.success) {
          await dispatch(updateAuthUser(signInRes.payload?.user));
          localStorage.setItem('user_token', signInRes?.payload?.user?.token);
          localStorage.setItem(
            'user_data',
            JSON.stringify(signInRes?.payload?.user)
          );
          navigate('/');
        }
      } else {
        alert(res?.payload?.message ?? 'error');
      }
    }
  };

  const AuthUser = useSelector(state => state.auth.user);

  if (AuthUser?.id) {
    navigate('/');
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img
          className={styles.imgIllustration}
          src="https://i.ibb.co/bvdHLJW/Illustration.png"
          alt="Illustration"
        />
      </div>
      <div className={styles.ContainerDiv}>
        <h2 className={styles.heading}>Sign Up</h2>
        <h3 className={styles.subheading}>
          You need to register to use the service
        </h3>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.center}>
          <form className={styles.center} onSubmit={handleSubmit}>
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
        </div>
        <div className={styles.linkContainer}>
          <p className={styles.linkText}>Do you already have an account?</p>
          <Link to="/signin" className={styles.link}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
