import React from 'react';
import ReactECharts from 'echarts-for-react';


const LineChart = () => {

        const data = {
            xAxis: {
                type: 'category',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}K', // Вивід "1K", "2K", "3K" на осі Y
                },
            },
            series: [
                {
                    data: [2.0], // Середнє значення калорій
                    type: 'line',
                    symbol: 'circle', // Тип символу - коло
                    symbolSize: 10,   // Розмір символу
                },
            ],
        };

        return (
            <div style={{ width: '100%', height: '400px' }}>
                <ReactECharts option={data} />
            </div>
        );
    };

export default LineChart;