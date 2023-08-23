import React, { useEffect } from 'react';
import css from './WeightChart.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getMonthAllStatistic } from 'redux/user/userOperations';

const WeightChart = () => {
  const monthStatistic = useSelector(state => state.user.monthStatistic);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMonthAllStatistic('2023-08'));
  }, [dispatch]);

  const dataWeightlabel = () => {
    return monthStatistic.map(({ weight, id }) => weight);
  };
  

  const average = () => {
    const weightArray = dataWeightlabel();
    const sum = weightArray.reduce((accum, el) => {
      return (accum += el);
    }, 0);
    return sum / weightArray.length;
  };

  const dataDaylabel = () => {
    return monthStatistic.map(({ date }) => date.split('-')[2]);
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
              {dataWeightlabel().map((weight, id) => (
                <div key={id} className={css.weightPoint}>
                  {weight}
                </div>
              ))}
            </div>
          </div>
          <div className={css.chartContainer}>
            <div className={css.dayLine}>
              {dataDaylabel().map((date, id) => (
                <div key={id} className={css.dayPoint}>
                  {date}
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
