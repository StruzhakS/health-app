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
import recommendedFood from '../../recomended-food';
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
  const values = recommendedFood.map(item => item.calories * 10);

  const sum = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const average = Math.round(sum / values.length);

  const yAxisFormatter = value => {
    if (value >= 1000) {
      return `${value / 1000}K`;
    }
    return value;
  };

  const data = {
    labels: Array.from({ length: 31 }, (_, index) => (index + 1).toString()),
    datasets: [
      {
        label: 'calories',
        data: values,
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
        titleMarginBottom: 20,
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

        bodySpacing: 6,
        displayColors: false,
        padding: 10,
        caretPadding: 5,
        caretSize: 0,
        cornerRadius: 8,
        boxHeight: 98,
        callbacks: {
          title: context => {
            const dataIndex = context[0].dataIndex;
            const value = values[dataIndex];
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
          <span className={css.caloriesSubtitle}> {average} cal</span>
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
