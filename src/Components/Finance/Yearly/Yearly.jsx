import React, { useEffect, useState } from "react";
import MainLayout from "../../../Layouts/MainLayout";
import Banner2 from "../../Banner/Banner2";
import { PiExportDuotone } from "react-icons/pi";
import { MdCalendarMonth, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import YearlyTable from "./YearlyTable";
import Cookies from "js-cookie";
import { useYearlyQuery } from "../../../Redux/API/saleApi";
import Loader from "../../Loader/Loader";
import { Pagination } from "@mantine/core";

const Yearly = () => {
  const token = Cookies.get("token");
  const p = localStorage.getItem("YearlyPage")
  const [page,setPage] = useState(p ? p : 1)
  const date = new Date();
  const [year , setYear] = useState(date.getFullYear());
  const [searchYear , setSearchYear] = useState(date.getFullYear());
  const [currentYear , setCurrentYear] = useState();
  const yearlyTable = currentYear?.data
  const yearlyTotal = currentYear?.yearly_sale
  const {data, isLoading, isFetching} = useYearlyQuery({token,year,page});

  // pagination 

  const totalPage = currentYear?.data?.last_page
  // console.log(totalPage);


  useEffect(() => {
    localStorage.setItem("YearlyPage",page)
  },[page])

  useEffect(() => {
    setPage(1)
  },[])

  useEffect(() => {
    setCurrentYear(data)
  },[data])

  const handleSearch = async () => {
   setYear(searchYear)
   setPage(1)
  }

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
                        <select onChange={(e) => setSearchYear(e.target.value)} className=" bg-transparent text-[#E8EAED] py-1 text-sm font-medium tracking-wider outline-none pr-2">
                          <option className="bg-[#161618] hover:bg-[#202124]" value="2023">2023</option>
                          <option className="bg-[#161618] hover:bg-[#202124]" value="2022">2022</option>
                        </select>
                    </div>
                  </div>
                  <div 
                  onClick={handleSearch}
                   className="bg-[#8bb4f6] py-1 px-3 rounded-r flex items-center tracking-wider text-black font-medium text-sm cursor-pointer">
                    <BiSearch size={18}/>
                  </div>
                </div>
              </div>
            </div>
            {/* table  */}
            {isFetching ? <div><Loader/></div> : 
            <div>
                <YearlyTable yearlyTable={yearlyTable} yearlyTotal={yearlyTotal}/>

                <div
                  className={`flex gap-5 items-end w-full`}
                >
                  {/* TOTAL Yearly  */}
                  <div className={` flex mt-5  border-[#7E7F80] w-[60%]`}>
                        <div className=' border border-[#7E7F80] px-5 py-2 text-end w-auto'>
                          <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Vouchers</h1>
                          <p className=' text-white text-xl whitespace-nowrap tracking-wide font-semibold'>{yearlyTotal?.total_voucher}</p>
                        </div>

                        <div className=' border-r border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto'>
                          <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Cash</h1>
                          <p className=' text-white text-xl whitespace-nowrap tracking-wider font-semibold'>{yearlyTotal?.total_cash}</p>
                        </div>
                        
                        <div className=' border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto'>
                          <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Tax</h1>
                          <p className=' text-white text-xl whitespace-nowrap tracking-wider font-semibold'>{yearlyTotal?.total_tax}</p>
                        </div>

                        <div className=' border border-[#7E7F80] py-2 px-5 text-end w-auto '>
                          <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total</h1>
                          <p className=' text-white text-xl whitespace-nowrap tracking-wider font-semibold'>{yearlyTotal?.total}</p>
                        </div>
                </div>

                  {/* Pagination */}
                  <div className=" ml-auto mb-1">
                    <Pagination total={1} value={Number(page)} onChange={setPage}/>
                  </div>
                </div>
      

            </div>}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Yearly;
