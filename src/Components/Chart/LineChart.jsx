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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ date , chart }) => {
  console.log(date)

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
          color: "#3F4245",
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

  const labels = date == "" ? weekLabel : (date == "month" ? monthLabel : yearLabel) 

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: chart,
        borderColor: "#8AB4F8",
        backgroundColor: "#8bb4f694",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
