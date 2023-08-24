import React from 'react';
import s from './Diary.module.css';
import Table from 'components/Table/Table';
import TableMobile from 'components/Table/TableMobile';
import { useMediaQuery } from 'react-responsive';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Icons from '../../assets/icons/symbol-defs.svg';
import Breakfast from '../../assets/img/mobile/Breakfast.png';
import Lunch from '../../assets/img/mobile/Lunch.png';
import Dinner from '../../assets/img/mobile/Dinner.png';
import Snack from '../../assets/img/mobile/Snack.png';
import { useState } from 'react';
import RecordMealModal from 'components/Modal/RecordMealModal/RecordMealModal';
const tableDefaultArray = Array(4).fill(null);
const Diary = () => {
  const [recordMealModalOpen, setRecordMealModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState('');
  const isMobile = useMediaQuery({ maxWidth: 833 });
  const breakfast = useSelector(state => state.user.breakfast);
  const lunch = useSelector(state => state.user.lunch);
  const dinner = useSelector(state => state.user.dinner);
  const snack = useSelector(state => state.user.snack);
  const calculetedArr = [breakfast, lunch, dinner, snack];
  const calculetedData = () => {
    const sendedArr = [];
    calculetedArr.map((el, i) => {
      if (!el.length) {
        sendedArr[i] = {};
      } else {
        el.map(
          ({ carbonohidrates, fat, protein }) =>
            (sendedArr[i] = {
              carbonohidrates: sendedArr[i]?.carbonohidrates
                ? +sendedArr[i].carbonohidrates + +carbonohidrates
                : +carbonohidrates,
              fat: sendedArr[i]?.fat ? +sendedArr[i].fat + +fat : +fat,
              protein: sendedArr[i]?.protein
                ? +sendedArr[i].protein + +protein
                : +protein,
            })
        );
      }
      return null;
    });
    return sendedArr;
  };

  let carbonohidatesSumB = 0;
  for (let i = 0; i < breakfast.length; i++) {
    carbonohidatesSumB += Number(breakfast[i].carbonohidrates);
  }

  let proteinSumB = 0;
  for (let i = 0; i < breakfast.length; i++) {
    proteinSumB += Number(breakfast[i].protein);
  }

  let fatSumB = 0;
  for (let i = 0; i < breakfast.length; i++) {
    fatSumB += Number(breakfast[i].fat);
  }

  let carbonohidatesSumD = 0;
  for (let i = 0; i < dinner.length; i++) {
    carbonohidatesSumD += Number(dinner[i].carbonohidrates);
  }

  let proteinSumD = 0;
  for (let i = 0; i < dinner.length; i++) {
    proteinSumD += Number(dinner[i].protein);
  }

  let fatSumD = 0;
  for (let i = 0; i < dinner.length; i++) {
    fatSumD += Number(dinner[i].fat);
  }

  let carbonohidatesSumL = 0;
  for (let i = 0; i < lunch.length; i++) {
    carbonohidatesSumL += Number(lunch[i].carbonohidrates);
  }

  let proteinSumL = 0;
  for (let i = 0; i < lunch.length; i++) {
    proteinSumL += Number(lunch[i].protein);
  }

  let fatSumL = 0;
  for (let i = 0; i < lunch.length; i++) {
    fatSumL += Number(lunch[i].fat);
  }

  let carbonohidatesSumS = 0;
  for (let i = 0; i < snack.length; i++) {
    carbonohidatesSumS += Number(snack[i].carbonohidrates);
  }

  let proteinSumS = 0;
  for (let i = 0; i < snack.length; i++) {
    proteinSumS += Number(snack[i].protein);
  }

  let fatSumS = 0;
  for (let i = 0; i < snack.length; i++) {
    fatSumS += Number(snack[i].fat);
  }

  const onRecordMealButtonClick = evt => {
    setSelectedMeal(evt.target.name);
    setRecordMealModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const newArr = calculetedArr.map(el => {
    return el.length > tableDefaultArray.length
      ? el
      : [
          ...el,
          ...Array(tableDefaultArray.length - el.length).fill({
            foodName: '',
            carbonohidrates: '',
            fat: '',
            protein: '',
          }),
        ];
  });

  return (
    <div className={s.containerDiary}>
      <RecordMealModal
        selectedMeal={selectedMeal}
        recordMealModalOpen={recordMealModalOpen}
        setRecordMealModalOpen={setRecordMealModalOpen}
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
                      {carbonohidatesSumB}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Protein:
                    <span className={s.mealAdditionalInfoValue}>
                      {proteinSumB}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Fat:
                    <span className={s.mealAdditionalInfoValue}>{fatSumB}</span>
                  </p>
                </td>
              </tr>
            </thead>
          </table>
          <table>
            <tbody>
              {breakfast.map((el, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{el.foodName}</td>
                  <td>{+el.carbonohidrates}</td>
                  <td>{+el.fat}</td>
                  <td>{+el.protein}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
                      {carbonohidatesSumD}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Protein:
                    <span className={s.mealAdditionalInfoValue}>
                      {proteinSumD}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Fat:
                    <span className={s.mealAdditionalInfoValue}>{fatSumD}</span>
                  </p>
                </td>
              </tr>
            </thead>
          </table>
          <table>
            <tbody>
              {dinner.map((el, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{el.foodName}</td>
                  <td>{+el.carbonohidrates}</td>
                  <td>{+el.fat}</td>
                  <td>{+el.protein}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
                      {carbonohidatesSumL}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Protein:
                    <span className={s.mealAdditionalInfoValue}>
                      {proteinSumL}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Fat:
                    <span className={s.mealAdditionalInfoValue}>{fatSumL}</span>
                  </p>
                </td>
              </tr>
            </thead>
          </table>
          <table>
            <tbody>
              {lunch.map((el, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{el.foodName}</td>
                  <td>{+el.carbonohidrates}</td>
                  <td>{+el.fat}</td>
                  <td>{+el.protein}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
                      {carbonohidatesSumS}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Protein:
                    <span className={s.mealAdditionalInfoValue}>
                      {proteinSumS}
                    </span>
                  </p>
                </td>
                <td>
                  <p className={s.mealAdditionalInfoDescription}>
                    Fat:
                    <span className={s.mealAdditionalInfoValue}>{fatSumS}</span>
                  </p>
                </td>
              </tr>
            </thead>
          </table>
          <table>
            <tbody>
              {snack.map((el, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{el.foodName}</td>
                  <td>{+el.carbonohidrates}</td>
                  <td>{+el.fat}</td>
                  <td>{+el.protein}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
        </div>
      </div>
    </div>
  );
};

export default Diary;
