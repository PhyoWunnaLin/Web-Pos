import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BiSolidCircle } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChartBestSeller = ({ chart }) => {
  const brandLabels = chart?.map((data) => data?.brand_name);
  const brandData = chart?.map((data) => parseInt(data?.total_sale / 1000));
  const brandTotalSale = chart?.reduce((pv, cv) => pv + cv.total_sale, 0);

  const data = {
    labels: brandLabels,
    datasets: [
      {
        label: "Best Seller Brand",
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
    <>
      <h1 className=" text-[#E8EAED] text-2xl font-semibold tracking-wide">
        Best Seller Brands
      </h1>

      <div className=" text-end mb-3">
        <p className=" text-[#E8EAED] text-2xl font-bold tracking-wide text-end">
          {brandTotalSale}
        </p>
        <p className=" text-[hsl(0,3%,76%)] tracking-wider">kyats</p>
      </div>

      {/* donut chart  */}
      <div className=" flex gap-5 max-xl:gap-20 max-md:gap-5 max-md:flex-col justify-center items-start">
        <div className=" w-[50%] max-xl:w-auto relative max-md:w-full max-md:flex max-md:justify-center">
          <Doughnut data={data} options={options} />
          <div className="w-full absolute top-[46%]">
          <span className=" text-[hsl(0,3%,76%)] tracking-wider text-sm flex justify-center">
            Weekly Sale
          </span>
          </div>
        </div>

        <div className=" w-[50%] max-xl:w-[65%] max-md:w-full text-white mt-2 ">
          {chart[0]?.total_brand_sale !=0 && (
            <div className="flex justify-between items-center py-[10px] max-xl:py-4 border-b border-[#383b3d]">
            <div className=" flex w-[60%] gap-3 items-center">
              <span className={`text-[#a0d5f2]`}>
                <BiSolidCircle />
              </span>
              <span className=" tracking-wider font-semibold text-[15px]">
                {chart && chart[0]?.brand_name}
              </span>
            </div>

            <div className=" flex w-[40%] justify-between items-center">
              <p>{chart && chart[0]?.total_brand_sale}</p>
              <div className=" flex">
                <p>{chart && parseInt(chart[0]?.total_sale / 1000)}%</p>
                <p className="text-[#87dd45] text-2xl">
                  <MdKeyboardArrowUp />
                </p>
              </div>
            </div>
          </div>
          )}

          {chart[1]?.total_brand_sale != 0 && (
            <div className="flex justify-between items-center py-[10px] max-xl:py-4 border-b border-[#383b3d]">
            <div className=" flex w-[60%] gap-3 items-center">
              <span className={`text-[#8ab4f8]`}>
                <BiSolidCircle />
              </span>
              <span className=" tracking-wider font-semibold text-[15px]">
                {chart && chart[1]?.brand_name}
              </span>
            </div>

            <div className=" flex w-[40%] justify-between items-center">
              <p>{chart && chart[1]?.total_brand_sale}</p>
              <div className=" flex">
                <p>{chart && parseInt(chart[1]?.total_sale / 1000)}%</p>
                <p className="text-[#87dd45] text-2xl">
                  <MdKeyboardArrowUp />
                </p>
              </div>
            </div>
          </div>
          )}

          {chart[2]?.total_brand_sale != 0 && (
            <div className="flex justify-between items-center py-[10px] max-xl:py-4 border-b border-[#383b3d]">
            <div className=" flex w-[60%] gap-3 items-center">
              <span className={`text-[#6a88b8]`}>
                <BiSolidCircle />
              </span>
              <span className=" tracking-wider font-semibold text-[15px]">
                {chart && chart[2]?.brand_name}
              </span>
            </div>

            <div className=" flex w-[40%] justify-between items-center">
              <p>{chart && chart[2]?.total_brand_sale}</p>
              <div className=" flex">
                <p>{chart && parseInt(chart[2]?.total_sale / 1000)}%</p>
                <p className="text-[#87dd45] text-2xl">
                  <MdKeyboardArrowUp />
                </p>
              </div>
            </div>
          </div>
          )}

          {chart[3]?.total_brand_sale != 0 && (
            <div className="flex justify-between items-center py-[10px] max-xl:py-4 border-b border-[#383b3d]">
            <div className=" flex w-[60%] gap-3 items-center">
              <span className={`text-[#404d64]`}>
                <BiSolidCircle />
              </span>
              <span className=" tracking-wider font-semibold text-[15px]">
                {chart && chart[3]?.brand_name}
              </span>
            </div>

            <div className=" flex w-[40%] justify-between items-center">
              <p>{chart && chart[3]?.total_brand_sale}</p>
              <div className=" flex">
                <p>{chart && parseInt(chart[3]?.total_sale / 1000)}%</p>
                <p className="text-[#87dd45] text-2xl">
                  <MdKeyboardArrowUp />
                </p>
              </div>
            </div>
          </div>
          )}

          {chart[4]?.total_brand_sale != 0 && (
            <div className="flex justify-between items-center py-[10px] max-xl:py-4 border-b border-[#383b3d]">
            <div className=" flex w-[60%] gap-3 items-center">
              <span className={`text-[#e8eaed]`}>
                <BiSolidCircle />
              </span>
              <span className=" tracking-wider font-semibold text-[15px]">
                {chart && chart[4]?.brand_name}
              </span>
            </div>

            <div className=" flex w-[40%] justify-between items-center">
              <p>{chart && chart[4]?.total_brand_sale}</p>
              <div className=" flex">
                <p>{chart && parseInt(chart[4]?.total_sale / 1000)}%</p>
                <p className="text-[#87dd45] text-2xl">
                  <MdKeyboardArrowUp />
                </p>
              </div>
            </div>
          </div>
          )}

          <div className=" flex justify-end">
            <Link to={'/sale/recent'}>
            <button className="bg-transparent border border-[#7E7F80] py-2 px-4 rounded-md mt-3 text-sm tracking-wide text-white select-none hover:bg-[#24262b]">
              RECENT SALES
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonutChartBestSeller;
