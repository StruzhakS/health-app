import React from 'react';
import s from './RecomendedFood.module.css';
import recomendedFood from '../../recomended-food.json';


const RecomendedFood = () => {
  console.log(recomendedFood);

  return (
    <section className={s.recomendedFoodSection}>
      <h2 className={s.recomendedFoodTitle}>RecomendedFood</h2>
      <div className={s.recomendedFoodBox}>
        <img src="" alt="Food"/>
        {/* <ul className={s.recomendedFoodList}>
        {randomArr().map(({ name, amount, calories }) => (
          <li className={s.recomendedFoodItem}Food key={name}>
            <img src="" alt={name} />
            <div>
              <p>{name}</p>
              <p>
                {amount} <span>{`${calories} calories`}</span>
              </p>
            </div>
          </li>
        ))}
        </ul> */}
      </div>
    </section>
    )
};

export default RecomendedFood;
