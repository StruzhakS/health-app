import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Goals.module.css';
import a from '../../animations/animations.module.css';
import * as desk from 'assets/img/desktop';
import * as mob from 'assets/img/mobile';
import * as tab from 'assets/img/tablet';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { updateAuthStep } from 'redux/auth/authSlice';

const Goal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.auth.step);
  const [goal, setGoal] = useState(userData?.goal || 'lose fat');

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
      {isMobile && (
        <img className={a.slideUpToDown} src={mob.goalsMob} alt="goals" />
      )}
      {isTablet && (
        <img className={a.slideUpToDown} src={tab.goalsTab} alt="goals" />
      )}
      {isDesktop && (
        <img className={a.slideUpToDown} src={desk.goalsDesk} alt="goals" />
      )}

      <form
        onSubmit={handleSubmit}
        className={`${s.formGoals} ${a.slideDownToUp}`}
      >
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
        <button type="submit" className={`${s.btnNext} ${a.hoverYellowBtn}`}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Goal;
