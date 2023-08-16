import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useMediaQuery } from 'react-responsive';

const LineChart = () => {
  const values = [
    2.0, 2.5, 1.6, 1.3, 1.4, 1.6, 1.9, 2.1, 2.5, 2.8, 2.1, 1.2, 1.5, 1.7,
  ];
  const maxValue = Math.max(...values);
  const maxIndex = values.indexOf(maxValue) + 1;
  const isMobile = useMediaQuery({ maxWidth: 320 });
  const data = {
    xAxis: {
      type: 'category',
      data: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
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
    },
      yAxis: {
        responsive: false,
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
        symbolSize: (value, params) =>
          params.dataIndex + 1 === maxIndex ? 10 : 0,
        smooth: true,

        emphasis: {
          itemStyle: {
            color: '#ff0000',
          },
        },
        markPoint: {
          data: [{ type: 'max', name: 'Max Value' }],
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: '715px',
        maxWidth: isMobile ? '100%' : 'none',
        height: '40%',
        overflowX: isMobile ? 'scroll' : 'hidden',
      }}
    >
      <ReactECharts option={data} />
    </div>
  );
};

export default LineChart;
