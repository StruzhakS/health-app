import React, { useEffect, useState } from 'react';
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

import { useDispatch } from 'react-redux';
import recommendedFood from '../../recomended-food';
import css from './WaterLineChart.module.css';
import { getDefaultWaterAndCalories } from 'redux/user/userOperations';

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


const WaterLineChart = () => {

 const [chartData, setChartData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDefaultWaterAndCalories()).then((response) => {
      const waterData = response.payload.defaultWater;
      setChartData(waterData);
    });
  }, [dispatch]);

  const values = chartData; 
console.log(values);



  // const values = recommendedFood.map(item => item.calories * 10);
  

  const sum = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = Math.round(sum / values.length);
  const yAxisFormatter = value => {
    if (value >= 1000) {
      return `${value / 1000}L`;
    }
    return value;
  };

  const data = {
    labels: Array.from({ length: 31 }, (_, index) => (index + 1).toString()),
    datasets: [
      {
        label: 'milliliters',
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
        enabled: true,
      },
    },
  };

  return (
    <>
      <div className={css.dashboardWaterContainer}>
        <span className={css.waterTitle}>Water</span>
        <span className={css.averageTitle}>
          Average value: <span className={css.waterSubtitle} > {average} ml </span>
        </span>
      </div>

      <div className={css.chartWrapper}>
        <div className={`${css.chartContainer} ${css.waterLineChartContainer}`}>
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default WaterLineChart;
