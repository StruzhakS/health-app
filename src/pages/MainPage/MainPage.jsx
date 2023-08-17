import RecommendedFoodSection from 'components/RecommendedFoodSection/RecommendedFoodSection';
import { useMediaQuery } from 'react-responsive';

const MainPage = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 768 });

  return <>{isTabletScreen && <RecommendedFoodSection />}</>;
};

export default MainPage;
