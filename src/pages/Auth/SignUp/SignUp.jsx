import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SignUp.module.css';

import a from '../../../animations/animations.module.css';
import { signUp } from '../../../redux/auth/authOperations';

import { Link, useNavigate } from 'react-router-dom';

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

  // const error = useSelector(state => state.auth.error);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  // const [showPassword, setShowPassword] = useState(false);
  // const [nameError, setNameError] = useState('');
  // const [isEmailValid, setIsEmailValid] = useState(true);

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   if (
  //     email &&
  //     password &&
  //     name &&
  //     // checkPasswordStrength(password) &&
  //     isEmailValid
  //   ) {
  //     if (name.length < 2) {
  //       setNameError('Name should be at least 2 characters long.');
  //     } else {
  //       setNameError('');
  //       const res = await dispatch(signUp({ name, email, password }));
  //       if (res?.payload?.success) {
  //         const signInRes = await dispatch(signIn({ email, password }));
  //         if (signInRes?.payload?.success) {
  //           await dispatch(updateAuthUser(signInRes.payload?.user));
  //           localStorage.setItem('user_token', signInRes?.payload?.user?.token);
  //           localStorage.setItem(
  //             'user_data',
  //             JSON.stringify(signInRes?.payload?.user)
  //           );
  //           navigate('/signup/goal');
  //         }
  //       } else {
  //         alert(res?.payload?.message ?? 'error');
  //       }
  //     }
  //   }
  // };

  // const AuthUser = useSelector(state => state.auth.user);

  // if (AuthUser?.id) {
  //   navigate('/');
  // }

  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  // // const checkPasswordStrength = password => {
  // //   const passwordPattern =
  // //     /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d.*\d.*\d)[A-Za-z\d]{6,}$/;
  // //   return passwordPattern.test(password);
  // // };

  // return (
  //   <div className={styles.container}>
  //     <div className={styles.containerImg}>
  //       <img
  //         className={`${styles.imgIllustrationDesktop} ${styles.imgIllustration}`}
  //         src={IllustrationDesktop}
  //         alt="Illustration"
  //       />
  //       <img
  //         className={`${styles.imgIllustrationTablet} ${styles.imgIllustration}`}
  //         src={IllustrationTablet}
  //         alt="Illustration"
  //       />
  //       <img
  //         className={`${styles.imgIllustrationMobile} ${styles.imgIllustration}`}
  //         src={IllustrationMobile}
  //         alt="Illustration"
  //       />
  //     </div>
  //     <div className={styles.ContainerDiv}>
  //       <h2 className={styles.heading}>Sign Up</h2>
  //       <h3 className={styles.subheading}>
  //         You need to register to use the service
  //       </h3>
  //       {error && <p className={styles.error}>{error}</p>}
  //       <div className={styles.center}>
  //         <form className={styles.center} onSubmit={handleSubmit}>
  //           <input
  //             className={styles.input}
  //             type="text"
  //             placeholder="Name"
  //             value={name}
  //             onChange={e => {
  //               setName(e.target.value);
  //               setNameError('');
  //             }}
  //           />
  //           {nameError && <p className={styles.error}>{nameError}</p>}
  //           <input
  //             className={`${styles.input} ${
  //               !isEmailValid ? styles.invalidInput : ''
  //             }`}
  //             type="email"
  //             placeholder="Email"
  //             value={email}
  //             onChange={e => {
  //               const inputEmail = e.target.value;
  //               setEmail(inputEmail);
  //               // Проверка валидности email
  //               const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //               setIsEmailValid(emailPattern.test(inputEmail));
  //             }}
  //           />
  //           {!isEmailValid && (
  //             <p className={styles.error}>Invalid email address</p>
  //           )}
  //           <div className={styles.passwordInputContainer}>
  //             <input
  //               className={`${styles.passwordInput} ${
  //                 password.length >= 6
  //                   ? // && checkPasswordStrength(password)
  //                     styles.securePassword
  //                   : password
  //                   ? styles.invalidPassword
  //                   : ''
  //               }`}
  //               type={showPassword ? 'text' : 'password'}
  //               placeholder="Password"
  //               value={password}
  //               onChange={e => setPassword(e.target.value)}
  //             />
  //             <div className={styles.passwordInputIcon}>
  //               <button
  //                 type="button"
  //                 className={styles.showPasswordButton}
  //                 onClick={toggleShowPassword}
  //               >
  //                 {showPassword ? (
  //                   <img src={EyeOffIcon} alt="Hide" width="16" height="16" />
  //                 ) : (
  //                   <img src={EyeIcon} alt="Show" width="16" height="16" />
  //                 )}
  //               </button>
  //             </div>
  //             {password && (
  //               <p
  //                 className={`${styles.passwordMessage} ${
  //                   password.length >= 6
  //                     ? // && checkPasswordStrength(password)
  //                       styles.securePassword
  //                     : styles.invalidPassword
  //                 }`}
  //               >
  //                 {password.length >= 6
  //                   ? // && checkPasswordStrength(password)
  //                     'Password is secure'
  //                   : 'Valid Password* (at least 6 characters, including at least 1 uppercase letter, 1 lowercase letter, and 4 digits)'}
  //               </p>
  //             )}
  //           </div>
  //           <button className={styles.button} type="submit">
  //             Sign Up
  //           </button>
  //         </form>
  //       </div>
  //       <div className={styles.linkContainer}>
  //         <p className={styles.linkText}>Do you already have an account?</p>
  //         <Link to="/signin" className={styles.link}>
  //           Sign in
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default SignUp;
