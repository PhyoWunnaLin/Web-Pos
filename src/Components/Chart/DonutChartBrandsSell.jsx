import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BiSolidCircle } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChartBrandsSell = ({brandSales}) => {
  const brandLabels = brandSales?.map((data) => data?.brand_name);
  const brandData = brandSales?.map((data) => parseInt(data?.total_sale / 1000));
  console.log(brandSales)
  const data = {
    labels: brandLabels,
    datasets: [
      {
        label: "# of Votes",
        data: brandData,
        backgroundColor: [
          "#a0d5f2",
          "#8ab4f8",
          "#6a88b8",
          "#404d64",
          "#e8eaed",
        ],
        borderColor: ["#a0d5f2", "#8ab4f8", "#6a88b8", "#404d64", "#e8eaed"],
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
      <div className="w-[70%] max-xl:w-[40%] max-sm:w-[100%] flex justify-center mx-auto relative">
        <Doughnut data={data} options={options} />
        <div className="flex-col items-center absolute top-[38%] max-xl:top-[41%] max-sm:top-[38%]">
          <p className=" text-[hsl(0,10%,94%)] tracking-wider text-lg text-center">100%</p>
          <p className=" text-[hsl(0,3%,76%)] tracking-wider  text-sm">Weekly Sale</p>
        </div>
      </div>

      <div className=" text-[hsl(0,3%,76%)] text-sm tracking-wider flex items-center mt-5 gap-4 max-xl:gap-16 justify-center flex-wrap">
        <div className=" flex gap-1 items-center">
          <span className=" text-[#a0d5f2]">
            <BiSolidCircle />
          </span>
          <span className=" tracking-wider font-semibold text-[15px]">
            {brandLabels && brandLabels[0]}
          </span>
        </div>

        <div className=" flex gap-1 items-center">
          <span className=" text-[#8ab4f8]">
            <BiSolidCircle />
          </span>
          <span className=" tracking-wider font-semibold text-[15px]">
            {brandLabels && brandLabels[1]}
          </span>
        </div>

        <div className=" flex gap-1 items-center">
          <span className=" text-[#6a88b8]">
            <BiSolidCircle />
          </span>
          <span className=" tracking-wider font-semibold text-[15px]">
            {brandLabels && brandLabels[2]}
          </span>
        </div>

        <div className=" flex gap-1 items-center">
          <span className=" text-[#404d64]">
            <BiSolidCircle />
          </span>
          <span className=" tracking-wider font-semibold text-[15px]">
            {brandLabels && brandLabels[3]}
          </span>
        </div>

        <div className=" flex gap-1 items-center">
          <span className=" text-[#e8eaed]">
            <BiSolidCircle />
          </span>
          <span className=" tracking-wider font-semibold text-[15px]">
            {brandLabels && brandLabels[4]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DonutChartBrandsSell;
