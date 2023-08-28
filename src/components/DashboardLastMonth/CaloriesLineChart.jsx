import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { useSelector } from 'react-redux';

import css from './CaloriesLineChart.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CaloriesLineChart = ({ isMonth }) => {
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
  const dataYlabel = () => {
    return monthStatistic.map(({ calories }) => calories);
  };
  const dataXlabel = () => {
    return monthStatistic.map(({ date }) => date.split('-')[2]);
  };
  const average = () => {
    const caloriesArray = dataYlabel();
    const sum = caloriesArray.reduce((accum, el) => {
      return (accum += el);
    }, 0);
    return sum / caloriesArray.length;
  };

  //////Year///

  const yearStatistic = useSelector(state => state.user.yearStatistic);
  const dataYearXlabel = () => {
    return monthsForYear.map(month => month.slice(0, 3));
  };

  const monthlyCalories = {};
  const monthlyDays = {};
  const dataYear = yearStatistic;

  dataYear.forEach(entry => {
    const date = new Date(entry.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (!monthlyCalories[year]) {
      monthlyCalories[year] = {};
      monthlyDays[year] = {};
    }
    if (!monthlyCalories[year][month]) {
      monthlyCalories[year][month] = 0;
      monthlyDays[year][month] = 0;
    }
    monthlyCalories[year][month] += entry.calories;
    monthlyDays[year][month]++;
  });

  const resultCaloriesData = [];
  const resultYear = [];
  const resultMonth = [];
  for (const year in monthlyCalories) {
    for (const month in monthlyCalories[year]) {
      const averageCalories =
        monthlyCalories[year][month] / monthlyDays[year][month];

      resultCaloriesData.push({
        averageCalories: averageCalories,
      });
      resultYear.push({
        year: year,
      });
      resultMonth.push({
        month: month,
      });
    }
  }

  const dataYearYlabel = resultCaloriesData.map(
    ({ averageCalories }) => averageCalories
  );

  const averageYear = () => {
    const caloriesArray = dataYearYlabel;
    const sum = caloriesArray.reduce((accum, el) => {
      return accum + el;
    }, 0);
    return sum / caloriesArray.length;
  };

  const yAxisFormatter = value => {
    if (value >= 1000) {
      return `${value / 1000}K`;
    }
    return value;
  };

  const data = {
    labels: isMonth ? dataXlabel() : dataYearXlabel(),
    datasets: [
      {
        data: isMonth ? dataYlabel() : dataYearYlabel,
        borderColor: 'rgba(227, 255, 168, 1)',
        backgroundColor: '#E3FFA8',
        cubicInterpolationMode: 'monotone',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: 'rgba(41, 41, 40, 1)',
          drawTicks: false,
        },
        ticks: {
          color: '#B6B6B6',
          padding: 6,
        },
      },
      y: {
        grid: {
          color: 'rgba(41, 41, 40, 1)',
          drawTicks: false,
        },
        ticks: {
          color: '#B6B6B6',
          callback: yAxisFormatter,
          stepSize: 1000,
          padding: 8,
        },
        suggestedMin: 0,
        suggestedMax: 3000,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleMarginBottom: 8,
        bodyAlign: 'center',
        position: 'nearest',
        enabled: true,
        backgroundColor: '#0F0F0F',
        borderColor: 'rgba(227, 255, 168, 0.419)',
        borderWidth: 1.9,
        bodySpacing: 8,
        displayColors: false,
        padding: 15,
        caretPadding: 5,
        caretSize: 0,
        cornerRadius: 8,
        boxHeight: 108,
        footerColor: '#B6B6B6',
        footerAlign: 'center',
        titleFont: {
          family: 'Poppins',
          size: 32,
          weight: '300',
        },
        callbacks: {
          title: context => {
            const dataIndex = context[0].dataIndex;
            const value = monthStatistic[dataIndex].calories;
            return value.toString();
          },
          label: () => '',
          footer: () => 'calories',
        },
      },
    },
  };

  return (
    <>
      <div className={css.dashboardCaloriesContainer}>
        <span className={css.caloriesTitle}>Calories</span>
        <span className={css.averageCalTitle}>
          Average value:
          <span className={css.caloriesSubtitle}>
            {isMonth ? average().toFixed(0) : averageYear().toFixed(0)} cal
          </span>
        </span>
      </div>
      <div className={css.caloriesChatContainerScroll}>
        <div className={css.caloriesChartWrapper}>
          <div
            className={`${css.caloriesChartContainer} ${css.lineChartContainer}`}
          >
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaloriesLineChart;
