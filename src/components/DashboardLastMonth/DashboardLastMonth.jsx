import React from 'react';
import css from './DashboardLastMonth.module.css';
import { useNavigate } from 'react-router-dom';

import CaloriesLineChart from './CaloriesLineChart';
import WeightChart from './WeightChart';
import WaterLineChart from './WaterLineChart';

import sprite from '../../assets/icons/symbol-defs.svg';

import DateSelector from './DateSelect/DateSelect';
// import { useState } from 'react';

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

  // console.log('Current month:', currentMonth);

  const navigate = useNavigate();
  const onButtonClick = evt => {
    evt.preventDefault();
    navigate('/mainpage');
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
          <DateSelector />
        </div>
        <div className={css.monthSlect}>{currentMonth}</div>
      </div>

      <div>
        <CaloriesLineChart />
        <WaterLineChart />
        <WeightChart />
      </div>
    </section>
  );
};

export default DashboardLastMonth;
