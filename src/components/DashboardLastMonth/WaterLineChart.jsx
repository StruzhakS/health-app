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
import css from './WaterLineChart.module.css';
import {
  getMonthAllStatistic,
} from 'redux/user/userOperations';

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
  const monthStatistic = useSelector(state => state.user.monthStatistic);

  const dispatch = useDispatch();

  const dataYlabel = () => {
    return monthStatistic.map(({ water }) => water);
  };

  useEffect(() => {
    dispatch(getMonthAllStatistic('2023-08'));
  }, [dispatch]);

  const average = () => {
    const waterArray = dataYlabel();
    const sum = waterArray.reduce((accum, el) => {
      return (accum += el);
    }, 0);
    return sum / waterArray.length;
  };

  const dataXlabel = () => {
    return monthStatistic.map(({ date }) => date.split('-')[2]);
  };

  const yAxisFormatter = value => {
    if (value >= 1000) {
      return `${value / 1000}L`;
    }
    return value;
  };

  const data = {
    labels: dataXlabel(),
    datasets: [
      {
        label: 'milliliters',
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
         TitleFont: {weight: 'bold' },
         titleMarginBottom: 5,
        titleAlign: 'center',
        titleSize: 30,
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
            const value = monthStatistic[dataIndex];
            return value.toString();
          },
          label: () => '',
          footer: () => 'milliliters',
        },
      },
    },
  };

  return (
    <>
      <div className={css.dashboardWaterContainer}>
        <span className={css.waterTitle}>Water</span>
        <span className={css.averageTitle}>
          Average value:
          <span className={css.waterSubtitle}> {average().toFixed(1)} ml </span>
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
