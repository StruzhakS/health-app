import recommendedFood from '../../recomended-food.json';
import Food from '../../assets/img/desktop/Food.png';
import s from './RecomendedFood.module.css';
import a from '../../animations/animations.module.css';

const RecomendedFood = () => {
  const randomArr = () => {
    const indexArr = [];

    do {
      const randomIndex = Math.round(
        Math.random() * (recommendedFood.length - 1)
      );
      if (!indexArr.includes(randomIndex)) {
        indexArr.push(randomIndex);
      }
    } while (indexArr.length < 10);

    return [
      recommendedFood[indexArr[0]],
      recommendedFood[indexArr[1]],
      recommendedFood[indexArr[2]],
      recommendedFood[indexArr[3]],
      recommendedFood[indexArr[4]],
      recommendedFood[indexArr[5]],
      recommendedFood[indexArr[6]],
      recommendedFood[indexArr[7]],
      recommendedFood[indexArr[8]],
      recommendedFood[indexArr[9]],
    ];
  };

  return (
    <div className={s.recomendedFoodSection}>
      <h2 className={`${s.recomendedFoodTitle} ${a.slideUpToDown}`}>
        Recommended food
      </h2>
      <div className={s.recomendedFoodBox}>
        <img
          className={`${s.recomendedFoodImg} ${a.slideUpToDown}`}
          src={Food}
          alt="Food"
        />
        <ul className={`${s.recomendedFoodList} ${a.slideDownToUp}`}>
          {randomArr().map(({ name, amount, calories, img }) => (
            <li className={s.recomendedFoodListItem} key={name}>
              <img src={img} alt={name} width="46px" height="46px" />
              <div className={s.recomendedFoodItemBox}>
                <p className={s.recomendedFoodName}>{name}</p>
                <p className={s.recomendedFoodWeight}>
                  {amount}{' '}
                  <span
                    className={s.recomendedFoodColories}
                  >{`${calories} calories`}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecomendedFood;
