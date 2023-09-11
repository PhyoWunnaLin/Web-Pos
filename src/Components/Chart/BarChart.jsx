import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
        color: "transparent" ,
      },
      display: false ,
      ticks: {
        color: "white",

      },
    },

    x: {
      grid: {
        color: "transparent",
      },
      ticks: {
        color: "white",

      },
    },
  },
};

const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [4, 3, 8, 5, 7, 4, 6],
      backgroundColor: '#8bb4f694',
    },
  ],
};

const BarChart = ({date,barChart,sales}) => {

  const chart = barChart?.map(item => parseInt(item.total / 1000))
  console.log(sales)

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
          color: "transparent" ,
        },
        display: false ,
        ticks: {
          color: "white",
  
        },
      },
  
      x: {
        grid: {
          color: "transparent",
        },
        ticks: {
          color: "white",
  
        },
      },
    },
  };
  
  const labels = date == "" ? weekLabel : (date == "month" ? monthLabel : yearLabel);
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: chart,
        backgroundColor: '#8bb4f694',
      },
    ],
  };

  return (
    <div className=" border border-[#3F4245] rounded-md px-5 py-5">
      {/* left  */}
      <div className="flex flex-col gap-1 mb-8">
          <p className=" text-xl tracking-wider text-white">
            Weekly Sales
          </p>
          <p className=" text-[#AFAFAF] font-medium tracking-wider text-sm">
            Total {(sales?.total / 1000).toFixed(0)} k Sales
          </p>
        </div>

        <div className="flex items-start gap-5 max-md:flex-col max-md:gap-8 max-md:items-center">
          {/* bar chart  */}
          <div className="w-[50%] max-md:w-full max-md:justify-center max-md:flex-row flex flex-col gap-5">
            <Bar options={options} data={data} />
          </div>

          {/* right  */}
          <div className="w-[50%] max-md:w-full flex flex-col gap-5">
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 flex text-[#E8EAED] justify-center items-center rounded-md border border-[#3F4245]">
                  T
                </div>
                <div>
                  <p className=" text-[#E8EAED] tracking-wider flex items-center gap-2">
                    Highest
                    <span className="text-[#55C800]">
                      <IoIosArrowUp />
                    </span>
                    <span className="text-[#55C800]">25.8%</span>
                  </p>
                  <p className=" text-[#AFAFAF] tracking-wider font-medium text-xs">
                    {sales?.max_price?.date}
                  </p>
                </div>
              </div>
              <div>
                <p className=" text-[#E8EAED] tracking-wider text-end">{(sales?.max_price?.total / 1000).toFixed(0)} k </p>
                <p className=" text-[#AFAFAF] tracking-wider font-medium text-xs text-end">
                  Kyats
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 flex text-[#E8EAED] justify-center items-center rounded-md border border-[#3F4245]">
                  T
                </div>
                <div>
                  <p className=" text-[#E8EAED] tracking-wider flex items-center gap-2">
                    Average
                  </p>
                  <p className=" text-[#AFAFAF] tracking-wider font-medium text-xs">
                    Income
                  </p>
                </div>
              </div>
              <div>
                <p className=" text-[#E8EAED] tracking-wider text-end">{(sales?.avg_price / 1000).toFixed(0)} k </p>
                <p className=" text-[#AFAFAF] tracking-wider font-medium text-xs text-end">
                  Kyats
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 flex text-[#E8EAED] justify-center items-center rounded-md border border-[#3F4245]">
                  T
                </div>
                <div>
                  <p className=" text-[#E8EAED] tracking-wider flex items-center gap-2">
                    Lowest
                    <span className="text-[#FF4C51]">
                      <IoIosArrowDown />
                    </span>
                    <span className="text-[#FF4C51]">-3%</span>
                  </p>
                  <p className=" text-[#AFAFAF] tracking-wider font-medium text-xs">
                  {sales?.min_price?.date}
                  </p>
                </div>
              </div>
              <div>
                <p className=" text-[#E8EAED] tracking-wider text-end">{(sales?.min_price?.total / 1000).toFixed(0)} k </p>
                <p className=" text-[#AFAFAF] tracking-wider font-medium text-xs text-end">
                  Kyats
                </p>
              </div>
            </div>
            <div className=" ml-auto">
              <button className="text-white bg-transparent px-4 py-1 border border-[#7E7F80] rounded tracking-wider  hover:bg-[#24262b] text-sm">SEE MORE</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default BarChart;
