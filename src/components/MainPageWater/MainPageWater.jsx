import Icons from '../../assets/icons/symbol-defs.svg';
import css from './MainPageWater.module.css';

const percent = 100;

const MainPageWater = () => {
  return (
    <div>
      <h2 className={css.waterTitle}>Water</h2>
      <div className={css.waterStatisticsContainer}>
        <div className={css.waterStatisticsScheduleContainer}>
          <div
            style={{ height: `${percent}%` }}
            className={css.waterStatisticsSchedule}
          >
            <p className={css.schedulePercent}>{`${percent}%`}</p>
          </div>
        </div>
        <div className={css.waterStatisticsInfoContainer}>
          <h3 className={css.waterStatisticsInfoTitle}>Water consumption</h3>
          <p className={css.waterStatisticsMainInfo}>
            1050
            <span className={css.waterStatisticsHelperInfo}>ml</span>
          </p>
          <p className={css.waterStatisticsAdditionalInfo}>
            left:
            <span className={css.waterStatisticsHelperInfo}>450 ml</span>
          </p>
          <button type="button" className={css.waterStatisticsInfoButton}>
            <svg width="16px" height="16px" className={css.svgPlus}>
              <use xlinkHref={`${Icons}#add`} />
            </svg>
            Add water intake
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPageWater;
