import Icons from '../../assets/icons/symbol-defs.svg';
import css from './MainPageDailyGoal.module.css';

const MainPageDailyGoal = () => {
  return (
    <div>
      <h2 className={css.dailyGoalTitle}>Daily goal</h2>
      <div className={css.dailyGoalStatisticsContainer}>
        <ul className={css.dailyGoalStatisticsList}>
          <li className={css.dailyGoalStatisticsListItem}>
            <svg width="80px" height="80px" className={css.svgBubble}>
              <use xlinkHref={`${Icons}#bubble`} />
            </svg>
            <div className={css.dailyGoalStatisticsListItemContainer}>
              <p className={css.dailyGoalStatisticsListItemTitle}>Calories</p>
              <p className={css.dailyGoalStatisticsListItemData}>1700</p>
            </div>
          </li>
          <li className={css.dailyGoalStatisticsListItem}>
            <svg width="80px" height="80px" className={css.svgMilk}>
              <use xlinkHref={`${Icons}#milk`} />
            </svg>
            <div className={css.dailyGoalStatisticsListItemContainer}>
              <p className={css.dailyGoalStatisticsListItemTitle}>Water</p>
              <p className={css.dailyGoalStatisticsListItemData}>
                1500
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
