 import React from 'react';
import ReactECharts from 'echarts-for-react';

import css from './DashboardLineChart.module.css';

const LineChart = () => {
  const values = [
    1.0, 1.5, 1.6, 1.3, 1.4, 1.6, 1.2, 1.1, 1.5, 1.8, 1.1, 1.2, 1.5, 1.7, 1.0,
    1.5, 1.6, 1.3, 1.4, 1.6, 1.2, 1.1, 1.5, 1.8, 1.1, 1.2, 1.5, 1.7, 1.2, 1.5,
    1.7,
  ];
  const maxValue = Math.max(...values);
  const maxIndex = values.indexOf(maxValue) + 1;
  const chartWidth = '715px';
  const chartHeight = '400px';

  const chartContainerStyle = {
    width: chartWidth,
    height: chartHeight,
    position: 'relative',
    overflow: 'hidden', // Відключаємо прокрутку на контейнері
  };

  const chartScrollContainerStyle = {
    width: chartWidth,
    height: chartHeight,
    overflowY: 'scroll', // Увімкнути прокрутку для графіка
  };

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

      boundaryGap: true,
      data: ['1K', '2K', '3K'],
      interval: 1,
      min: 0,
      max: 3,
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
        symbolSize: (value, params) =>
          params.dataIndex + 1 === maxIndex ? 10 : 0,
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
              name: 'Max Value',
              value: maxValue,
              formatter: 'Max Value: {value|0.0a}',
            },
          ],
          symbol: 'rect',
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
      <div style={chartContainerStyle}>
        <div style={chartScrollContainerStyle}>
          <ReactECharts option={data} opts={{ width: chartWidth, height: chartHeight }} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
