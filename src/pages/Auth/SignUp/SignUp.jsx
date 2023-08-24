import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SignUp.module.css';

import a from '../../../animations/animations.module.css';
import { signUp } from '../../../redux/auth/authOperations';
import iconsSrc from '../../../assets/icons/symbol-defs.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { Formik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import IllustrationDesktop from '../../../assets/img/desktop/Illustration.png';
import IllustrationTablet from '../../../assets/img/tablet/Illustration.png';
import IllustrationMobile from '../../../assets/img/mobile/Illustration.png';
import EyeIcon from '../../../assets/icons/Illustration/eye.svg';
import EyeOffIcon from '../../../assets/icons/Illustration/eye-off.svg';

const passwordRules =
  /^(?=.*\d.*\d.*\d.*\d.*)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d].{6,}$/;

const validationSchema = yup.object().shape({
  name: yup.string().min(2, 'Too Short!').required('Name is a required field'),
  email: yup
    .string()
    .email('Enter a valid Password*')
    .required('E-mail is a required field'),
  password: yup
    .string()
    .matches(passwordRules, { message: 'Please create a stronger password' })
    .max(16, 'Too Long!')
    .required('Password is a required field'),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = values => {
    const body = {
      name: values.name,
      email: values.email,
      password: passwordValue,
    };

    dispatch(signUp(body))
      .unwrap()
      .then(() => navigate('/signup/goal'))
      .catch(error => {
        toast.error(error.message, {
          theme: 'dark',
          autoClose: 2000,
          hideProgressBar: true,
        });
      });
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={`${styles.containerImg} ${a.slideUpToDown}`}>
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
      <div className={`${styles.ContainerDiv} ${a.slideDownToUp}`}>
        <h2 className={styles.heading}>Sign Up</h2>
        <h3 className={styles.subheading}>
          You need to register to use the service
        </h3>
        <div className={styles.center}>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={styles.input}
                  />
                  <div className={styles.errorFields}>
                    {errors.name && touched.name ? (
                      <div>{errors.name} </div>
                    ) : null}
                  </div>
                </label>
                <label htmlFor="email">
                  <input
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={styles.input}
                  />
                  <div className={styles.errorFields}>
                    {errors.email && touched.email ? (
                      <div>{errors.email} </div>
                    ) : null}
                  </div>
                </label>
                <div className={styles.passwordInputContainer}>
                  <label htmlFor="password">
                    <input
                      className={styles.passwordInput}
                      placeholder="Password"
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      onChange={e => {
                        handleChange(e);
                        setPasswordValue(e.target.value);
                      }}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <div className={styles.passwordInputIcon}>
                      <button
                        type="button"
                        className={styles.showPasswordButton}
                        onClick={toggleShowPassword}
                      >
                        {!showPassword ? (
                          <img
                            src={EyeOffIcon}
                            alt="Hide"
                            width="16"
                            height="16"
                          />
                        ) : (
                          <img
                            src={EyeIcon}
                            alt="Show"
                            width="16"
                            height="16"
                          />
                        )}
                      </button>
                    </div>
                    <div className={styles.field}>
                      {errors.password && touched.password && (
                        <div className={styles.errorFields}>
                          {errors.password}
                        </div>
                      )}
                      {!errors.password && values.password && (
                        <div className={styles.correctFields}>
                          {values.password.match(passwordRules) && (
                            <div>Password is secure</div>
                          )}
                        </div>
                      )}
                    </div>
                  </label>
                </div>
                <NavLink
                  to={'https://health-app-1rfu.onrender.com/api/auth/google'}
                  className={styles.googleAuth}
                >
                  <svg width="16" height="16">
                    <use href={`${iconsSrc}#google-auth`} />
                  </svg>{' '}
                  Continue with Google
                </NavLink>

                <button type="submit" className={styles.button}>
                  Sign Up
                </button>
              </form>
            )}
          </Formik>
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
