import MainPageStatisticsSection from 'components/MainPageStatisticsSection/MainPageStatisticsSection';
import RecommendedFoodSection from 'components/RecommendedFoodSection/RecommendedFoodSection';
import { useMediaQuery } from 'react-responsive';

const MainPage = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 834 });

  return (
    <>
      <MainPageStatisticsSection />
      {isTabletScreen && <RecommendedFoodSection />}
    </>
  );
};

export default MainPage;
