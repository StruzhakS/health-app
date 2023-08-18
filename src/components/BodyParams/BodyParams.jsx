import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from '../Goals/Goals.module.css';
import * as desk from 'assets/img/desktop';
import * as mob from 'assets/img/mobile';
import * as tab from 'assets/img/tablet';
import { useMediaQuery } from 'react-responsive';

const BodyParams = () => {
  const [form, setForm] = useState({
    height: '',
    weight: '',
  });
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    const regex = /^\d{1,3}([,.]\d{0,2})?$/;
    if (regex.test(value)) {
      setForm(prevForm => {
        return { ...prevForm, [name]: value };
      });
    }
  };
  //   const handleSubmit = e => {
  //     dispatch(form);
  //   };
  const isMobile = useMediaQuery({ maxWidth: 833 });
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <div className={s.goals}>
      {isMobile && <img src={mob.body_parametersMob} alt="body" />}
      {isTablet && <img src={tab.body_parametersTab} alt="body" />}
      {isDesktop && <img src={desk.body_parametersDesk} alt="body" />}

      <form className={s.formGoals}>
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
          value={form.height}
          onChange={handleChange}
          autoComplete="off"
        />

        <p className={s.subtitle}>Weight</p>
        <input
          className={s.inputData}
          type="text"
          placeholder="Enter your weight"
          required
          name="weight"
          value={form.weight}
          onChange={handleChange}
          autoComplete="off"
        />
        <button
          className={s.btnNext}
          onClick={() => navigate('/signup/activity')}
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

export default BodyParams;
