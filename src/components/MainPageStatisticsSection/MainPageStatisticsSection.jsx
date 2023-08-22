import { useNavigate } from 'react-router';
import Icons from '../../assets/icons/symbol-defs.svg';
import css from './MainPageStatisticsSection.module.css';
import a from '../../animations/animations.module.css';
import MainPageDailyGoal from 'components/MainPageDailyGoal/MainPageDailyGoal';
import MainPageWater from 'components/MainPageWater/MainPageWater';
import MainPageFood from 'components/MainPageFood/MainPageFood';

const MainPageStatisticsSection = () => {
  const navigate = useNavigate();

  const onButtonClick = evt => {
    evt.preventDefault();
    navigate('/dashboard');
  };

  return (
    <section
      className={`${css.mainPageStatisticsSection} ${a.slideLeftToRight}`}
    >
      <div className={css.mainPageStatisticsSectionHeaderContainer}>
        <h1>Today</h1>
        <button
          onClick={evt => onButtonClick(evt)}
          className={css.recommendedFoodSectionButton}
        >
          On the way to the goal
          <svg width="16px" height="16px" stroke="white">
            <use xlinkHref={`${Icons}#arrow-right`} />
          </svg>
        </button>
      </div>
      <div className={css.mainPageStatisticsContainer}>
        <div className={css.mainPageStatisticsGoalAndWaterContainer}>
          <MainPageDailyGoal />
          <MainPageWater />
        </div>

        <MainPageFood />
      </div>
    </section>
  );
};

export default MainPageStatisticsSection;
