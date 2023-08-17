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
        itemStyle: {
          color:'rgba(227, 255, 168, 1)',
        },
        symbolSize: (value, params) =>
          params.dataIndex + 1 === maxIndex ? 10 : 0,
        smooth: true,
        lineStyle: {
        color: 'rgba(227, 255, 168, 1)', // Оновлений колір лінії
      },

        emphasis: {
        itemStyle: {
          color: 'rgba(227, 255, 168, 1)',
        },
      },
         markPoint: {
        data: [{ type: 'max', name: 'Max Value' }],
        symbol: 'rect', // Змінено на 'rect' для квадрата
        symbolSize: [104, 92], // Розміри квадрата
        symbolOffset: [-1, '-55%'], // Зміщення, щоб символ був зверху середини маркера

        itemStyle: {
          color: '#0F0F0F', // Колір квадрата
          borderRadius: 8, // Радіус кутів
          shadowBlur: 14, // Розмиття тіні
          shadowColor: 'rgba(227, 255, 168, 0.20)', // Колір тіні
        },
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

















// import React, { useState } from 'react';

// const LineChart = () => {
//   const data = [10, 25, 15, 30, 20];
//   const maxY = Math.max(...data);
//   const height = 300;

//   const points = data.map((value, index) => {
//     const x = index * 50;
//     const y = height - (value / maxY) * height;
//     return `${x},${y}`;
//   });

//   const polylinePoints = points.join(' ');

//   return (
//     <svg width="400" height={height + 20}>
//       {/* Вертикальні лінії на осі X */}
//       {data.map((value, index) => (
//         <line
//           key={`vertical-${index}`}
//           x1={index * 50}
//           y1={0}
//           x2={index * 50}
//           y2={height}
//           stroke="gray"
//           strokeWidth="1"
//         />
//       ))}

//       {/* Горизонтальні лінії на осі Y */}
//       {Array.from({ length: 6 }).map((_, index) => (
//         <line
//           key={`horizontal-${index}`}
//           x1={0}
//           y1={height - (index * height) / 5}
//           x2={400}
//           y2={height - (index * height) / 5}
//           stroke="gray"
//           strokeWidth="1"
//         />
//       ))}

//       {/* Лінія графіка */}
//       <polyline points={polylinePoints} fill="none" stroke="blue" strokeWidth="2" />
//     </svg>
//   );
// };

// export default LineChart;
