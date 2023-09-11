import React, { useEffect, useState } from "react";
import NoContact from "../NoContact/NoContact";
import { MdKeyboardArrowUp } from "react-icons/md";
import { PiNotepadBold } from "react-icons/pi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Cookies from "js-cookie";
import Banner2 from "../Banner/Banner2";
import MainLayout from "../../Layouts/MainLayout";
import Loader from "../Loader/Loader";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useRecentVoucherQuery } from "../../Redux/API/saleApi";
import BarChart from "../Chart/BarChart";
import DonutChartBrandsSell from "../Chart/DonutChartBrandsSell";
import { useGetSaleReportQuery } from "../../Redux/API/reportApi";

const SaleReport = () => {
  const [date, setDate] = useState("");
  const token = Cookies.get("token");
  const { data, isLoading } = useGetSaleReportQuery( {token , date} );
  const productTable = data?.products
  const brandSales = data?.brand_sales
  const todaySales = data?.today_sales
  const barChart = data?.sales?.total_sales
  const sales = data?.sales

  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* banner  */}
          <div className="flex justify-between items-center">
            <Banner2
              title={"Sale"}
              path1={"Report"}
              path2={"Sale"}
            />
           <div>
            <div className="flex border border-[#3F4245] items-center rounded-md">
                  <p
                    onClick={() => setDate("year")}
                    className={`${
                      date === "year" ? "text-[#8AB4F8]" : "text-[#E8EAED]"
                    } font-medium px-5 py-3 tracking-wider cursor-pointer hover:bg-[#24262b] duration-300 border-r border-[#3F4245]`}
                  >
                    Year
                  </p>
                  <p
                    onClick={() => setDate("month")}
                    className={`${
                      date === "month" ? "text-[#8AB4F8]" : "text-[#E8EAED]"
                    } font-medium px-5 py-3 tracking-wider cursor-pointer hover:bg-[#24262b] duration-300 border-r border-[#3F4245]`}
                  >
                    Month
                  </p>
                  <p
                    onClick={() => setDate("")}
                    className={`${
                      date === "" ? "text-[#8AB4F8]" : "text-[#E8EAED]"
                    } font-medium px-5 py-3 tracking-wider cursor-pointer hover:bg-[#24262b] duration-300`}
                  >
                    Week
                  </p>
            </div>
           </div>
          </div>

          {isLoading ? <div><Loader/></div> : <><div className=" flex max-xl:flex-col gap-6 justify-between">
            <div className=" w-[35%] max-xl:w-full px-5 pt-3 pb-6 rounded-md border border-[#3F4245] ">
              <div className="">
                <div className=" text-white mt-2">
                  <div className="flex flex-col gap-1 pb-3 max-xl:pb-4 border-b border-[#383b3d]">
                    <div className="flex justify-between items-center ">
                      <div className=" flex gap-3 items-center">
                        <p className=" text-xl tracking-wider">Today Sale</p>
                      </div>

                      <div className=" flex items-center gap-6">
                        <p className="text-white text-2xl">
                          <BiDotsVerticalRounded />
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-2xl text-white font-semibold tracking-wider mb-1">
                        {todaySales?.total}
                      </p>
                      <p className=" text-[hsl(0,3%,76%)] text-sm tracking-wider">
                        Kyats
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-3 max-xl:py-4 border-b border-[#383b3d]">
                    <div className=" flex gap-3 items-center">
                      <span className=" text-[#8ab4f8]">
                        <PiNotepadBold />
                      </span>
                      <span className=" tracking-wider font-semibold text-[15px]">
                        09988
                      </span>
                    </div>

                    <div className=" flex items-center gap-6">
                      <p>100</p>
                      <div className=" flex items-end gap-2 ">
                        <p>85%</p>
                        <p className="text-[#87dd45] text-2xl">
                          <MdKeyboardArrowUp />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-3 max-xl:py-4 border-b border-[#383b3d]">
                    <div className=" flex gap-3 items-center">
                      <span className=" text-[#8ab4f8]">
                        <PiNotepadBold />
                      </span>
                      <span className=" tracking-wider font-semibold text-[15px]">
                        09989
                      </span>
                    </div>

                    <div className=" flex items-center gap-6">
                      <p>60</p>
                      <div className=" flex items-end gap-2 ">
                        <p>25%</p>
                        <p className="text-[#87dd45] text-2xl">
                          <MdKeyboardArrowUp />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-3 max-xl:py-4">
                    <div className=" flex gap-3 items-center">
                      <span className=" text-[#8ab4f8]">
                        <PiNotepadBold />
                      </span>
                      <span className=" tracking-wider font-semibold text-[15px]">
                        09990
                      </span>
                    </div>

                    <div className=" flex items-center gap-6">
                      <p>30</p>
                      <div className=" flex items-end gap-2 ">
                        <p>10%</p>
                        <p className="text-[#87dd45] text-2xl">
                          <MdKeyboardArrowUp />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-end">
                    <div className="bg-transparent border border-[#7E7F80] py-1 px-4 rounded-md mt-3 text-sm tracking-wide text-white select-none">
                      RECENT SALES
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-[65%] max-xl:w-full rounded-md">
              <BarChart date={date} barChart={barChart} sales={sales}/>
            </div>
          </div>

          {productTable?.length == 0 ? (
            <NoContact
              image={noPd}
              size={"w-[55%]"}
              title1={"No Sale Report !"}
            />
          ) : (
            <div className=" flex flex-col gap-4">
              {/* table  */}
              <div>
                {isLoading ? (
                  <div className=" ">
                    <Loader />
                  </div>
                ) : (
                  <div className=" flex gap-6 max-xl:flex-col">
                    <div className=" w-[65%] max-xl:w-full">
                      <h1 className="  text-white font-medium text-2xl mb-5 tracking-wide">
                        Product Sales
                      </h1>

                      <table className=" text-white max-[600px]:whitespace-nowrap max-[600px]:block max-[600px]:overflow-x-auto w-full">
                        <thead className=" tracking-wider text-sm border border-[#383b3d]">
                          <tr>
                            <th className="p-4 max-[1000px]:pr-5 text-start">
                              NO
                            </th>
                            <th className="p-4 max-[1000px]:pr-24 text-start">
                              NAME
                            </th>
                            <th className="p-4 max-[1000px]:pr-16 text-start">
                              BRAND
                            </th>
                            <th className="p-4 max-[1000px]:pl-10 text-end ">
                              SALE PRICE
                            </th>
                            <th className="p-4 ">...</th>
                          </tr>
                        </thead>
                        <tbody className=" tracking-wide text-sm">
                          {productTable?.map((pd) => {
                            return (
                              <tr
                                key={pd?.id}
                                className=" hover:bg-[#161618] duration-300  border border-[#383b3d]"
                              >
                                <td
                                  onClick={() => route(pd?.id)}
                                  className=" cursor-pointer p-4 text-start"
                                >
                                  {pd?.id}
                                </td>
                                <td
                                  onClick={() => route(pd?.id)}
                                  className=" cursor-pointer p-4 text-start"
                                >
                                  {pd?.name}
                                </td>
                                <td
                                  onClick={() => route(pd?.id)}
                                  className=" cursor-pointer p-4 text-start"
                                >
                                  {pd?.brand_name}
                                </td>
                                <td
                                  onClick={() => route(pd?.id)}
                                  className=" cursor-pointer p-4 text-end"
                                >
                                  {pd?.sale_price}
                                </td>
                                <td className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                                  {/* <span onClick={() => handleDeleteProduct(pd?.id)} className="icon1 hover-scale"><BiTrash className="text-[#e94343]"/></span> */}
                                  <span className=" icon1 hover-scale">
                                    <HiArrowNarrowRight />
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    <div className=" w-[35%] max-xl:w-full">
                    <h1 className="  text-white font-medium text-2xl mb-5 tracking-wide">
                      Brand Sales
                    </h1>
                    <div className="border border-[#383b3d] p-5">
                    <DonutChartBrandsSell brandSales={brandSales}/>
                    </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}</>}
        </div>
      </div>
    </MainLayout>
  );
};

export default SaleReport;
