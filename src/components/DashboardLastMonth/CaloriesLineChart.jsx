import React, { useEffect } from 'react';
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

import { useDispatch, useSelector } from 'react-redux';
import { getMonthAllStatistic } from 'redux/user/userOperations';

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

const CaloriesLineChart = () => {
  const monthStatistic = useSelector(state => state.user.monthStatistic);

  const dispatch = useDispatch();

  const dataYlabel = () => {
    return monthStatistic.map(({ calories}) => calories)};

  useEffect(() => {
    dispatch(getMonthAllStatistic('2023-08'));
  }, [dispatch]);

  const average = () => {
    const caloriesArray = dataYlabel();
    const sum = caloriesArray.reduce((accum, el) => {
      return (accum += el);
    }, 0);
    return sum / caloriesArray.length;
  };

  const dataXlabel = () => {
    return monthStatistic.map(({ date }) => date.split('-')[2]);
  };
  
  const yAxisFormatter = value => {
    if (value >= 1000) {
      return `${value / 1000}K`;
    }
    return value;
  };

  const data = {
    labels: dataXlabel(),
    datasets: [
      {
        label: 'calories',
        data: dataYlabel(),
        borderColor: 'rgba(227, 255, 168, 1)',
        backgroundColor: 'rgba(227, 255, 168, 0.2)',
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
        suggestedMax: 2000,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleMarginBottom: 5,
        titleAlign: 'center',
        position: 'nearest',
        enabled: true,
        bodyFontFamily: 'Poppins',
        bodyFontSize: 32,
        bodyFontColor: '#FFF',
        bodyAlign: 'center',
        backgroundColor: '#0F0F0F',
        borderColor: 'rgba(227, 255, 168, 0.20)',
        borderWidth: 1,
        bodySpacing: 8,
        displayColors: false,
        padding: 10,
        caretPadding: 5,
        caretSize: 0,
        cornerRadius: 8,
        boxHeight: 98,
       
        callbacks: {
          titleFont: "Poppins",
          Titlefont: { size: 40 },
          title: context => {
            const dataIndex = context[0].dataIndex;
            const value = monthStatistic[dataIndex];
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
          <span className={css.caloriesSubtitle}> {average().toFixed(1)} cal</span>
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
