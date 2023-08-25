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
    const waterArray = dataYlabel();
    const sum = waterArray.reduce((accum, el) => {
      return (accum += el);
    }, 0);
    return sum / waterArray.length;
  };

  const yearStatistic = useSelector(state => state.user.yearStatistic);
  const dataYearXlabel = () => {
    return monthsForYear.map(month => month.slice(0, 3));
  };

  const dataYearYlabel = () => {
    return yearStatistic.map(({ calories }) => calories);
  };

  const dataYearCalories = dataYearYlabel();
  const dataByMonth = {};

  for (let i = 0; i < dataYearCalories.length; i++) {
    const monthIndex = i % 12;

    if (!dataByMonth[monthIndex]) {
      dataByMonth[monthIndex] = [];
    }

    dataByMonth[monthIndex].push(dataYearCalories[i]);
  }
  const monthlyAverages = [];

  for (const monthIndex in dataByMonth) {
    if (dataByMonth.hasOwnProperty(monthIndex)) {
      const monthData = dataByMonth[monthIndex];
      const sum = monthData.reduce((total, value) => total + value, 0);
      const average = sum / monthData.length;
      monthlyAverages.push(average.toFixed(0));
    }
  }
 

 const averageYear = () => {
    const arr = monthlyAverages;
    const sum = arr.reduce((total, num) => total + num, 0);
    const averageYearAll = sum / arr.length;
    const roundedNumber = Math.round(averageYearAll);
    const numberString = roundedNumber.toString();
    const firstFourDigits = numberString.slice(0, 5);
    const digitsOnly = firstFourDigits.replace('.', '');
    return digitsOnly;
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
        data: isMonth ? dataYlabel() : monthlyAverages,
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
            {isMonth ? average().toFixed(0) : averageYear()} cal
          </span>
        </span>
      </div>
      <div className={css.caloriesChartWrapper}>
        <div
          className={`${css.caloriesChartContainer} ${css.lineChartContainer}`}
        >
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default CaloriesLineChart;
