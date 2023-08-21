import React, { useState } from 'react';
import sprite from '../../../assets/icons/symbol-defs.svg';
import s from './DateSelect.module.css';

const DateSelector = () => {
  const [selectedOption, setSelectedOption] = useState('lastMonth');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={s.selectBox}>
      <select
        className={s.selectBox}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option className={s.lastYearBtn} value="lastMonth">Last Month</option>
        <option   className={s.lastYearBtn} value="lastYear">Last Year</option>
      </select>
    </div>
  );
};

export default DateSelector;


// <div class="select_box">
//  <select>
//    <option>Test This Select</option>
//    <option>Test This Select</option>
//  </select>
// </div>