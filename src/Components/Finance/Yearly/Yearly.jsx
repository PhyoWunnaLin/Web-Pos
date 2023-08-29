import React from "react";
import MainLayout from "../../../Layouts/MainLayout";
import Banner2 from "../../Banner/Banner2";
import { PiExportDuotone } from "react-icons/pi";
import { MdCalendarMonth, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import YearlyTable from "./YearlyTable";

const Yearly = () => {
  return (
    <>
      <MainLayout>
        <div className=" w-full flex justify-center">
          <div className="w-[95%] my-6 flex flex-col gap-8">
            <Banner2
              title={"Yearly"}
              path1={"Finance"}
              path2={"Yearly"}
              btn2={"Go To Shop"}
              button2={true}
              route={"/sale/cashier"}
            />
            {/* search  */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className=" text-white font-medium text-2xl tracking-wide">
                  This Month Sales Overview
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
                  <div className="flex items-center border border-[#7E7F80] px-2 border-r-0 rounded-l">
                    <div className="flex items-center gap-2">
                        <MdCalendarMonth className="text-[#8bb4f6]"/>
                        <select className=" bg-transparent text-[#E8EAED] py-1 text-sm font-medium tracking-wider outline-none pr-2">
                          <option className="bg-[#161618] hover:bg-[#202124]" value="">2023</option>
                          <option className="bg-[#161618] hover:bg-[#202124]" value="">2022</option>
                          <option className="bg-[#161618] hover:bg-[#202124]" value="">2021</option>
                        </select>
                    </div>
                  </div>
                  <div className="bg-[#8bb4f6] py-1 px-3 rounded-r flex items-center tracking-wider text-black font-medium text-sm cursor-pointer">
                    <BiSearch size={18}/>
                  </div>
                </div>
              </div>
            </div>
            {/* table  */}
            <div>
                <YearlyTable/>
            </div>
            {/* total yearly  */}
            <div className={` flex mt-5  border-[#7E7F80] w-[60%]`}>
                <div className=' border border-[#7E7F80] px-5 py-2 text-end w-auto'>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Days</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wide font-semibold'>12</p>
              </div>

              <div className=' border border-[#7E7F80] px-5 py-2 text-end w-auto'>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Vouchers</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wide font-semibold'>15</p>
              </div>

              <div className=' border-r border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto'>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Cash</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wider font-semibold'>1,400,000</p>
              </div>
              
              <div className=' border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto'>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Tax</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wider font-semibold'>10,000</p>
              </div>

              <div className=' border border-[#7E7F80] py-2 px-5 text-end w-auto '>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wider font-semibold'>1,500,000</p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Yearly;
