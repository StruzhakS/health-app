import { useSelector } from 'react-redux';
import Icons from '../../assets/icons/symbol-defs.svg';
import css from './MainPageDailyGoal.module.css';
import a from '../../animations/animations.module.css';

const MainPageDailyGoal = () => {
  const defaultWater = useSelector(state => state.user.defaultWater);
  const defaultCalories = useSelector(state => state.user.defaultCalories);

  return (
    <div className={a.slideLeftToRight}>
      <h2 className={css.dailyGoalTitle}>Daily goal</h2>
      <div className={css.dailyGoalStatisticsContainer}>
        <ul className={css.dailyGoalStatisticsList}>
          <li className={css.dailyGoalStatisticsListItem}>
            <svg width="80px" height="80px" className={css.svgBubble}>
              <use xlinkHref={`${Icons}#bubble`} />
            </svg>
            <div className={css.dailyGoalStatisticsListItemContainer}>
              <p className={css.dailyGoalStatisticsListItemTitle}>Calories</p>
              <p className={css.dailyGoalStatisticsListItemData}>
                {defaultCalories}
              </p>
            </div>
          </li>
          <li className={css.dailyGoalStatisticsListItem}>
            <svg width="80px" height="80px" className={css.svgMilk}>
              <use xlinkHref={`${Icons}#milk`} />
            </svg>
            <div className={css.dailyGoalStatisticsListItemContainer}>
              <p className={css.dailyGoalStatisticsListItemTitle}>Water</p>
              <p className={css.dailyGoalStatisticsListItemData}>
                {defaultWater}
                <span
                  className={css.dailyGoalStatisticsListItemDataDescription}
                >
                  ml
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainPageDailyGoal;
