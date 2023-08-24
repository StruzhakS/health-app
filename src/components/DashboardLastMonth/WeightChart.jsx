import React from 'react';
import css from './WeightChart.module.css';
import { useSelector } from 'react-redux';

const WeightChart = ({ isMonth }) => {
  const yearStatistic = useSelector(state => state.user.yearStatistic);
  const monthStatistic = useSelector(state => state.user.monthStatistic);

  const dataWeightlabel = isMonth
    ? monthStatistic.map(({ weight }) => weight)
    : yearStatistic.map(({ weight }) => weight);

  const dataLabel = isMonth
    ? monthStatistic.map(({ date }) => date.split('-')[2])
    : yearStatistic.map(({ date }) =>
        new Date(date).toLocaleString('default', { month: 'long' })
      );

  const average = () => {
    const weightArray = dataWeightlabel;
    const sum = weightArray.reduce((accum, el) => {
      return (accum += el);
    }, 0);
    return sum / weightArray.length;
  };

  return (
    <>
      <div className={css.titleContainer}>
        <span className={css.titleWeight}>Weight</span>
        <span className={css.titleAverage}>
          Average value:
          <span className={css.weightSubtitle}>
            {average().toFixed(1)} kg
          </span>
        </span>
      </div>
      <div className={css.weighChartContainerScroll}>
        <div className={css.weighChartContainer}>
          <div className={css.chartContainer}>
            <div className={css.weightLine}>
              {dataWeightlabel.map((weight, id) => (
                <div key={id} className={css.weightPoint}>
                  {weight}
                </div>
              ))}
            </div>
          </div>
          <div className={css.chartContainer}>
            <div className={css.dayLine}>
              {dataLabel.map((label, id) => (
                <div key={id} className={css.dayPoint}>
                  {label}
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
