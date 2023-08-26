import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { updateAuthStep } from 'redux/auth/authSlice';

import { Formik } from 'formik';
import * as yup from 'yup';

import s from '../Goals/Goals.module.css';
import a from '../../animations/animations.module.css';
import * as desk from 'assets/img/desktop';
import * as mob from 'assets/img/mobile';
import * as tab from 'assets/img/tablet';

const validationSchema = yup.object().shape({
  height: yup
    .number()
    .typeError('Height must be a number')
    .min(1, 'Height must be at least 1')
    .max(300, 'Height cannot be more than 300')
    .required('Height is a required field'),
  weight: yup
    .number()
    .typeError('Weight must be a number')
    .min(1, 'Weight must be at least 1')
    .max(500, 'Weight cannot be more than 500')
    .required('Weight is a required field'),
});

const BodyParams = () => {
  const userData = useSelector(state => state.auth.step);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = values => {
    const body = {
      height: Number(values.height),
      weight: Number(values.weight),
    };
    dispatch(updateAuthStep(body));
    navigate('/signup/activity');
  };
  const isMobile = useMediaQuery({ maxWidth: 833 });
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <div className={s.goals}>
      {isMobile && (
        <img
          className={a.slideUpToDown}
          src={mob.body_parametersMob}
          alt="body"
        />
      )}
      {isTablet && (
        <img
          className={a.slideUpToDown}
          src={tab.body_parametersTab}
          alt="body"
        />
      )}
      {isDesktop && (
        <img
          className={a.slideUpToDown}
          src={desk.body_parametersDesk}
          alt="body"
        />
      )}

      <Formik
        initialValues={{
          height: userData?.height || '',
          weight: userData?.weight || '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form
            noValidate
            onSubmit={handleSubmit}
            className={`${s.formGoals} ${a.slideDownToUp}`}
          >
            <h1 className={s.goalsTitle}>Body parameters</h1>
            <h2 className={s.goalsSubtitle}>
              Enter your parameters for correct performance tracking
            </h2>
            <p className={s.subtitle}>Height</p>
            <input
              className={s.inputData}
              type="text"
              placeholder="Enter your height"
              required
              name="height"
              value={values.height}
              onChange={handleChange}
              maxLength={3}
              autoComplete="off"
            />
            <div className={s.errorFields}>
              {touched.height && errors.height && (
                <div className={s.error}>{errors.height}</div>
              )}
            </div>
            <p className={s.subtitle}>Weight</p>
            <input
              className={s.inputData}
              type="text"
              placeholder="Enter your weight"
              required
              name="weight"
              value={values.weight}
              onChange={handleChange}
              maxLength={3}
              autoComplete="off"
            />
            <div className={s.errorFields}>
              {touched.weight && errors.weight && (
                <div className={s.error}>{errors.weight}</div>
              )}
            </div>
            <button
              type="submit"
              className={`${s.btnNext} ${a.hoverYellowBtn}`}
            >
              Next
            </button>
            <button
              className={`${s.btnBack} ${a.hoverCloseBtn}`}
              type="button"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BodyParams;
