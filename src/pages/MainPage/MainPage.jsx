import MainPageDiary from 'components/MainPageDiary/MainPageDiary';
import MainPageStatisticsSection from 'components/MainPageStatisticsSection/MainPageStatisticsSection';
import RecommendedFoodSection from 'components/RecommendedFoodSection/RecommendedFoodSection';
// import { useMediaQuery } from 'react-responsive';

import css from './MainPage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDefaultWaterAndCalories } from 'redux/user/userOperations';

const MainPage = () => {
  // const isTabletScreen = useMediaQuery({ minWidth: 834 });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDefaultWaterAndCalories());
  });

  return (
    <>
      <MainPageStatisticsSection />
      <div className={css.diaryAndFoodContainer}>
        <MainPageDiary />
        {/* {isTabletScreen && <RecommendedFoodSection />} */}
        <RecommendedFoodSection />
      </div>
    </>
  );
};

export default MainPage;
