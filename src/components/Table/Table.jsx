import React from 'react';
import s from './Table.module.css';
import Icons from '../../assets/icons/symbol-defs.svg';
// import { PiPencilLineLight } from 'react-icons/pi';
// import { BsPlus } from 'react-icons/bs';

import * as mob from 'assets/img/mobile';
const DiaryTable = ({
  mealType,
  mealData,
  onRecordMealButtonClick,
  onUpdateMealButtonClick,
}) => {
  function calculateSum(meal) {
    return meal.reduce(
      (acc, mealItem) => {
        acc.carbonohidratesSum += Number(mealItem.carbonohidrates);
        acc.proteinSum += Number(mealItem.protein);
        acc.fatSum += Number(mealItem.fat);
        return acc;
      },
      { carbonohidratesSum: 0, proteinSum: 0, fatSum: 0 }
    );
  }

  const sum = calculateSum(mealData);

  function makeNewMealsArray(mealsArray) {
    const newArray =
      mealsArray.length <= 4
        ? [
            ...mealsArray,
            ...Array(4 - mealsArray.length).fill({
              foodName: '',
              carbonohidrates: '',
              fat: '',
              protein: '',
            }),
          ]
        : mealsArray;
    return newArray;
  }
  return (
    <>
      <div className={s.targetMeal}>
        <table>
          <thead>
            <tr>
              <td>
                <img
                  width="36px"
                  height="36px"
                  src={mob[mealType]}
                  alt="meal"
                />
              </td>
              <td>
                <h3 className={s.mealListItemTitle}>{mealType}</h3>
              </td>
              <td>
                <p className={s.mealAdditionalInfoDescription}>
                  Carbonohidrates:
                  <span className={s.mealAdditionalInfoValue}>
                    {sum.carbonohidratesSum}
                  </span>
                </p>
              </td>
              <td>
                <p className={s.mealAdditionalInfoDescription}>
                  Protein:
                  <span className={s.mealAdditionalInfoValue}>
                    {sum.proteinSum}
                  </span>
                </p>
              </td>
              <td>
                <p className={s.mealAdditionalInfoDescription}>
                  Fat:
                  <span className={s.mealAdditionalInfoValue}>
                    {sum.fatSum}
                  </span>
                </p>
              </td>
            </tr>
          </thead>
        </table>
        <table>
          <tbody>
            {makeNewMealsArray(mealData).map((el, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el.foodName}</td>
                <td>{el.carbonohidrates}</td>
                <td>{el.fat}</td>
                <td>{el.protein}</td>
                {el.foodName && (
                  <td>
                    <button onClick={() => onUpdateMealButtonClick(mealType)}>
                      <svg
                        width="16px"
                        height="16px"
                        className={s.recordMealIcon}
                        style={{ fill: '#b6b6b6' }}
                      >
                        <use xlinkHref={`${Icons}#edit-2`} />
                      </svg>
                      Edit
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {mealData.length < 4 && (
          <button
            name={mealType}
            onClick={onRecordMealButtonClick}
            className={s.recordMealButton}
          >
            <svg width="16px" height="16px" className={s.recordMealIcon}>
              <use xlinkHref={`${Icons}#add`} />
            </svg>
            Record your meal
          </button>
        )}
      </div>
    </>
  );
};

export default DiaryTable;
