import { useState } from 'react';
import Icons from '../../assets/icons/symbol-defs.svg';
import css from './MainPageWater.module.css';
import WaterIntakeModal from 'components/Modal/WaterIntakeModal/WaterIntakeModal';
import { useSelector } from 'react-redux';
import { percentageCount } from 'helpers/percentageCount';

const MainPageWater = () => {
  const [waterIntakeModalOpen, setWaterIntakeModalOpen] = useState(false);

  const defaultWater = useSelector(state => state.user.defaultWater);

  const water = useSelector(state => state.user.water);

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
            style={{ height: `${percentageCount(defaultWater, water)}%` }}
            className={css.waterStatisticsSchedule}
          >
            <p className={css.schedulePercent}>{`${percentageCount(
              defaultWater,
              water
            )}%`}</p>
          </div>
        </div>
        <div className={css.waterStatisticsInfoContainer}>
          <h3 className={css.waterStatisticsInfoTitle}>Water consumption</h3>
          <p className={css.waterStatisticsMainInfo}>
            {water}
            <span className={css.waterStatisticsHelperInfo}>ml</span>
          </p>
          <p className={css.waterStatisticsAdditionalInfo}>
            left:
            <span className={css.waterStatisticsHelperInfo}>{`${
              defaultWater - water
            } ml`}</span>
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
