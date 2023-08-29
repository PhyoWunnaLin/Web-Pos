import React, { useState } from "react";
import MainLayout from "../../../Layouts/MainLayout";
import Banner2 from "../../Banner/Banner2";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { PiExportDuotone } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./daily.css";
import { BiSearch } from "react-icons/bi";
import DailyTable from "./DailyTable";
const Daily = () => {
  const [value, onChange] = useState();
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
            <div className="flex justify-between items-center">
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
                <div className="flex">
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    onChange={(e) => onchange(e.target.value)}
                    value={value}
                    min="2018-01-01"
                    max="2023-12-31"
                    className="w-40 appearance-none border border-[#7E7F80] text-[#E8EAED] font-medium tracking-wider bg-transparent rounded-l outline-none py-1 px-2 text-sm border-r-0"
                  />
                  <div className="bg-[#8bb4f6] py-1 px-3 rounded-r flex items-center tracking-wider text-black font-medium text-sm cursor-pointer">
                    <BiSearch size={18}/>
                  </div>
                </div>
              </div>
            </div>
            {/* table  */}
            <div>
                <DailyTable/>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Daily;
