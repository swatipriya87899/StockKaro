import React, { useEffect, useState } from 'react';
import './StockGraph.css'
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const StockGraph = ({stockData }) => {

   
    const labels = stockData.map(data => data.time)

    const data = {
        labels: labels,
        datasets: [
            {
                label:'',
                data: stockData.map(data => data.price),
                fill: false,
                backgroundColor: '#246AFD', 
                borderColor: '#246AFD',
                pointRadius: 0,
                tension: 0.2,
            }
        ],
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: false, // Remove x-axis grid lines
                },
                ticks: {
                    display: false, // Remove x-axis labels
                  },
            },
            y: {
                grid: {
                    display: false, // Remove y-axis grid lines
                },
                ticks: {
                    display: false, // Remove x-axis labels
                  },
            },
        },
        plugins: {
            legend: {
                display: false, // Set the display property to false to remove the legend
              },
            tooltip: {
              mode: 'index',
              intersect: false,
              display: 'auto',
            },
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
    };

    const legend={
        display:false
    }


    return (
        <div className='stock-graph'>
            <Line data={data} options={options}></Line>
        </div>
    )
}

export default StockGraph
