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
  // plugins: {
  //   legend: {
  //     position: 'top',
  //   },
  //   title: {
  //     display: true,
  //     text: 'Chart.js Bar Chart',
  //   },
  // },
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

const BarChart = () => {
  return (
    <div className=" border border-[#3F4245] p-5 flex items-end gap-10">
      {/* left  */}
      <div className="w-[50%] flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <p className=" text-[#E8EAED] font-medium text-xl tracking-wide">
            Weekly Sales
          </p>
          <p className=" text-[#AFAFAF] font-medium tracking-wider text-sm">
            Total 85.4k Sales
          </p>
        </div>
        <Bar options={options} data={data} />
      </div>

      {/* right  */}
      <div className="w-[50%] flex flex-col gap-5">
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
                12/8/2023
              </p>
            </div>
          </div>
          <div>
            <p className=" text-[#E8EAED] tracking-wider text-end">125 k </p>
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
            <p className=" text-[#E8EAED] tracking-wider text-end">100 k </p>
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
                12/8/2023
              </p>
            </div>
          </div>
          <div>
            <p className=" text-[#E8EAED] tracking-wider text-end">97 k </p>
            <p className=" text-[#AFAFAF] tracking-wider font-medium text-xs text-end">
              Kyats
            </p>
          </div>
        </div>
        <div className=" ml-auto">
          <button className="text-white bg-transparent px-4 py-1 border border-[#7E7F80] rounded tracking-wider font-medium hover:bg-[#24262b] text-sm">See More</button>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
