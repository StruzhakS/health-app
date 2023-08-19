 import React from 'react';
import css from './Dashboard.module.css';

import LineChart from './DashboarLineChart';
import WaterLineChart from './WaterLineChart';
import WeightChart from './WeightChart';

import sprite from '../../assets/icons/symbol-defs.svg';
import { useState } from 'react';

const Dashboard = () => {
  
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

   const [selectedOption, setSelectedOption] = useState('Last Month');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
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
        


          <select
          className={css.dashboardSelect}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="Last Month">Last Month</option>
          <option value="Last Year">Last Year</option>
        </select>
        
        <button>
          <svg className={css.dashboardArrowDownSvg}>
            <use
              className={css.dashboardArrowDownSvgLink}
              xlinkHref={`${sprite}#arrow-down`}
            ></use>
          </svg>
        </button>   
        
   
       
        <select className={css.monthSlect}>
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
     
      <div>
        <LineChart />
        <WaterLineChart />
        <WeightChart/>
      </div>
    </section>
  );
};

export default Dashboard;