import React, { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import Banner from "../Components/Banner/Banner";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiRightArrowAlt, BiSolidUserBadge } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineShop } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { TiChartLine } from "react-icons/ti";
import { RiDatabaseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import LineChart from "../Components/Chart/LineChart";
import DashboardTable from "../Components/Dashboard/DashboardTable";
import { useGetOverviewQuery } from "../Redux/API/dashboardApi";
import Cookies from "js-cookie";
import Loader from "../Components/Loader/Loader";

const Dashboard = () => {
  
  const [date, setDate] = useState("year");
  const token = Cookies.get("token");
  const { data , isLoading, refetch, isFetching } = useGetOverviewQuery({ token, date });
  const chart = data?.total_sales?.map((item) => parseInt(item?.total / 1000))
  const chartData = data?.total_sales

  useEffect(() => {
    refetch()
  },[data])

  return (
    <MainLayout>
      <div className=" w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* header  */}
          <Banner title={"Overview"} path1={"Products"} />

          {isLoading ? <div><Loader/></div> : <>{/* quick action  */}
          <div className="flex gap-5 max-xl:flex-col max-xl:gap-8">
            {/* left  */}
            <div className="w-[50%] max-xl:w-[100%] flex gap-5 max-sm:flex-col max-sm:gap-8">
              <div className="w-[50%] max-xl:py-5 max-sm:w-[100%]  flex justify-between px-5 items-center border border-[#3F4245] rounded-md">
                <div className="bg-[#323336] rounded-full h-20 w-20 flex justify-center items-center">
                  <div className="border border-[#8bb4f6] flex justify-center items-center bg-[#434446] rounded-full h-14 w-14">
                    <HiOutlineShoppingCart
                      className=" text-[#8bb4f6]"
                      size={25}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#E8EAED] text-2xl font-bold tracking-wide text-end">
                    {data?.totalStock}
                  </p>
                  <p className=" text-[#DFDFDF] font-medium tracking-wider text-end text-sm">
                    Total Stocks
                  </p>
                </div>
              </div>
              <div className="w-[50%] max-xl:py-5 max-sm:w-[100%]  flex justify-between px-5 items-center border border-[#3F4245] rounded-md">
                <div className="bg-[#323336] rounded-full h-20 w-20 flex justify-center items-center">
                  <div className="border border-[#8bb4f6] flex justify-center items-center bg-[#434446] rounded-full h-14 w-14">
                    <BiSolidUserBadge className=" text-[#8bb4f6]" size={25} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#E8EAED] text-2xl font-bold tracking-wide text-end">
                    {data?.totalStaff}
                  </p>
                  <p className=" text-[#DFDFDF] font-medium tracking-wider text-end text-sm">
                    Total Staff
                  </p>
                </div>
              </div>
            </div>

            {/* right  */}
            <div className="w-[50%] max-xl:w-[100%] py-5 px-5 flex flex-col gap-3 justify-center border border-[#3F4245] rounded-md max-sm:pb-28">
              <h1 className=" text-white text-xl font-medium tracking-wide">
                Quick Action
              </h1>
              <div className="flex gap-5 h-20 max-sm:flex-col">
                <Link
                  to={"/inventory/addProduct"}
                  className="w-[40%] max-sm:w-[100%] max-sm:py-5 flex gap-2 px-4 border border-[#3F4245] rounded-md items-center cursor-pointer"
                >
                  <div className=" flex justify-center items-center border border-[#3F4245] rounded-md w-10 h-10">
                    <AiOutlinePlus className=" text-[#8bb4f6]" size={22} />
                  </div>
                  <div className=" flex flex-col">
                    <p className="text-[#DFDFDF] font-medium tracking-wider">
                      Add Product
                    </p>
                    <p className="text-[#B6B7BB] text-xs font-medium tracking-wider">
                      stock update
                    </p>
                  </div>
                </Link>
                <Link
                  to={"/sale/cashier"}
                  className="w-[60%] max-sm:w-[100%] max-sm:py-5 px-4 flex border border-[#3F4245] rounded-md items-center justify-between cursor-pointer"
                >
                  <div className="w-[90%] flex gap-2 items-center">
                    <div className=" flex justify-center items-center border border-[#3F4245] rounded-md w-10 h-10">
                      <BsShop className=" text-[#8bb4f6]" size={20} />
                    </div>
                    <div className=" flex flex-col">
                      <p className="text-[#DFDFDF] font-medium tracking-wider">
                        Go To Shop
                      </p>
                      <p className="text-[#B6B7BB] text-xs font-medium tracking-wider">
                        complete the sale
                      </p>
                    </div>
                  </div>
                  <button className="w-8 h-8 bg-[#3F4245] rounded-full flex justify-center items-center">
                    <BiRightArrowAlt className=" text-white" size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* line chart  */}
          <div className="border flex max-[850px]:flex-col items-end gap-8 px-5 py-5 border-[#3F4245] rounded-md">
            {/* left side  */}
            <div className="w-[70%] max-[850px]:w-[100%] flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <span className=" text-[#E8EAED] font-medium text-xl tracking-wide">
                  {date == "" ? "Weekly Sales" : (date == "month" ? "Monthly Sales" : "Yearly Sales")}
                </span>
                <div className="flex border border-[#3F4245] items-center rounded -mb-2">
                  <p
                    onClick={() => setDate("year")}
                    className={`${
                      date === "year" ? "text-[#8AB4F8]" : "text-[#E8EAED]"
                    } font-medium px-3 py-[6px] text-sm tracking-wider cursor-pointer hover:bg-[#24262b] duration-300 border-r border-[#3F4245]`}
                  >
                    Year
                  </p>
                  <p
                    onClick={() => setDate("month")}
                    className={`${
                      date === "month" ? "text-[#8AB4F8]" : "text-[#E8EAED]"
                    } font-medium px-3 py-[6px] text-sm tracking-wider cursor-pointer hover:bg-[#24262b] duration-300 border-r border-[#3F4245]`}
                  >
                    Month
                  </p>
                  <p
                    onClick={() => setDate("")}
                    className={`${
                      date === "" ? "text-[#8AB4F8]" : "text-[#E8EAED]"
                    } font-medium px-3 py-[6px] text-sm tracking-wider cursor-pointer hover:bg-[#24262b] duration-300`}
                  >
                    Week
                  </p>
                </div>
              </div>
              <LineChart date={date} chart={chart} chartData={chartData}/>
            </div>

            {/* right side  */}
            <div className="w-[30%] max-[850px]:w-[100%] flex flex-col gap-5">
              <div>
                <p className=" text-[#E8EAED] tracking-wide text-[22px]">
                  {data?.total}
                </p>
                <p className=" text-[#7E7F80] tracking-wider font-medium text-sm">
                  Kyats
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 flex justify-center items-center rounded-md bg-[#343D4C]">
                  <TiChartLine className=" text-[#56CA00]" size={23} />
                </div>
                <div>
                  <p className=" text-[#E8EAED] tracking-wide">
                    {data?.total_profit}
                  </p>
                  <p className=" text-[#7E7F80] tracking-wider font-medium text-sm">
                    Total Profit
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 flex justify-center items-center rounded-md bg-[#3F4245]">
                  <RiDatabaseLine className=" text-[#8AB4F8]" size={23} />
                </div>
                <div>
                  <p className=" text-[#E8EAED] tracking-wide">
                    {data?.total_income}
                  </p>
                  <p className=" text-[#7E7F80] tracking-wider font-medium text-sm">
                    Total Income
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 flex justify-center items-center rounded-md bg-[#3F4245]">
                  <AiOutlineShop className=" text-[#A07C21]" size={23} />
                </div>
                <div>
                  <p className=" text-[#E8EAED] tracking-wide">
                    {data?.total_expense}
                  </p>
                  <p className=" text-[#7E7F80] tracking-wider font-medium text-sm">
                    Total Expense
                  </p>
                </div>
              </div>
              <Link to={'/report/saleReport'} className="btn mr-10 max-[850px]:w-[180px] flex justify-center">
              <button>
                SALE REPORT
              </button>
              </Link>
            </div>
          </div>
          {/* table  */}
          <DashboardTable /></>}
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
