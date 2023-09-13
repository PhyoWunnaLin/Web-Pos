import React, { useEffect, useState } from "react";
import MainLayout from "../../../Layouts/MainLayout";
import { PiExportDuotone } from "react-icons/pi";
import { MdCalendarMonth, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Banner2 from "../../Banner/Banner2";
import { BiSearch } from "react-icons/bi";
import MonthlyTable from "./MonthlyTable";
import Cookies from "js-cookie";
import { useMonthlyQuery } from "../../../Redux/API/saleApi";
import Loader from "../../Loader/Loader";
import { Pagination } from "@mantine/core";

const Monthly = () => {
  const token = Cookies.get("token");
  const p = localStorage.getItem("MonthlyPage");
  const [page, setPage] = useState(p ? p : 1);
  const d = new Date();
  const nowMonth = d.getMonth() + 1;
  const [month, setMonth] = useState(nowMonth);
  const [year, setYear] = useState(d.getFullYear());
  const [searchMonth, setSearchMonth] = useState(nowMonth);
  const [searchYear, setSearchYear] = useState(d.getFullYear());
  const {data , isLoading ,isFetching}= useMonthlyQuery({token,page,month,year});
  const [currentMonth, setCurrentMonth] = useState();
  const monthlyTable = currentMonth?.data?.data;
  const monthlyTotal = currentMonth?.monthly_total_sale;
  const totalPage = currentMonth?.data?.last_page
  console.log(totalPage );

  useEffect(() => {
    localStorage.setItem("MonthlyPage", page);
  }, [page]);

  useEffect(() => {
    setPage(1)
  },[])

  useEffect(() => {
    setCurrentMonth(data)
  }, [data]);

  const handleSearch = () => {
    setMonth(searchMonth)
    setYear(searchYear)
    setPage(1)
  };

  const months = [
    { id: 1, name: "Jan" },
    { id: 2, name: "Feb" },
    { id: 3, name: "Mar" },
    { id: 4, name: "Apr" },
    { id: 5, name: "May" },
    { id: 6, name: "Jun" },
    { id: 7, name: "Jul" },
    { id: 8, name: "Aug" },
    { id: 9, name: "Sep" },
    { id: 10, name: "Oct" },
    { id: 11, name: "Nov" },
    { id: 12, name: "Dec" },
  ];
  return (
    <>
      <MainLayout>
        <div className=" w-full flex justify-center">
          <div className="w-[95%] my-6 flex flex-col gap-8">
            <Banner2
              title={"Monthly"}
              path1={"Finance"}
              path2={"Monthly"}
              btn2={"Go To Shop"}
              button2={true}
              route={"/sale/cashier"}
            />
            {/* search  */}
            <div className="flex max-[780px]:flex-col max-[780px]:gap-4 max-[780px]:items-start justify-between items-center">
              <div>
                <h1 className=" text-white font-medium text-2xl tracking-wide">
                  This Month Sales Overview
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                {/* <div className="border border-[#7E7F80] py-1 px-2 flex items-center gap-2 rounded cursor-pointer">
                  <p className="text-[#8bb4f6]">
                    <PiExportDuotone />
                  </p>
                  <p className="text-[#E8EAED] tracking-wider font-medium text-sm">
                    Export
                  </p>
                  <p className="text-[#E8EAED]">
                    <MdOutlineKeyboardArrowDown />
                  </p>
                </div> */}
                <div className="flex">
                  <div className="flex items-center border border-[#7E7F80] px-2 border-r-0 rounded-l">
                    <div className="flex items-center gap-1 border-r border-[#7E7F80] pr-2">
                      <MdCalendarMonth className="text-[#8bb4f6]" />
                      <select
                        onChange={(e) => setSearchMonth(e.target.value)}
                        className=" bg-transparent text-[#E8EAED] py-1 text-sm font-medium tracking-wider outline-none cursor-pointer"
                      >
                        {months?.map((m) => {
                          return (
                            <option
                              key={m.id}
                              selected={nowMonth === m.id && true}
                              className="bg-[#161618] hover:bg-[#202124]"
                              value={m.id}
                            >
                              {m.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="pl-2">
                      <select
                        onChange={(e) => setSearchYear(e.target.value)}
                        className=" bg-transparent text-[#E8EAED] py-1 text-sm font-medium tracking-wider outline-none pr-2 cursor-pointerx"
                      >
                        <option
                          className="bg-[#161618] hover:bg-[#202124]"
                          value="2023"
                        >
                          2023
                        </option>
                        <option
                          className="bg-[#161618] hover:bg-[#202124]"
                          value="2022"
                        >
                          2022
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    onClick={handleSearch}
                    className="bg-[#8bb4f6] py-1 px-3 rounded-r flex items-center tracking-wider text-black font-medium text-sm cursor-pointer"
                  >
                    <BiSearch size={18} />
                  </div>
                </div>
              </div>
            </div>
            {/* table  */}
            {isFetching ? (
              <div>
                <Loader />
              </div>
            ) : (
              <div>
                <MonthlyTable
                  monthlyTable={monthlyTable}
                  monthlyTotal={monthlyTotal}
                  currentMonth={currentMonth}
                />

                {/* total monthly  */}

                <div className={`flex gap-5 items-end w-full ${totalPage >= 5 ? "max-xl:flex-col-reverse max-xl:items-start" : "max-[810px]:flex-col-reverse max-[810px]:items-start"} mt-7`}>
                  {/* TOTAL MONTHLY */}
                  <div className={` flex mt-5  border-[#7E7F80] w-[60%]`}>

                    <div className=" border border-[#7E7F80] px-5 py-2 text-end w-auto">
                      <h1 className=" text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide">
                        Total Vouchers
                      </h1>
                      <p className=" text-white text-xl whitespace-nowrap tracking-wide font-semibold">
                        {monthlyTotal?.total_voucher}
                      </p>
                    </div>

                    <div className=" border-r border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto">
                      <h1 className=" text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide">
                        Total Cash
                      </h1>
                      <p className=" text-white text-xl whitespace-nowrap tracking-wider font-semibold">
                        {monthlyTotal?.total_cash}
                      </p>
                    </div>

                    <div className=" border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto">
                      <h1 className=" text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide">
                        Total Tax
                      </h1>
                      <p className=" text-white text-xl whitespace-nowrap tracking-wider font-semibold">
                        {monthlyTotal?.total_tax}
                      </p>
                    </div>

                    <div className=" border border-[#7E7F80] py-2 px-5 text-end w-auto ">
                      <h1 className=" text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide">
                        Total
                      </h1>
                      <p className=" text-white text-xl whitespace-nowrap tracking-wider font-semibold">
                        {monthlyTotal?.total}
                      </p>
                    </div>
                  </div>

                  {/* Pagination */}
                  <div className=" ml-auto mb-1">
                    <Pagination
                      total={totalPage}
                      value={Number(page)}
                      onChange={setPage}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Monthly;
