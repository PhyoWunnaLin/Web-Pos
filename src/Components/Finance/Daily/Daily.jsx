import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../../../Layouts/MainLayout";
import Banner2 from "../../Banner/Banner2";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { PiExportDuotone } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./daily.css";
import { BiSearch } from "react-icons/bi";
import DailyTable from "./DailyTable";
import { FaRegCalendarCheck } from "react-icons/fa";
import Cookies from "js-cookie";
import { useRecentVoucherQuery } from "../../../Redux/API/saleApi";
import Loader from "../../Loader/Loader";
import { Pagination } from "@mantine/core";
const Daily = () => {
  const token = Cookies.get("token");
  const p = localStorage.getItem("dailyPage")
  const [page,setPage] = useState(p ? p : 1)
  const d = new Date();
  const nowYear = d.getFullYear();
  const nowMonth = (d.getMonth() + 1).toString();
  const realMonth = nowMonth.length === 1 ? "0" + nowMonth : nowMonth;
  const nowDay = d.getDate().toString();
  const realDay = nowDay.length === 1 ? "0" + nowDay : nowDay;
  const today = nowYear + "-" + realMonth + "-" + realDay;
  const [date, setDate] = useState(today);
  const [searchDate, setSearchDate] = useState(today);
  const { data, isLoading, isFetching } = useRecentVoucherQuery({ token, page, date });
  const [currentShow, setCurrentShow] = useState();
  const dailyTable = currentShow?.data?.data;
  const dailyTotal = currentShow?.daily_total_sale;

  // pagination 

  const totalPage = currentShow?.data?.last_page

  // console.log(totalPage);

  useEffect(() => {
    localStorage.setItem("dailyPage",page)
  },[page])

  useEffect(() => {
    setCurrentShow(data);
  }, [data]);

  const handleSearch = (e) => {
    e.preventDefault()
    setDate(searchDate)
  }

  return (
    <>
      <MainLayout>
        <div className=" w-full flex justify-center">
          <div className="w-[95%] my-6 flex flex-col gap-8">
            <Banner2
              title={"Daily"}
              path1={"Finance"}
              path2={"Daily"}
              btn2={"Go To Shop"}
              button2={true}
              route={"/sale/cashier"}
            />
            {/* search  */}
            <form className="flex justify-between items-center">
              <div>
                <h1 className=" text-white font-medium text-2xl tracking-wide">
                  Today Sales Overview
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <div className="border border-[#7E7F80] py-1 px-2 flex items-center gap-2 rounded cursor-pointer">
                  <p className="text-[#8bb4f6]">
                    <PiExportDuotone />
                  </p>
                  <p className="text-[#E8EAED] tracking-wider font-medium text-sm">
                    Export
                  </p>
                  <p className="text-[#E8EAED]">
                    <MdOutlineKeyboardArrowDown />
                  </p>
                </div>
                <div className="flex relative">
                  <div className="text-[#8bb4f6] absolute top-[8px] left-[12px]">
                    <FaRegCalendarCheck />
                  </div>
                  <input
                    required
                    type="date"
                    id="start"
                    name="trip-start"
                    onChange={(e) => setSearchDate(e.target.value)}
                    value={date}
                    min="2023-01-01"
                    max={today}
                    className=" w-36 appearance-none border border-[#7E7F80] text-[#E8EAED] font-medium tracking-wider bg-transparent rounded-l outline-none py-1 pl-9 text-sm border-r-0"
                  />
                  <button
                  onClick={handleSearch}
                  className="bg-[#8bb4f6] py-1 px-3 rounded-r flex items-center tracking-wider text-black font-medium text-sm cursor-pointer">
                    <BiSearch size={18} />
                  </button>
                </div>
              </div>
            </form>
            {/* table  */}
            {isFetching ? (
              <div>
                <Loader />
              </div>
            ) : (
              <div>
                <DailyTable dailyTable={dailyTable} dailyTotal={dailyTotal} />

                {/* total yearly  */}
                <div className={`flex gap-5 items-end w-full`}>
                  {/* TOTAL Yearly  */}
                  <div className={` flex mt-5  border-[#7E7F80] w-[60%]`}>
                  <div className=" border border-[#7E7F80] px-5 py-2 text-end w-auto">
                    <h1 className=" text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide">
                      Total Vouchers
                    </h1>
                    <p className=" text-white text-xl whitespace-nowrap tracking-wide font-semibold">
                      {dailyTotal?.total_voucher}
                    </p>
                  </div>

                  <div className=" border-r border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto">
                    <h1 className=" text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide">
                      Total Cash
                    </h1>
                    <p className=" text-white text-xl whitespace-nowrap tracking-wider font-semibold">
                      {dailyTotal?.total_cash}
                    </p>
                  </div>

                  <div className=" border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto">
                    <h1 className=" text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide">
                      Total Tax
                    </h1>
                    <p className=" text-white text-xl whitespace-nowrap tracking-wider font-semibold">
                      {dailyTotal?.total_tax}
                    </p>
                  </div>

                  <div className=" border border-[#7E7F80] py-2 px-5 text-end w-auto ">
                    <h1 className=" text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide">
                      Total
                    </h1>
                    <p className=" text-white text-xl whitespace-nowrap tracking-wider font-semibold">
                      {dailyTotal?.total}
                    </p>
                  </div>
                </div>

                  {/* Pagination */}
                  <div className=" ml-auto mb-1">
                    <Pagination total={totalPage} value={Number(page)} onChange={setPage}/>
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

export default Daily;
