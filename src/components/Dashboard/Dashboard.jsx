import React from 'react';
import css from './Dashboard.module.css';

import LineChart from './DashboarLineChart';
import sprite from '../../assets/icons/symbol-defs.svg';
// import { useState } from 'react';

const Dashboard = () => {
  return (
    <section className={css.dashboardSection}>
     
      <div className={css.dashboardButtonContainer}>
        <button className={css.dashboardBtnLeftArrow}>
          <svg className={css.dashboardSvg}>
            <use
              className={css.dashboardSvgLink}
              xlinkHref={`${sprite}#arrow-right`}
            ></use>
          </svg>
        </button>
        <button className={css.dashboardButton}>Last Month </button>
        <button >
          {' '}
          <svg className={css.dashboardArrowDownSvg}>
            <use
              className={css.dashboardArrowDownSvgLink}
              xlinkHref={`${sprite}#arrow-down`}
            ></use>
          </svg>
        </button>
      </div>
      <div className={css.dashboardCaloriesContainer }>
        <span>Calories</span>
        <span>Average value:</span>
          </div>
          <div>
              <LineChart/>
          </div>
    </section>
  );
};

export default Dashboard;
