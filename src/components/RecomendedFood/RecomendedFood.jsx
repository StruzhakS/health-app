import React from 'react';
import s from './RecomendedFood.module.css';
import recomendedFood from '../../recomended-food.json';

const RecomendedFood = () => {
  console.log(recomendedFood);

  return <div className={s.Box}>RecomendedFood</div>;
};

export default RecomendedFood;
