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

const WaterLineChart = ({ isMonth }) => {
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
    return monthStatistic.map(({ water }) => water);
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
    return yearStatistic.map(({ water }) => water);
  };

  const dataYearWater = dataYearYlabel();
  const dataByMonth = {};

  for (let i = 0; i < dataYearWater.length; i++) {
    const monthIndex = i % 12;
    if (!dataByMonth[monthIndex]) {
      dataByMonth[monthIndex] = [];
    }
    dataByMonth[monthIndex].push(dataYearWater[i]);
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
      return `${value / 1000}L`;
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
          <span className={css.waterSubtitle}>
            {' '}
            {isMonth ? average().toFixed(0) : averageYear()} ml
          </span>
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
