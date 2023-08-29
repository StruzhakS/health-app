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
  /////////////Year/////////////////

  const yearStatistic = useSelector(state => state.user.yearStatistic);

  const dataYearXlabel = () => {
    return monthsForYear.map(month => month.slice(0, 3));
  };

  const monthlyWater = {};
  const monthlyDays = {};
  const dataYear = yearStatistic;

  dataYear.forEach(entry => {
    const date = new Date(entry.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (!monthlyWater[year]) {
      monthlyWater[year] = {};
      monthlyDays[year] = {};
    }

    if (!monthlyWater[year][month]) {
      monthlyWater[year][month] = 0;
      monthlyDays[year][month] = 0;
    }
    monthlyWater[year][month] += entry.water;
    monthlyDays[year][month]++;
  });

  const resultWaterData = [];
  for (const year in monthlyWater) {
    for (const month in monthlyWater[year]) {
      const averageWater = monthlyWater[year][month] / monthlyDays[year][month];
      resultWaterData.push({
        averageWater: averageWater,
      });
    }
  }

  const dataYearYlabel = resultWaterData.map(
    ({ averageWater }) => averageWater
  );
  const averageYear = () => {
    const waterArray = dataYearYlabel;
    const sum = waterArray.reduce((accum, el) => {
      return accum + el;
    }, 0);
    return sum / waterArray.length;
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
            {isMonth ? average().toFixed(0) : averageYear().toFixed(0)} ml
          </span>
        </span>
      </div>
      <div className={css.waterChartContainerScroll}>
        <div className={css.chartWrapper}>
          <div
            className={`${css.chartContainer} ${css.waterLineChartContainer}`}
          >
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WaterLineChart;
