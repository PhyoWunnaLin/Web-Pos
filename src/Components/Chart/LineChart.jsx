import React from 'react'
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
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  
  scales: {
    y: {
      grid: {
        color: "#3F4245" ,
      },
      ticks: {
        color: "hsl(0,3%,76%)",

      },
    },

    x: {
      grid: {
        color: "#3F4245",
      },
      ticks: {
        color: "hsl(0,3%,76%)",

      },
    },
  },
  // plugins: {
  //   legend: {
  //     position: 'top',
  //   },
  //   title: {
  //     display: true,
  //     text: 'Chart.js Line Chart',
  //   },
  // },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [4, 3, 8, 5, 7, 4, 6],
      borderColor: '#8AB4F8',
      backgroundColor: '#8bb4f694',
    },
  ],
};

const LineChart = () => {

  return (
    <Line options={options} data={data} />
  )
}

export default LineChart