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
  //////Year///////////////

  const yearStatistic = useSelector(state => state.user.yearStatistic);

  const dataYearMonthLabel = monthsForYear;

  const monthlyWeight = {};
  const monthlyDays = {};
  const dataYear = yearStatistic;

  dataYear.forEach(entry => {
    const date = new Date(entry.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (!monthlyWeight[year]) {
      monthlyWeight[year] = {};
      monthlyDays[year] = {};
    }
    if (!monthlyWeight[year][month]) {
      monthlyWeight[year][month] = 0;
      monthlyDays[year][month] = 0;
    }
    monthlyWeight[year][month] += entry.weight;
    monthlyDays[year][month]++;
  });

  const resultWeightData = [];
  for (const year in monthlyWeight) {
    for (const month in monthlyWeight[year]) {
      const averageWeight =
        monthlyWeight[year][month] / monthlyDays[year][month];

      resultWeightData.push({
        averageWeight: averageWeight,
      });
    }
  }

  const dataYearWeightLabel = resultWeightData.map(({ averageWeight }) =>
    Number(averageWeight.toFixed(0))
  );
 const averageYear = () => {
    const weightArray = dataYearWeightLabel;
    const sum = weightArray.reduce((accum, el) => {
      return accum + el;
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
            {isMonth ? average().toFixed(0) : averageYear().toFixed(0)}kg
          </span>
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
                {dataYearWeightLabel.map((weight, id) => (
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
