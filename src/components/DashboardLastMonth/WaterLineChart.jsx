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
import {  useSelector } from 'react-redux';
import css from './WaterLineChart.module.css';

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

 

  const dataYlabel = () => {
    return monthStatistic.map(({ water }) => water);
  };



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
        
        data: dataYlabel(),
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
        suggestedMax: 2000,
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
        borderColor: 'rgba(227, 255, 168, 0.20)',
        borderWidth: 1,
        bodySpacing: 8,
        displayColors: false,
        padding: 15,
        caretPadding: 5,
        caretSize: 0,
        cornerRadius: 8,
        boxHeight: 108,
         footerColor: "#B6B6B6",
        titleFont: {
          family: 'Poppins',
          size: 32,
          weight: '300',
        },
        callbacks: {
          title: context => {
            const dataIndex = context[0].dataIndex;
            const value = monthStatistic[dataIndex].water;
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
