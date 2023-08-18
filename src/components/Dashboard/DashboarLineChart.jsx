 import React from 'react';
import ReactECharts from 'echarts-for-react';
import recommendedFood from '../../recomended-food';
import css from './DashboardLineChart.module.css';

const LineChart = () => {
  const values = recommendedFood.map(item => (item.calories * 10));
  console.log(values);
  const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum);
  const average = Math.round(sum / values.length);
  console.log(average);

  


  const data = {
    xAxis: {
      type: 'category',
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
      axisLine: {
        lineStyle: {
          color: '#292928',
          width: 0.5,
          type: 'solid',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#B6B6B6',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(41, 41, 40, 1)',
        },
      },
    },
    yAxis: {
    type: 'value',
    color: '#B6B6B6',
     axisLabel: {
        formatter: '{value}K', 
      },
    axisLine: {
      lineStyle: {
        color: 'rgba(182, 182, 182, 1)',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(41, 41, 40, 1)',
      },
    },
    interval: 1000, 
    min: 0,
    max: 3000, 
  },
  series: [
    {
      data: values, 
        type: 'line',
      symbol: 'circle',
      itemStyle: {
        color: 'rgba(227, 255, 168, 1)',
        width: 1,
      },
      // symbolSize: (value, params) =>
      //   params.dataIndex + 1 === maxIndex ? 10 : 0,
      smooth: true,
      lineStyle: {
        color: 'rgba(227, 255, 168, 1)',
      },
        emphasis: {
          itemStyle: {
            color: 'rgba(227, 255, 168, 1)',
          },
        },
       markPoint: {
  data: [
    {
      type: 'max',
      name: 'calories',
      value: average,
      label: {
        show: true,
        position: 'inside',
        formatter: `1750 {b}`,
        fontSize: 12,
        color: 'white',
      },
    },
  ],
  symbol: 'roundRect',
  symbolSize: [98, 70],
  symbolOffset: [50, '-60%'],
  itemStyle: {
    color: '#0F0F0F',
    borderRadius: 12,
    shadowBlur: 14,
    shadowColor: 'rgba(227, 255, 168, 0.20)',
  },
},
      },
    ],
  };
  
 
  return  (
   <div className={css.lineChartContainer}>
      
        <div className={css.chartScrollContainerStyle}>
          <ReactECharts option={data}  />
        </div>
      
    </div>
  );
};

export default LineChart;
