import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BiSolidCircle } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChartBestSeller = ({chart}) => {
  const brandLabels = chart?.map(data => data?.brand_name)
  const brandData = chart?.map(data => parseInt(data?.total_sale / 1000))
  const brandTotalSale = chart?.reduce((pv,cv) => pv+cv.total_sale,0)
  console.log(chart);

  const data = {
    labels: brandLabels,
    datasets: [
      {
        label: "Best Seller Brand",
        data: brandData,
        backgroundColor: ["#a0d5f2", "#8ab4f8", "#6a88b8" , "#404d64", "#e8eaed"],
        borderColor: ["#a0d5f2", "#8ab4f8", "#6a88b8" , "#404d64", "#e8eaed"],
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
          <p className=" text-[hsl(0,3%,76%)] tracking-wider absolute top-[46%] left-[31%] max-md:left-[43%] max-[690px]:left-[40%]">Weekly Sale</p>
        </div>

        <div className=" w-[50%] max-xl:w-[65%] max-md:w-full text-white mt-2 ">
          {chart?.map(data => {
            return(
              <div key={data?.id}>
                <div className="flex justify-between items-center py-3 max-xl:py-4 border-b border-[#383b3d]">
            <div className=" flex gap-3 items-center">
              <span className={`text-[#8ab4f8]`}>
                <BiSolidCircle />
              </span>
              <span className=" tracking-wider font-semibold text-[15px]">
                {data?.brand_name}
              </span>
            </div>

            <div className=" flex items-center gap-7">
              <p>{data?.total_brand_sale}</p>
              <div className=" flex items-end ">
                <p>{data?.total_sale}%</p>
                <p className="text-[#87dd45] text-2xl">
                  <MdKeyboardArrowUp />
                </p>
              </div>
            </div>
          </div>
              </div>
            )
          })}
          

          <div className=" flex justify-end">
            <div className="bg-transparent border border-[#7E7F80] py-1 px-4 rounded-md mt-3 text-sm tracking-wide text-white select-none">
              RECENT SALES
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonutChartBestSeller;
