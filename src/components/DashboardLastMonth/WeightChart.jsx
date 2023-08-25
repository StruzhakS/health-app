import React from 'react';
import css from './WeightChart.module.css';
import { useSelector } from 'react-redux';

const WeightChart = ({ isMonth }) => {
  const monthsForYear = [
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

  const monthStatistic = useSelector(state => state.user.monthStatistic);
  const dataWeightlabel = monthStatistic.map(({ weight }) => weight);
  const dataDayLabel = monthStatistic.map(({ date }) => date.split('-')[2]);
  const average = () => {
    const weightArray = dataWeightlabel;
    const sum = weightArray.reduce((accum, el) => {
      return (accum += el);
    }, 0);
    return sum / weightArray.length;
  };

  const yearStatistic = useSelector(state => state.user.yearStatistic);

  const dataYearMonthLabel = monthsForYear;
  const dataYearWeightLabel = yearStatistic.map(({ weight }) => weight);
console.log(dataYearWeightLabel);
 const dataYearWeight = dataYearWeightLabel;
  const dataByMonth = {};

  for (let i = 0; i < dataYearWeight.length; i++) {
    const monthIndex = i % 12;
    if (!dataByMonth[monthIndex]) {
      dataByMonth[monthIndex] = [];
    }
    dataByMonth[monthIndex].push(dataYearWeight[i]);
  }
  // console.log(dataByMonth);
  const monthlyAverages = [];

  for (const monthIndex in dataByMonth) {
    if (dataByMonth.hasOwnProperty(monthIndex)) {
      const monthData = dataByMonth[monthIndex];
      const sum = monthData.reduce((total, value) => total + value, 0);
      const average = sum / monthData.length;
      monthlyAverages.push(average.toFixed(0));
    }
  }





  return (
    <>
      <div className={css.titleContainer}>
        <span className={css.titleWeight}>Weight</span>
        <span className={css.titleAverage}>
          Average value:
          <span className={css.weightSubtitle}>{average().toFixed(0)} kg</span>
        </span>
      </div>
      <div className={css.weighChartContainerScroll}>
        {isMonth ? (
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
                {dataDayLabel.map((label, id) => (
                  <div key={id} className={css.dayPoint}>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={css.weighChartContainer}>
            <div className={css.chartContainer}>
              <div className={css.yearWeightLine}>
                {monthlyAverages.map((weight, id) => (
                  <div key={id} className={css.yearWeightPoint}>
                    {weight}
                  </div>
                ))}
              </div>
            </div>
            <div className={css.chartContainer}>
              <div className={css.yearDayLine}>
                {dataYearMonthLabel.map((label, id) => (
                  <div key={id} className={css.yearDayPoint}>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WeightChart;
