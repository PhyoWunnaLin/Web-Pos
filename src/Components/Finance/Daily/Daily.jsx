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
const Daily = () => {
  const d = new Date();
  const nowYear = d.getFullYear();
  const nowMonth = (d.getMonth() + 1).toString();
  const realMonth = nowMonth.length === 1 ? "0" + nowMonth : nowMonth;
  const nowDay = d.getDate().toString();
  const realDay = nowDay.length === 1 ? "0" + nowDay : nowDay;
  const today = nowYear + "-" + realMonth + "-" + realDay
  const [date, setDate] = useState(today);
  const token = Cookies.get("token");
  const {data , isLoading} = useRecentVoucherQuery({token})
  const [currentShow, setCurrentShow] = useState();
  const dailyTable = currentShow?.data?.data
  const dailyTotal = currentShow?.daily_total_sale

  console.log(currentShow)

  useEffect(() => {
    setCurrentShow(data)
  },[data])

  // const handleSearch = (e) => {
  //   try {
  //     e.preventDefault()
  //     const data = useRecentVoucherQuery({token , searchDaily : date})
  //     setCurrentShow(data);
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
 
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
                  <p className="text-[#E8EAED] tracking-wider font-medium text-sm">Export</p>
                  <p className="text-[#E8EAED]">
                    <MdOutlineKeyboardArrowDown />
                  </p>
                </div>
                <div className="flex relative">
                  <div className="text-[#8bb4f6] absolute top-[8px] left-[12px]">
                    <FaRegCalendarCheck/>
                  </div>
                  <input
                    required
                    type="date"
                    id="start"
                    name="trip-start"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    min="2023-01-01"
                    max={today}
                    className=" w-36 appearance-none border border-[#7E7F80] text-[#E8EAED] font-medium tracking-wider bg-transparent rounded-l outline-none py-1 pl-9 text-sm border-r-0"
                  />
                  <button className="bg-[#8bb4f6] py-1 px-3 rounded-r flex items-center tracking-wider text-black font-medium text-sm cursor-pointer">
                    <BiSearch size={18}/>
                  </button>
                </div>
              </div>
            </form>
            {/* table  */}
            {isLoading ? <div><Loader/></div> : 
            <div>
                <DailyTable dailyTable={dailyTable} dailyTotal={dailyTotal}/>
            </div>}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Daily;
