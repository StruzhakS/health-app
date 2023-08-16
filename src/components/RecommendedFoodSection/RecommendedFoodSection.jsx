import { useNavigate } from 'react-router-dom';
import recommendedFood from '../../recomended-food.json';

import css from './RecommendedFoodSection.module.css';

const RecommendedFoodSection = () => {
  const navigate = useNavigate();

  const randomDataArr = () => {
    const indexArr = [];

    do {
      const randomIndex = Math.round(
        Math.random() * (recommendedFood.length - 1)
      );
      if (!indexArr.includes(randomIndex)) {
        indexArr.push(randomIndex);
      }
    } while (indexArr.length < 4);

    return [
      recommendedFood[indexArr[0]],
      recommendedFood[indexArr[1]],
      recommendedFood[indexArr[2]],
      recommendedFood[indexArr[3]],
    ];
  };

  const onSeeMoreButtonClick = evt => {
    evt.preventDefault();
    navigate('/recommented-food');
  };

  return (
    <section className={css.recommendedFoodSection}>
      <h2 className={css.recommendedFoodSectionTitle}>Recommented food</h2>
      <ul className={css.recommendedFoodSectionList}>
        {randomDataArr().map(({ name, amount, calories }) => (
          <li className={css.recommendedFoodSectionListItem} key={name}>
            <img
              width="46px"
              height="46px"
              src="https://emoji-copy.com/imaj/160/1F966.webp"
              alt={name}
            />
            <div>
              <p className={css.listItemFoodName}>{name}</p>
              <p className={css.listItemFoodDescription}>
                {amount}
                <span
                  className={css.listItemFoodDescriptionCalories}
                >{`${calories} calories`}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>

      <button onClick={evt => onSeeMoreButtonClick(evt)}>See more</button>
    </section>
  );
};

export default RecommendedFoodSection;
