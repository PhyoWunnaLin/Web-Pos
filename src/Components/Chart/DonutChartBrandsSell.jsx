import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BiSolidCircle } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChartBrandsSell = () => {
  const data = {
    labels: ["Yum Yum", "Shark", "Apple", "Dell"],
    datasets: [
      {
        label: "# of Votes",
        data: [20, 15, 10, 5],
        backgroundColor: ["#8ab4f8", "#6a88b8", "#404d64", "#e8eaed"],
        borderColor: ["#8ab4f8", "#6a88b8", "#404d64", "#e8eaed"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div>
      <div className="w-[70%] flex justify-center mx-auto relative">
        <Doughnut data={data} options={options} />
        <p className=" text-[hsl(0,10%,94%)] tracking-wider text-lg absolute top-[40%]">100%</p>

        <p className=" text-[hsl(0,3%,76%)] tracking-wider absolute text-sm top-1/2">Weekly Sale</p>
      </div>

      <div className=" text-[hsl(0,3%,76%)] text-sm tracking-wider flex items-center mt-5 gap-4 max-xl:gap-16 justify-center">
        <div className=" flex gap-1 items-center">
          <span className=" text-[#8ab4f8]">
            <BiSolidCircle />
          </span>
          <span className=" tracking-wider font-semibold text-[15px]">
            Yum Yum
          </span>
        </div>

        <div className=" flex gap-1 items-center">
          <span className=" text-[#8ab4f8]">
            <BiSolidCircle />
          </span>
          <span className=" tracking-wider font-semibold text-[15px]">
            Shark
          </span>
        </div>

        <div className=" flex gap-1 items-center">
          <span className=" text-[#8ab4f8]">
            <BiSolidCircle />
          </span>
          <span className=" tracking-wider font-semibold text-[15px]">
            Apple
          </span>
        </div>

        <div className=" flex gap-1 items-center">
          <span className=" text-[#8ab4f8]">
            <BiSolidCircle />
          </span>
          <span className=" tracking-wider font-semibold text-[15px]">
            Dell
          </span>
        </div>
      </div>
    </div>
  );
};

export default DonutChartBrandsSell;
