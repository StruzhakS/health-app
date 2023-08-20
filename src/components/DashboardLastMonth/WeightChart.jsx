import React from 'react';
import css from './WeightChart.module.css';

const WeightChart = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const weightSeries = [
    70, 69, 68, 71, 72, 73, 70, 69, 68, 67, 70, 71, 72, 73, 70, 69, 68, 67, 70,
    71, 72, 73, 70, 69, 68, 67, 70, 71, 72.4, 73.1, 70,
  ];

  return (
    <>
      <div className={css.titleContainer}>
        <span className={css.titleWeight}>Weight</span>
        <span className={css.titleAverage}>Average value: 68 kg</span>
      </div>
      <div className={css.weighChartContainerScroll}>
        <div className={css.weighChartContainer}>
          <div className={css.chartContainer}>
            <div className={css.weightLine}>
              {weightSeries.map((value, index) => (
                <div key={index} className={css.weightPoint}>
                  {value}
                </div>
              ))}
            </div>
          </div>
          <div className={css.chartContainer}>
            <div className={css.dayLine}>
              {days.map(day => (
                <div key={day} className={css.dayPoint}>
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeightChart;
