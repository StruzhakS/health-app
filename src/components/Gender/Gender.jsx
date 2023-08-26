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
  age: yup
    .number()
    .typeError('Age must be a number')
    .integer('Age must be an integer')
    .min(12, 'Age must be at least 12')
    .max(150, 'Age cannot be more than 150')
    .required('Age is a required field'),
});

const Gender = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.auth.step);

  const handleSubmit = values => {
    const body = {
      gender: values.gender,
      age: Number(values.age),
    };
    dispatch(updateAuthStep(body));
    navigate('/signup/bodyparams');
  };
  const isMobile = useMediaQuery({ maxWidth: 833 });
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <div className={s.goals}>
      {isMobile && (
        <img
          className={a.slideUpToDown}
          src={mob.gender_and_ageMob}
          alt="genders"
        />
      )}
      {isTablet && (
        <img
          className={a.slideUpToDown}
          src={tab.gender_and_ageTab}
          alt="genders"
        />
      )}
      {isDesktop && (
        <img
          className={a.slideUpToDown}
          src={desk.gender_and_ageDesk}
          alt="genders"
        />
      )}

      <Formik
        initialValues={{
          gender: userData?.gender || 'male',
          age: userData?.age || '',
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
            <h1 className={s.goalsTitle}>Select gender, Age</h1>
            <h2 className={s.goalsSubtitle}>
              Choose a goal so that we can <br /> help you effectively
            </h2>
            <p className={s.subtitle}>Gender</p>
            <label className={s.customRadio}>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={values.gender === 'male'}
                onChange={handleChange}
              />
              <span className={s.goalList}>Male</span>
            </label>
            <label className={s.customRadio}>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={values.gender === 'female'}
                onChange={handleChange}
              />
              <span className={s.goalList}>Female</span>
            </label>

            <p className={s.subtitle}>Your age</p>
            <input
              className={s.inputData}
              type="text"
              name="age"
              placeholder="Enter your age"
              required
              value={values.age}
              onChange={handleChange}
              maxLength={3}
              autoComplete="off"
            />
            <div className={s.errorFields}>
              {touched.age && errors.age && (
                <div className={s.error}>{errors.age}</div>
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

export default Gender;
