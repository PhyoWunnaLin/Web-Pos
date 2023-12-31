import React, { useEffect, useState } from "react";
import MainLayout from "../../../Layouts/MainLayout";
import Banner2 from "../../Banner/Banner2";
import { PiExportDuotone } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import CustomTable from "./CustomTable";
import "../Daily/daily.css";
import { FaRegCalendarCheck } from "react-icons/fa";
import Cookies from "js-cookie";
import Loader from "../../Loader/Loader";
import { Pagination } from "@mantine/core";
import { useCustomQuery, useRecentVoucherQuery } from "../../../Redux/API/saleApi";
import noVoucher from "../../../assets/noVoucher.png"
import NoContact from "../../NoContact/NoContact";

const Custom = () => {
  const p = localStorage.getItem("CustomPage");
  const [page, setPage] = useState(p ? p : 1);
  const date = new Date();
  const nowYear = date.getFullYear();
  const nowMonth = (date.getMonth() + 1).toString();
  const realMonth = nowMonth.length === 1 ? "0" + nowMonth : nowMonth;
  const nowDay = date.getDate().toString();
  const realDay = nowDay.length === 1 ? "0" + nowDay : nowDay;
  const today = nowYear + "-" + realMonth + "-" + realDay;
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const token = Cookies.get("token");
  const {data:custom} = useCustomQuery({token,from,to,page});
  const { data:recent , isLoading , isFetching } = useRecentVoucherQuery({ token ,page, date:today });
  const [currentShow, setCurrentShow] = useState();
  const currentRecentTable = currentShow?.data?.data
  const currentRecentTotal = currentShow?.daily_total_sale;
  const currentRecentTableLength = currentRecentTable?.length
  const [searchShow, setSearchShow] = useState();
  const searchShowTable = searchShow?.data?.data
  const searchShowTotal = searchShow?.daily_total_sale;

  useEffect(() => {
    setCurrentShow(recent)
  },[recent])

  useEffect(() => {
    setPage(1)
  },[])

  const totalPage = searchShow ? searchShow?.data?.last_page : currentShow?.data?.last_page
  const customTotal = searchShowTotal ? searchShowTotal : currentRecentTotal

  useEffect(() => {
    localStorage.setItem("CustomPage", page);
  }, [page]);


  const handleCustom = async (e) => {
    try {
      e.preventDefault();
      setSearchShow(custom);
      setPage(1)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <div className=" w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          <Banner2
            title={"Custom"}
            path1={"Finance"}
            path2={"Custom"}
            btn2={"Go To Shop"}
            button2={true}
            route={"/sale/cashier"}
          />
          {/* search  */}
          <form
            onSubmit={handleCustom}
            className="flex max-[780px]:flex-col max-[780px]:gap-4 max-[780px]:items-start justify-between items-center"
          >
            <div>
              <h1 className=" text-white font-medium text-2xl tracking-wide">
                Today Sales Overview
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
                <div className="relative">
                  <div className="text-[#8bb4f6] absolute top-[8px] left-[12px]">
                    <FaRegCalendarCheck />
                  </div>
                  <input
                    required
                    type="date"
                    id="start"
                    name="trip-start"
                    onChange={(e) => setFrom(e.target.value)}
                    value={from}
                    min="2023-01-01"
                    max={today}
                    className="w-36 appearance-none border border-[#7E7F80] text-[#E8EAED] font-medium tracking-wider bg-transparent rounded-l outline-none py-1 pl-9 text-sm border-r-0"
                  />
                </div>
                <div className=" relative">
                  <div className="text-[#8bb4f6] absolute top-[8px] left-[12px]">
                    <FaRegCalendarCheck />
                  </div>
                  <input
                    required
                    type="date"
                    id="start"
                    name="trip-start"
                    onChange={(e) => setTo(e.target.value)}
                    value={to}
                    min="2023-01-01"
                    max={today}
                    className="w-36 appearance-none border border-[#7E7F80] text-[#E8EAED] font-medium tracking-wider bg-transparent outline-none py-1 pl-9 text-sm border-r-0"
                  />
                </div>
                <button className="bg-[#8bb4f6] py-1 px-3 rounded-r flex items-center tracking-wider text-black font-medium text-sm cursor-pointer">
                  <BiSearch size={18} />
                </button>
              </div>
            </div>
          </form>
          {/* table  */}
          {isLoading || isFetching ? (
            <div>
              <Loader />
            </div>
          ) : (
            <>
            {(currentRecentTableLength || searchShowTable) ? <div>
              <CustomTable
                currentRecentTable={currentRecentTable}
                searchShowTable={searchShowTable}
              />

              {/* total monthly  */}

              <div className={`flex ${totalPage >= 5 ? "max-xl:flex-col-reverse max-xl:items-start" : "max-[810px]:flex-col-reverse max-[810px]:items-start"}  mt-7 gap-5 items-end w-full`}>
                {/* total monthly  */}
                <div className={` flex mt-5  border-[#7E7F80] w-[60%]`}>
                  <div className=" border border-[#7E7F80] px-5 py-2 text-end w-auto">
                    <h1 className=" text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide">
                      Total Vouchers
                    </h1>
                    <p className=" text-white text-xl whitespace-nowrap tracking-wide font-semibold">
                      {customTotal?.total_voucher}
                    </p>
                  </div>

                  <div className=" border-r border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto">
                    <h1 className=" text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide">
                      Total Cash
                    </h1>
                    <p className=" text-white text-xl whitespace-nowrap tracking-wider font-semibold">
                      {customTotal?.total_cash}
                    </p>
                  </div>

                  <div className=" border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto">
                    <h1 className=" text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide">
                      Total Tax
                    </h1>
                    <p className=" text-white text-xl whitespace-nowrap tracking-wider font-semibold">
                      {customTotal?.total_tax}
                    </p>
                  </div>

                  <div className=" border border-[#7E7F80] py-2 px-5 text-end w-auto ">
                    <h1 className=" text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide">
                      Total
                    </h1>
                    <p className=" text-white text-xl whitespace-nowrap tracking-wider font-semibold">
                      {customTotal?.total}
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
            </div> : <div><NoContact image={noVoucher} title1={"No Voucher !"} size={"w-[60%]"}/></div>}
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Custom;
