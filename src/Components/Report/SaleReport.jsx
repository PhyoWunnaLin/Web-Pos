import React, { useEffect, useState } from "react";
import NoContact from "../NoContact/NoContact";
import { MdKeyboardArrowUp } from "react-icons/md";
import { PiNotepadBold } from "react-icons/pi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Cookies from "js-cookie";
import Banner2 from "../Banner/Banner2";
import MainLayout from "../../Layouts/MainLayout";
import Loader from "../Loader/Loader";
import DonutChart from "../Chart/DonutChart";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useRecentVoucherQuery } from "../../Redux/API/saleApi";

const SaleReport = () => {
  const token = Cookies.get("token");
  const {data , isLoading} = useRecentVoucherQuery({token})

  const products = [
    {
      id: 1,
      name: "aa",
      brand_name: "yum yum",
      unit: "kg",
      sale_price: "1000",
      total_stock: "30",
      level: "in stock",
    },
    {
      id: 2,
      name: "cc",
      brand_name: "apple",
      unit: "kg",
      sale_price: "5000",
      total_stock: "0",
      level: "out of stock",
    },
    {
      id: 3,
      name: "bb",
      brand_name: "KFC",
      unit: "kg",
      sale_price: "3000",
      total_stock: "2",
      level: "low stock",
    },
  ];
  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* banner  */}
          <Banner2
            title={"Stock"}
            path1={"Report"}
            path2={"Sale"}
            icon={true}
            btn1={"Go To Shop"}
            btn2={"Add Product"}
            button1={true}
            button2={true}
            route={"/inventory/addProduct"}
            route2={"/sale/cashier"}
          />

          <div className=" flex gap-6 justify-between">
            <div className=" w-[35%] px-5 pt-3 pb-6 rounded-md border border-[#7E7F80] ">
              <div className="">
                <div className=" text-white mt-2">
                  <div className="flex flex-col gap-1 pb-3 border-b border-[#383b3d]">
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
                        <p className="text-2xl text-white font-semibold tracking-wider">239007</p>
                        <p className=" text-[hsl(0,3%,76%)] text-sm tracking-wider">
                          Kyats
                        </p>
                      </div>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#383b3d]">
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

                  <div className="flex justify-between items-center py-3 border-b border-[#383b3d]">
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

                  <div className="flex justify-between items-center py-3">
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
                    <button className="bg-transparent border border-[#fff] py-1 px-3 rounded-md mt-3 text-sm tracking-wide">
                      RECENT SALES
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-[65%] border border-[#7E7F80]">
              <DonutChart />
            </div>
          </div>

          {products?.length == 0 ? (
            <NoContact
              image={noPd}
              size={"w-[55%]"}
              title1={"No Sale Report !"}
            />
          ) : (
            <div className=" flex flex-col gap-4">
              <h1 className=" text-white font-medium text-2xl tracking-wide">
                  Product Sales
              </h1>

              {/* table  */}
              <div>
                {isLoading ? (
                  <div className=" ">
                    <Loader />
                  </div>
                ) : (
                  <div className=" flex gap-6">
                    <div className=" w-[65%]">
                      <table className=" text-white max-[840px]:whitespace-nowrap max-[840px]:block max-[840px]:overflow-x-auto w-full">
                        <thead className=" tracking-wider text-sm border border-[#7E7F80]">
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
                          {products?.map((pd) => {
                              return (
                                <tr
                                  key={pd?.id}
                                  className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
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
                                    <span
                                      className=" icon1 hover-scale"
                                    >
                                      <HiArrowNarrowRight />
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>

                    <div className=" w-[35%] border border-[#7E7F80]">
                      <DonutChart />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default SaleReport;
