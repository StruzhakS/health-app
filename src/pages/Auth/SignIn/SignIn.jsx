import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SignIn.module.css';
import a from '../../../animations/animations.module.css';
import { signIn } from '../../../redux/auth/authOperations';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import iconsSrc from '../../../assets/icons/symbol-defs.svg';
import * as desk from 'assets/img/desktop';
import * as mob from 'assets/img/mobile';
import * as tab from 'assets/img/tablet';
import { useMediaQuery } from 'react-responsive';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(state => state.auth?.error);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(signIn(form))
      .unwrap()
      .then(() => navigate('/'))
      .catch(error => {
        toast.error(error.message, {
          theme: 'dark',
          autoClose: 2000,
          hideProgressBar: true,
        });
      });
  };
  const isMobile = useMediaQuery({ maxWidth: 833 });
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <div className={styles.container}>
      <ToastContainer />
      {isMobile && (
        <img
          className={a.slideUpToDown}
          src={mob.illustrationMob}
          alt="genders"
        />
      )}
      {isTablet && (
        <img
          className={a.slideUpToDown}
          src={tab.illustrationTab}
          alt="genders"
        />
      )}
      {isDesktop && (
        <img
          className={a.slideUpToDown}
          src={desk.illustrationDesk}
          alt="genders"
        />
      )}
      <div className={`${styles.ContainerDiv} ${a.slideDownToUp}`}>
        <div>
          <h2 className={styles.heading}>Sign In</h2>
          <h3 className={styles.subheading}>
            You need to login to use the service
          </h3>
          {error && <p className={styles.error}>{error}</p>}
          <form className={styles.inputContainer} onSubmit={handleSubmit}>
            <input
              name="email"
              className={styles.input}
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              name="password"
              className={styles.input}
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <NavLink
              to={'https://health-app-1rfu.onrender.com/api/auth/google'}
              className={styles.googleAuth}
            >
              <svg width="16" height="16">
                <use href={`${iconsSrc}#google-auth`} />
              </svg>{' '}
              Continue with Google
            </NavLink>
            <button className={styles.button} type="submit">
              Sign In
            </button>
            <Link to="/forgot-password" className={styles.forgotPasswordLink}>
              Forgot your password?
            </Link>
          </form>
        </div>
        <div className={styles.signupContainer}>
          <p className={styles.signupText}>If you don't have an account yet</p>
          <Link to="/signup" className={styles.signupLink}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
