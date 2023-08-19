import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../../redux/auth/authOperations';
import styles from './ForgotPass.module.css';
import { Link, useNavigate } from 'react-router-dom';

import IllustrationDesktop from '../../../assets/img/desktop/Illustration.png';
import IllustrationTablet from '../../../assets/img/tablet/Illustration.png';
import IllustrationMobile from '../../../assets/img/mobile/Illustration.png';

const ForgotPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(state => state.auth.error);
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (email) {
      const res = await dispatch(forgotPassword(email));
      if (res?.payload?.success) {
        navigate('/signIn');
      } else {
        alert(res?.payload?.message ?? 'error');
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
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
      <div className={styles.ContainerDiv}>
        <h2 className={styles.heading}>Forgot Password</h2>
        <h3 className={styles.h3}>
          We will send you an email with recovery instructions
        </h3>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.center} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button className={styles.button} type="submit">
            Send
          </button>
          <div className={styles.linkContainer}>
            <p className={styles.account}>If you don't have an account yet</p>
            <Link to="/signin" className={styles.signInLink}>
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
