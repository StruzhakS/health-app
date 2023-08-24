import React, { useEffect, useState } from 'react';
import css from './DashboardLastMonth.module.css';
import { useNavigate } from 'react-router-dom';

import CaloriesLineChart from './CaloriesLineChart';
import WeightChart from './WeightChart';
import WaterLineChart from './WaterLineChart';

import sprite from '../../assets/icons/symbol-defs.svg';

import DateSelector from './DateSelect/DateSelect';
import { useDispatch } from 'react-redux';
import { getMonthAllStatistic, getYearAllStatistic } from 'redux/user/userOperations';


const DashboardLastMonth = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();

  const currentMonth = months[currentMonthIndex];

  const [isMonth, setIsMonth] = useState(true);

const dispatch = useDispatch();

useEffect(() => {
     dispatch(getMonthAllStatistic('2023-08'));
   }, [dispatch]);

useEffect(() => {
    dispatch(getYearAllStatistic("2022"))
  }, [dispatch])
  
  const navigate = useNavigate();
  const onButtonClick = evt => {
    evt.preventDefault();
    navigate('/');
  };

  return (
    <section className={css.dashboardSection}>
      <div className={css.dashboardButtonContainer}>
        <button className={css.dashboardBtnLeftArrow} onClick={onButtonClick}>
          <svg className={css.dashboardSvg}>
            <use
              className={css.dashboardSvgLink}
              xlinkHref={`${sprite}#arrow-right`}
            ></use>
          </svg>
        </button>
        <div>
          <DateSelector setIsMonth={setIsMonth} />
        </div>
        <div className={css.monthSlect}>{currentMonth}</div>
      </div>
      <div className={css.dashboardDesctopGraph}>
        <div className={css.gridItem1}>
          <CaloriesLineChart isMonth={isMonth} />
        </div>
        <div className={css.gridItem2}>
          <WaterLineChart  isMonth={isMonth} />
        </div>
        <div className={css.gridItem3}>
          <WeightChart isMonth={isMonth} />
        </div>
      </div>
    </section>
  );
};

export default DashboardLastMonth;
