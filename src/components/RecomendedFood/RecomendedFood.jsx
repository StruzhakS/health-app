import recommendedFood from '../../recomended-food.json';
import Food from '../../assets/img/desktop/Food.png';
import s from './RecomendedFood.module.css';

const RecomendedFood = () => {

  const randomArr = () => {
    const indexArr = [];

    do {
      const randomIndex = Math.round(
        Math.random() * (recommendedFood.length - 1)
      );
      // console.log(randomIndex);
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
    <section className={s.recomendedFoodSection}>
      <h2 className={s.recomendedFoodTitle}>Recommented food</h2>
      <div className={s.recomendedFoodBox}>
      <img src={Food} alt='Food' />
      <ul className={s.recomendedFoodList}>
        {randomArr().map(({ name, amount, calories }) => (
          <li className={s.recomendedFoodListItem} key={name}>
            <img src="" alt={name} />
            <div>
              <p>{name}</p>
              <p>
                {amount} <span>{`${calories} calories`}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default RecomendedFood;
