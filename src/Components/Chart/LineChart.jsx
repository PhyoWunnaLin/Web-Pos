import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ date , chart , chartData }) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        grid: {
          color: chart?.length == 1 ? "transparent" :"#3F4245",
        },
        ticks: {
          color: "hsl(0,3%,76%)",
        },
      },

      x: {
        grid: {
          color: chart?.length == 1 ? "transparent" :"#3F4245",
        },
        ticks: {
          color: "hsl(0,3%,76%)",
        },
      },
    },
  };
  const yearLabel = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const monthLabel = [
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "D9",
    "D10",
    "D11",
    "D12",
    "D13",
    "D14",
    "D15",
    "D16",
    "D17",
    "D18",
    "D19",
    "D20",
    "D21",
    "D22",
    "D23",
    "D24",
    "D25",
    "D26",
    "D27",
    "D28",
    "D29",
    "D30",
    "D31",
   ]

   const weekLabel = [
    "Mon",
    "Tue",
    "Wed",
    "Tur",
    "Fri",
    "Sat",
    "Sun"
   ]

   const fakeDataColor = ["#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620","#8bb4f620"]
   
  const chartColor = chartData?.map(item => {
    return {
      ...item,           // Copy existing properties from the original item
      color: '#8bb4f694' // Add the 'color' property
    };
  }).map(bar => bar.color )

  const labels = date == "" ? weekLabel : (date == "month" ? monthLabel : yearLabel) 

  const weekFakeData = [10,10,10,10,10,10,10]

  const monthFakeData = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]

  const yearFakeData = [500,500,500,500,500,500,500,500,500,500,500,500]

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: (chart?.length == 1 || chartData == []) ? [...chart,...(date == "" ? weekFakeData : (date == "month" ? monthFakeData : yearFakeData))] : chart,
        borderColor: "#8AB4F8",
        backgroundColor: (chart?.length == 1 || chartData == []) ? [...chartColor,...fakeDataColor] : '#8bb4f694',
      },
    ],
  };

  return (
    <>
    {(chart?.length == 1 || chartData == []) ? <Bar options={options} data={data} /> : <Line options={options} data={data} />}
    </>
  );
};

export default LineChart;
