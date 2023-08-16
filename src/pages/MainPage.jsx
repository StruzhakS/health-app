import RecommendedFoodSection from 'components/RecommendedFoodSection/RecommendedFoodSection';
import { useMediaQuery } from 'react-responsive';

const MainPage = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 834 });

  return <>{isTabletScreen && <RecommendedFoodSection />}</>;
};

export default MainPage;
