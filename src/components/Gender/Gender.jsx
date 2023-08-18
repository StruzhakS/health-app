import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from '../Goals/Goals.module.css';
import * as desk from 'assets/img/desktop';
import * as mob from 'assets/img/mobile';
import * as tab from 'assets/img/tablet';
import { useMediaQuery } from 'react-responsive';

const Gender = () => {
  const [form, setForm] = useState({
    gender: '',
    age: '',
  });
  const [gender, setGender] = useState('male');
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const onOptionChange = e => {
    setGender(e.target.value);
  };

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setForm(prevForm => {
  //     return { ...prevForm, [name]: value };
  //   });
  // };
  // const handleSubmit = e => {
  //   dispatch(form);
  // };
  const handleChange = ({ target: { name, value } }) => {
    const regex = /^\d{0,3}$/;
    if (regex.test(value)) {
      setForm(prevForm => {
        return { ...prevForm, [name]: value };
      });
    }
  };
  const isMobile = useMediaQuery({ maxWidth: 833 });
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <div className={s.goals}>
      {isMobile && <img src={mob.gender_and_ageMob} alt="genders" />}
      {isTablet && <img src={tab.gender_and_ageTab} alt="genders" />}
      {isDesktop && <img src={desk.gender_and_ageDesk} alt="genders" />}

      <form className={s.formGoals}>
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
            checked={gender === 'male'}
            onChange={onOptionChange}
          />
          <span className={s.goalList}>Male</span>
        </label>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={onOptionChange}
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
          value={form.age}
          onChange={handleChange}
          maxLength={3}
          autoComplete="off"
        />
        <button
          className={s.btnNext}
          onClick={() => navigate('/signup/bodyparams')}
        >
          Next
        </button>
        <button
          className={s.btnBack}
          type="button"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default Gender;
