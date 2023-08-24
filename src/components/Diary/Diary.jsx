import React from 'react';
import s from './Diary.module.css';
// import Table from 'components/Table/Table';
// import TableMobile from 'components/Table/TableMobile';
// import { useMediaQuery } from 'react-responsive';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Icons from '../../assets/icons/symbol-defs.svg';
import Breakfast from '../../assets/img/mobile/Breakfast.png';
import Lunch from '../../assets/img/mobile/Lunch.png';
import Dinner from '../../assets/img/mobile/Dinner.png';
import Snack from '../../assets/img/mobile/Snack.png';
import { useState } from 'react';
import RecordMealModal from 'components/Modal/RecordMealModal/RecordMealModal';
import UpdateMealModal from 'components/Modal/UpdateMealModal/UpdateMealModal';
// const tableDefaultArray = Array(4).fill(null);
const Diary = () => {
  const [recordMealModalOpen, setRecordMealModalOpen] = useState(false);
  const [updateMealModalOpen, setUpdateMealModalOpen] = useState(false);

  const [selectedMeal, setSelectedMeal] = useState('');
  // const isMobile = useMediaQuery({ maxWidth: 833 });
  const breakfast = useSelector(state => state.user.breakfast);
  const lunch = useSelector(state => state.user.lunch);
  const dinner = useSelector(state => state.user.dinner);
  const snack = useSelector(state => state.user.snack);
  // const calculetedArr = [breakfast, lunch, dinner, snack];

  // console.log(breakfast);

  // const calculetedData = () => {
  //   const sendedArr = [];
  //   calculetedArr.map((el, i) => {
  //     if (!el.length) {
  //       sendedArr[i] = {};
  //     } else {
  //       el.map(
  //         ({ carbonohidrates, fat, protein }) =>
  //           (sendedArr[i] = {
  //             carbonohidrates: sendedArr[i]?.carbonohidrates
  //               ? +sendedArr[i].carbonohidrates + +carbonohidrates
  //               : +carbonohidrates,
  //             fat: sendedArr[i]?.fat ? +sendedArr[i].fat + +fat : +fat,
  //             protein: sendedArr[i]?.protein
  //               ? +sendedArr[i].protein + +protein
  //               : +protein,
  //           })
  //       );
  //     }
  //     return null;
  //   });
  //   return sendedArr;
  // };

  function calculateSum(meal) {
    let carbonohidratesSum = 0;
    let proteinSum = 0;
    let fatSum = 0;

    for (let i = 0; i < meal.length; i++) {
      carbonohidratesSum += Number(meal[i].carbonohidrates);
      proteinSum += Number(meal[i].protein);
      fatSum += Number(meal[i].fat);
    }

    return { carbonohidratesSum, proteinSum, fatSum };
  }

  // let meals = [...breakfast, ...lunch, ...dinner, ...snack];

  let sumB = calculateSum(breakfast);
  let sumL = calculateSum(lunch);
  let sumD = calculateSum(dinner);
  let sumS = calculateSum(snack);

  // let sumTotal = calculateSum(meals);
  // console.log(sumTotal);

  const onRecordMealButtonClick = evt => {
    setSelectedMeal(evt.target.name);
    setRecordMealModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const onUpdateMealButtonClick = meal => {
    setSelectedMeal(meal);
    setRecordMealModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // const newArr = calculetedArr.map(el => {
  //   return el.length > tableDefaultArray.length
  //     ? el
  //     : [
  //         ...el,
  //         ...Array(tableDefaultArray.length - el.length).fill({
  //           foodName: '',
  //           carbonohidrates: '',
  //           fat: '',
  //           protein: '',
  //         }),
  //       ];
  // });

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
    <div className={s.containerDiary}>
      <RecordMealModal
        selectedMeal={selectedMeal}
        recordMealModalOpen={recordMealModalOpen}
        setRecordMealModalOpen={setRecordMealModalOpen}
      />
      <UpdateMealModal
        selectedMeal={selectedMeal}
        updateMealModalOpen={updateMealModalOpen}
        setUpdateMealModalOpen={setUpdateMealModalOpen}
      />

      <div className={s.btnNav}>
        <Link className={s.btnDiary} to={'/mainpage'}>
          <BsArrowLeft size="1.5rem" />
        </Link>
        <h2 className={s.textBtn}>Diary</h2>
      </div>
      <div className={s.diary}>
        <div className={s.targetMeal}>
          <table>
            <thead>
              <tr>
                <td>
                  <img width="36px" height="36px" src={Breakfast} alt="meal" />
                </td>
                <td>
                  <h3 className={s.mealListItemTitle}>Breakfast</h3>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Carbonohidrates:
                    <span className={s.mealAdditionalInfoValue}>
                      {sumB.carbonohidratesSum}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Protein:
                    <span className={s.mealAdditionalInfoValue}>
                      {sumB.proteinSum}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Fat:
                    <span className={s.mealAdditionalInfoValue}>
                      {sumB.fatSum}
                    </span>
                  </p>
                </td>
              </tr>
            </thead>
          </table>
          <table>
            <tbody>
              {makeNewMealsArray(breakfast).map((el, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{el.foodName}</td>
                  <td>{el.carbonohidrates}</td>
                  <td>{el.fat}</td>
                  <td>{el.protein}</td>
                  {el.foodName && (
                    <td>
                      <button
                        onClick={() => onUpdateMealButtonClick('Breakfast')}
                      >
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
          {breakfast.length < 4 && (
            <button
              name={'Breakfast'}
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
        <div className={s.targetMeal}>
          <table>
            <thead>
              <tr>
                <td>
                  <img width="36px" height="36px" src={Dinner} alt="meal" />
                </td>
                <td>
                  <h3 className={s.mealListItemTitle}>Dinner</h3>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Carbonohidrates:
                    <span className={s.mealAdditionalInfoValue}>
                      {sumD.carbonohidratesSum}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Protein:
                    <span className={s.mealAdditionalInfoValue}>
                      {sumD.proteinSum}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Fat:
                    <span className={s.mealAdditionalInfoValue}>
                      {sumD.fatSum}
                    </span>
                  </p>
                </td>
              </tr>
            </thead>
          </table>
          <table>
            <tbody>
              {makeNewMealsArray(dinner).map((el, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{el.foodName}</td>
                  <td>{el.carbonohidrates}</td>
                  <td>{el.fat}</td>
                  <td>{el.protein}</td>
                  {el.foodName && (
                    <td>
                      <button onClick={() => onUpdateMealButtonClick('Dinner')}>
                        <svg
                          width="16px"
                          height="16px"
                          className={s.recordMealIcon}
                          style={{ fill: '#b6b6b6' }}
                        >
                          <use xlinkHref={`${Icons}#edit-2`} />
                        </svg>
                        Edit{' '}
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {dinner.length < 4 && (
            <button
              name={'Dinner'}
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
        <div className={s.targetMeal}>
          <table>
            <thead>
              <tr>
                <td>
                  <img width="36px" height="36px" src={Lunch} alt="meal" />
                </td>
                <td>
                  <h3 className={s.mealListItemTitle}>Lunch</h3>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Carbonohidrates:
                    <span className={s.mealAdditionalInfoValue}>
                      {sumL.carbonohidratesSum}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Protein:
                    <span className={s.mealAdditionalInfoValue}>
                      {sumL.proteinSum}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Fat:
                    <span className={s.mealAdditionalInfoValue}>
                      {sumL.fatSum}
                    </span>
                  </p>
                </td>
              </tr>
            </thead>
          </table>
          <table>
            <tbody>
              {makeNewMealsArray(lunch).map((el, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{el.foodName}</td>
                  <td>{el.carbonohidrates}</td>
                  <td>{el.protein}</td>
                  <td>{el.fat}</td>
                  {el.foodName && (
                    <td>
                      <button onClick={() => onUpdateMealButtonClick('Lunch')}>
                        <svg
                          width="16px"
                          height="16px"
                          className={s.recordMealIcon}
                          style={{ fill: '#b6b6b6' }}
                        >
                          <use xlinkHref={`${Icons}#edit-2`} />
                        </svg>
                        Edit{' '}
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {lunch.length < 4 && (
            <button
              name={'Lunch'}
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
        <div className={s.targetMeal}>
          <table>
            <thead>
              <tr>
                <td>
                  <img width="36px" height="36px" src={Snack} alt="meal" />
                </td>
                <td>
                  <h3 className={s.mealListItemTitle}>Snack</h3>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Carbonohidrates:
                    <span className={s.mealAdditionalInfoValue}>
                      {sumS.carbonohidratesSum}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Protein:
                    <span className={s.mealAdditionalInfoValue}>
                      {sumS.proteinSum}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Fat:
                    <span className={s.mealAdditionalInfoValue}>
                      {sumS.fatSum}
                    </span>
                  </p>
                </td>
              </tr>
            </thead>
          </table>
          <table>
            <tbody>
              {makeNewMealsArray(snack).map((el, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{el.foodName}</td>
                  <td>{el.carbonohidrates}</td>
                  <td>{el.fat}</td>
                  <td>{el.protein}</td>
                  {el.foodName && (
                    <td>
                      <button onClick={() => onUpdateMealButtonClick('Snack')}>
                        <svg
                          width="16px"
                          height="16px"
                          className={s.recordMealIcon}
                          style={{ fill: '#b6b6b6' }}
                        >
                          <use xlinkHref={`${Icons}#edit-2`} />
                        </svg>{' '}
                        Edit
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {snack.length < 4 && (
            <button
              name={'Snack'}
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
      </div>
    </div>
  );
};

export default Diary;
