import MainPageDiary from 'components/MainPageDiary/MainPageDiary';
import MainPageStatisticsSection from 'components/MainPageStatisticsSection/MainPageStatisticsSection';
import RecommendedFoodSection from 'components/RecommendedFoodSection/RecommendedFoodSection';
import { useMediaQuery } from 'react-responsive';

import css from './MainPage.module.css';

const MainPage = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 834 });

  return (
    <>
      <MainPageStatisticsSection />
      <div className={css.diaryAndFoodContainer}>
        <MainPageDiary />
        {isTabletScreen && <RecommendedFoodSection />}
      </div>
    </>
  );
};

export default MainPage;
