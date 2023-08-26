import React from 'react';
import s from './Table.module.css';
import Icons from '../../assets/icons/symbol-defs.svg';
import { useMediaQuery } from 'react-responsive';
import * as mob from 'assets/img/mobile';

const DiaryTable = ({
  mealType,
  mealData,
  onRecordMealButtonClick,
  onUpdateMealButtonClick,
  setFoodName,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 833 });

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

  const onEditButtonClick = name => {
    setFoodName(name);
    onUpdateMealButtonClick(mealType);
  };

  return (
    <>
      <div className={s.targetMeal}>
        <table>
          <thead>
            <tr>
              <td>
                <div className={s.mealTypeWrapper}>
                  <img
                    width="36px"
                    height="36px"
                    src={mob[mealType]}
                    alt="meal"
                  />

                  <h3 className={s.mealListItemTitle}>{mealType}</h3>
                  <div className={s.descriptionWrap}>
                    <p className={s.mealAdditionalInfoDescription}>
                      Carbonohidrates:
                      <span className={s.mealAdditionalInfoValue}>
                        {sum.carbonohidratesSum}
                      </span>
                    </p>

                    <p className={s.mealAdditionalInfoDescription}>
                      Protein:
                      <span className={s.mealAdditionalInfoValue}>
                        {sum.proteinSum}
                      </span>
                    </p>

                    <p className={s.mealAdditionalInfoDescription}>
                      Fat:
                      <span className={s.mealAdditionalInfoValue}>
                        {sum.fatSum}
                      </span>
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </thead>
        </table>
        <table className={s.table}>
          <tbody>
            {makeNewMealsArray(mealData).map((el, i) => (
              <>
                <tr key={i}>
                  <td className={s.mealWrap}>
                    <div className={s.mealNameWrap}>
                      <p>{i + 1}</p>
                      <p className={s.foodName}>{el.foodName}</p>
                      {el.foodName && isMobile && (
                        <button onClick={() => onEditButtonClick(el.foodName)}>
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
                      )}
                    </div>
                    <div className={s.mealNutritionalWrap}>
                      {Object.keys(el)
                        .slice(1)
                        .map(
                          key =>
                            el.foodName && (
                              <p key={key}>
                                {isMobile
                                  ? `${key
                                      .slice(0, 1)
                                      .toUpperCase()}${key.slice(1, 4)}.: ${
                                      el[key]
                                    }`
                                  : el[key]}
                              </p>
                            )
                        )}

                      {el.foodName && !isMobile && (
                        <button onClick={() => onEditButtonClick(el.foodName)}>
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
                      )}
                    </div>
                  </td>
                </tr>
              </>
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
