import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from '../Goals/Goals.module.css';
import * as desk from 'assets/img/desktop';
import * as mob from 'assets/img/mobile';
import * as tab from 'assets/img/tablet';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

const Activity = () => {
  const [activity, setActivity] = useState('1.2');
  const navigate = useNavigate();
  const onOptionChange = e => {
    setActivity(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  const isMobile = useMediaQuery({ maxWidth: 833 });
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const multiplyClass = clsx(s.goalList, s.gap);
  return (
    <div className={s.goals}>
      {isMobile && <img src={mob.activityMob} alt="activity" />}
      {isTablet && <img src={tab.activityTab} alt="activity" />}
      {isDesktop && <img src={desk.activityDesk} alt="activity" />}

      <form onSubmit={handleSubmit} className={s.formGoals}>
        <h1 className={s.goalsTitle}>Your Activity</h1>
        <h2 className={s.goalsSubtitle}>
          To correctly calculate calorie <br /> and water intake
        </h2>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="activity"
            value="1.2"
            checked={activity === '1.2'}
            onChange={onOptionChange}
          />
          <span className={multiplyClass}>
            1.2 - if you do not have physical activity and sedentary work
          </span>
        </label>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="activity"
            value="1.375"
            checked={activity === '1.375'}
            onChange={onOptionChange}
          />
          <span className={multiplyClass}>
            1.375 - if you do short runs or light gymnastics 1-3 times a week
          </span>
        </label>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="activity"
            value="1.55"
            checked={activity === '1.55'}
            onChange={onOptionChange}
          />
          <span className={multiplyClass}>
            1.55 - if you play sports with average loads 3-5 times a week
          </span>
        </label>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="activity"
            value="1.725"
            checked={activity === '1.725'}
            onChange={onOptionChange}
          />
          <span className={multiplyClass}>
            1.725 ​​- if you train fully 6-7 times a week
          </span>
        </label>
        <label className={s.customRadio}>
          <input
            type="radio"
            name="activity"
            value="1.9"
            checked={activity === '1.9'}
            onChange={onOptionChange}
          />
          <span className={multiplyClass}>
            1.9 - if your work is related to physical labor, you train 2 times a
            day and include strength exercises in your training program
          </span>
        </label>
        <button className={s.btnNext}>Next</button>
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

export default Activity;
