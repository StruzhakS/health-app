import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../../redux/auth/authOperations';
import styles from './ForgotPass.module.css';
import a from '../../../animations/animations.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as desk from 'assets/img/desktop';
import * as mob from 'assets/img/mobile';
import * as tab from 'assets/img/tablet';
import { useMediaQuery } from 'react-responsive';
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
});

const ForgotPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = value => {
    dispatch(forgotPassword(value.email))
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
          <h2 className={styles.heading}>Forgot Password</h2>
          <h3 className={styles.h3}>
            We will send you an email with recovery instructions
          </h3>
          <Formik
            initialValues={{ email: '' }}
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
              <form className={styles.center} onSubmit={handleSubmit}>
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
                <button className={styles.button} type="submit">
                  Send
                </button>
              </form>
            )}
          </Formik>
        </div>

        <div className={styles.linkContainer}>
          <p className={styles.account}>If you don't have an account yet</p>
          <Link to="/signin" className={styles.signInLink}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
