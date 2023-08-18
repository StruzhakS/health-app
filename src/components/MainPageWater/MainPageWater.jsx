import { useState } from 'react';
import Icons from '../../assets/icons/symbol-defs.svg';
import css from './MainPageWater.module.css';
import WaterIntakeModal from 'components/Modal/WaterIntakeModal/WaterIntakeModal';

const percent = 100;

const MainPageWater = () => {
  const [waterIntakeModalOpen, setWaterIntakeModalOpen] = useState(false);

  const onAddWaterButtonClick = () => {
    setWaterIntakeModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

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
          <button
            onClick={onAddWaterButtonClick}
            type="button"
            className={css.waterStatisticsInfoButton}
          >
            <svg width="16px" height="16px" className={css.svgPlus}>
              <use xlinkHref={`${Icons}#add`} />
            </svg>
            Add water intake
          </button>
          <WaterIntakeModal
            waterIntakeModalOpen={waterIntakeModalOpen}
            setWaterIntakeModalOpen={setWaterIntakeModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageWater;