import React from 'react';
import css from './WeightChart.module.css'

const WeightChart = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

 
  const weightSeries = [70, 69, 68, 71, 72, 73, 70, 69, 68, 67, 70, 71, 72, 73, 70, 69, 68, 67, 70, 71, 72, 73, 70, 69, 68, 67, 70, 71, 72, 73, 70];

  return (
    <div>
      <h3>Weight</h3>
      <div className={css.chartContainer}>
        <div className={css.weightLine}>
          {weightSeries.map((value, index) => (
            <div key={index} className={css.weightPoint}>
              {value}
            </div>
          ))}
        </div>
        <div className={css.dayLine}>
          {days.map(day => (
            <div key={day} className={css.dayPoint}>
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeightChart;