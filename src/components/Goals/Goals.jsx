import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Goals.module.css';
import * as desk from 'assets/img/desktop';
import * as mob from 'assets/img/mobile';
import * as tab from 'assets/img/tablet';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { updateAuthStep } from 'redux/auth/authSlice';

const Goal = () => {
  const [goal, setGoal] = useState('lose fat');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onOptionChange = e => {
    setGoal(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const goal = e.target.elements.goal.value;
    const body = {
      goal,
    };
    dispatch(updateAuthStep(body));
    navigate('/signup/gender');
  };
  const isMobile = useMediaQuery({ maxWidth: 833 });
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <div className={s.goals}>
      {isMobile && <img src={mob.goalsMob} alt="goals" />}
      {isTablet && <img src={tab.goalsTab} alt="goals" />}
      {isDesktop && <img src={desk.goalsDesk} alt="goals" />}

      <form onSubmit={handleSubmit} className={s.formGoals}>
        <h1 className={s.goalsTitle}>Your goal</h1>
        <h2 className={s.goalsSubtitle}>
          Choose a goal so that we can help you effectively
        </h2>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="goal"
            value="lose fat"
            checked={goal === 'lose fat'}
            onChange={onOptionChange}
          />
          <span className={s.goalList}>Lose Fat</span>
        </label>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="goal"
            value="maintain"
            checked={goal === 'maintain'}
            onChange={onOptionChange}
          />
          <span className={s.goalList}>Maintain</span>
        </label>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="goal"
            value="gain muscle"
            checked={goal === 'gain muscle'}
            onChange={onOptionChange}
          />
          <span className={s.goalList}>Gain Muscle</span>
        </label>
        <button className={s.btnNext}>Next</button>
      </form>
    </div>
  );
};

export default Goal;
