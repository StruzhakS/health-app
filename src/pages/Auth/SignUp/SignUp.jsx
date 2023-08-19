import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SignUp.module.css';
import { signUp, signIn } from '../../../redux/auth/authOperations';
import { Link, useNavigate } from 'react-router-dom';
import { updateAuthUser } from '../../../redux/auth/authSlice';

import IllustrationDesktop from '../../../assets/img/desktop/Illustration.png';
import IllustrationTablet from '../../../assets/img/tablet/Illustration.png';
import IllustrationMobile from '../../../assets/img/mobile/Illustration.png';
import EyeIcon from '../../../assets/icons/Illustration/eye.svg';
import EyeOffIcon from '../../../assets/icons/Illustration/eye-off.svg';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(state => state.auth.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if (email && password && name && checkPasswordStrength(password)) {
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
          navigate('/signup/goal');
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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const checkPasswordStrength = password => {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d.*\d.*\d)[A-Za-z\d]{6,}$/;
    return passwordPattern.test(password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
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
            <div className={styles.passwordInputContainer}>
              <input
                className={`${styles.passwordInput} ${
                  password.length >= 6 && checkPasswordStrength(password)
                    ? styles.securePassword
                    : password
                    ? styles.invalidPassword
                    : ''
                }`}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <div className={styles.passwordInputIcon}>
                <button
                  type="button"
                  className={styles.showPasswordButton}
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <img src={EyeOffIcon} alt="Hide" width="16" height="16" />
                  ) : (
                    <img src={EyeIcon} alt="Show" width="16" height="16" />
                  )}
                </button>
              </div>
              {password && (
                <p
                  className={`${styles.passwordMessage} ${
                    password.length >= 6 && checkPasswordStrength(password)
                      ? styles.securePassword
                      : styles.invalidPassword
                  }`}
                >
                  {password.length >= 6 && checkPasswordStrength(password)
                    ? 'Password is secure'
                    : 'Valid Password* (at least 6 characters, including at least 1 uppercase letter, 1 lowercase letter, and 4 digits)'}
                </p>
              )}
            </div>
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
