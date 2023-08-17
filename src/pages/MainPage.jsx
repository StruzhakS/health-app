import MainPageDiary from 'components/MainPageDiary/MainPageDiary';
import MainPageStatisticsSection from 'components/MainPageStatisticsSection/MainPageStatisticsSection';
import RecommendedFoodSection from 'components/RecommendedFoodSection/RecommendedFoodSection';
import { useMediaQuery } from 'react-responsive';

const MainPage = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 834 });

  return (
    <>
      <MainPageStatisticsSection />
      <MainPageDiary />
      {isTabletScreen && <RecommendedFoodSection />}
    </>
  );
};

export default MainPage;
