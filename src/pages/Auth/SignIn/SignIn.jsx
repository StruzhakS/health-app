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
import Loader from 'components/Loader/Loader';
import { Formik } from 'formik';
import * as yup from 'yup';

const regexPatterns = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid Password*')
    .required('E-mail is a required field')
    .test('valid-email', 'Enter a valid Password*', function (value) {
      return regexPatterns.email.test(value);
    }),
  password: yup.string().required('Password is a required field'),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector(state => state.auth);

  const handleSubmit = values => {
    const body = {
      email: values.email,
      password: values.password,
    };

    dispatch(signIn(body))
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isMobile && (
            <img
              className={a.slideUpToDown}
              src={mob.illustrationMob}
              alt="fitnessChecking"
            />
          )}
          {isTablet && (
            <img
              className={a.slideUpToDown}
              src={tab.illustrationTab}
              alt="fitnessChecking"
            />
          )}
          {isDesktop && (
            <img
              className={a.slideUpToDown}
              src={desk.illustrationDesk}
              alt="fitnessChecking"
            />
          )}
          <div className={`${styles.ContainerDiv} ${a.slideDownToUp}`}>
            <div>
              <h2 className={styles.heading}>Sign In</h2>
              <h3 className={styles.subheading}>
                You need to login to use the service
              </h3>

              <Formik
                initialValues={{ email: '', password: '' }}
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
                  <form
                    className={styles.inputContainer}
                    onSubmit={handleSubmit}
                  >
                    <label htmlFor="email">
                      <input
                        className={styles.input}
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <div className={styles.errorFields}>
                        {errors.email && touched.email ? (
                          <div>{errors.email} </div>
                        ) : null}
                      </div>
                    </label>
                    <label htmlFor="password">
                      <input
                        className={styles.input}
                        placeholder="Password"
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />

                      <div className={styles.errorFields}>
                        {errors.password && touched.password && (
                          <div>{errors.password}</div>
                        )}
                      </div>
                    </label>
                    <NavLink
                      to={
                        'https://health-app-1rfu.onrender.com/api/auth/google'
                      }
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
                    <Link
                      to="/forgot-password"
                      className={styles.forgotPasswordLink}
                    >
                      Forgot your password?
                    </Link>
                  </form>
                )}
              </Formik>
            </div>
            <div className={styles.signupContainer}>
              <p className={styles.signupText}>
                If you don't have an account yet
              </p>
              <Link to="/signup" className={styles.signupLink}>
                Sign up
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SignIn;
