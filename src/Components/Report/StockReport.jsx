import React, { useEffect, useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import Banner2 from "../Banner/Banner2";
import NoContact from "../NoContact/NoContact";
import { BiSearch, BiSolidCircle, BiSolidUserBadge } from "react-icons/bi";
import noPd from "../../assets/noPd3.png";
import { Pagination } from "@mantine/core";
import Cookies from "js-cookie";
import Loader from "../Loader/Loader";
import { MdKeyboardArrowUp } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import DonutChartBestSeller from "../Chart/DonutChartBestSeller";
import {
  useGetStockBrandReportQuery,
  useGetStockReportQuery,
} from "../../Redux/API/reportApi";

const StockReport = () => {
  const token = Cookies.get("token");
  const [page, setPage] = useState(1);
  const [stockLevel, setStockLevel] = useState("");
  const [search, setSearch] = useState("");
  const { data, isLoading, isFetching } = useGetStockReportQuery({
    token,
    page,
    stockLevel,
  });
  const { data: stockBrandReport } = useGetStockBrandReportQuery(token);
  console.log(data);

  const inStockProgress = parseInt(stockBrandReport?.stocks?.in_stock);
  const lowStockProgress = parseInt(stockBrandReport?.stocks?.low_stock);
  const outOfStockProgress = parseInt(stockBrandReport?.stocks?.out_of_stock);
  const brandChart = stockBrandReport?.brands;

  const products = data?.data;

  const totalPage = data?.meta?.last_page;

  useEffect(() => {
    setPage(1)
  },[stockLevel])

  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* banner  */}
          <Banner2
            title={"Stock"}
            path1={"Report"}
            path2={"Stock"}
            icon={true}
            btn1={"Go To Shop"}
            btn2={"Add Product"}
            button1={true}
            button2={true}
            route={"/inventory/addProduct"}
            route2={"/sale/cashier"}
          />

          {isLoading ? <div><Loader/></div> : <><div className=" flex max-xl:flex-col gap-5 justify-between">
            <div className=" w-[50%] max-xl:w-full">
              {/* left top total  */}
              <div className=" flex gap-5 mb-5 max-sm:flex-col">
                <div className="w-[50%] max-sm:w-[100%] flex justify-between px-5 py-5 items-center border border-[#3F4245] rounded-md">
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
                      {stockBrandReport?.total_products}{" "}
                    </p>
                    <p className=" text-[#DFDFDF] font-medium tracking-wider text-end text-sm">
                      Total Products
                    </p>
                  </div>
                </div>
                <div className="w-[50%] max-sm:w-[100%] flex justify-between px-5 py-5 items-center border border-[#3F4245] rounded-md">
                  <div className="bg-[#323336] rounded-full h-20 w-20 flex justify-center items-center">
                    <div className="border border-[#8bb4f6] flex justify-center items-center bg-[#434446] rounded-full h-14 w-14">
                      <BiSolidUserBadge className=" text-[#8bb4f6]" size={25} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className=" text-[#E8EAED] text-2xl font-bold tracking-wide text-end">
                      {stockBrandReport?.total_brands}
                    </p>
                    <p className=" text-[#DFDFDF] font-medium tracking-wider text-end text-sm">
                      Total Brands
                    </p>
                  </div>
                </div>
              </div>

              {/* left bottom progress  */}
              <div className="px-5 py-[38px] rounded-md border border-[#3F4245] ">
                <div className="">
                  <div className="gap-5 flex items-center justify-between">
                    {/* progress  */}
                    <div className=" w-[100%]">
                      <div className=" flex items-center h-3 rounded-full">
                        <div
                          className={` flex flex-col bg-[#87dd45]
                          ${lowStockProgress == 0 && outOfStockProgress == 0 && "rounded-r-full"}
                          h-3 rounded-l-full`}
                          style={{width:`${inStockProgress}%`}}
                        ></div>
                        <div
                          className={` flex flex-col bg-[#f3b34d] 
                          ${inStockProgress == 0 && "rounded-l-full"} 
                          ${outOfStockProgress == 0 && "rounded-r-full"} h-3 z-20`}
                          style={{width:`${lowStockProgress}%`}}
                        ></div>
                        <div
                          className={` flex flex-col bg-[#f19dd3]
                          ${inStockProgress == 0 && lowStockProgress == 0 && "rounded-l-full"}
                          h-3 rounded-r-full z-10`}
                          style={{width:`${outOfStockProgress}%`}}
                        ></div>
                      </div>
                    </div>

                    <div className="w-[20%] text-end">
                      <p className=" text-2xl text-white font-semibold tracking-wide">
                        {stockBrandReport?.total_products}
                      </p>
                      <p className=" text-[hsl(0,3%,76%)] tracking-wider">
                        Products
                      </p>
                    </div>
                  </div>

                  <div className=" text-white mt-2">
                    <div className="flex justify-between items-center py-[10px] border-b border-[#383b3d]">
                      <div className=" flex gap-3 items-center w-[78%]">
                        <span className=" text-[#87dd45]">
                          <BiSolidCircle />
                        </span>
                        <span className=" tracking-wider font-semibold text-[15px]">
                          Instock
                        </span>
                      </div>

                      <div className=" flex justify-between items-center w-[22%]">
                        <p>100</p>
                        <div className=" flex items-end ">
                          <p className="text-end">{inStockProgress}%</p>
                          <p className="text-[#87dd45] text-2xl text-end">
                            <MdKeyboardArrowUp />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-[10px] border-b border-[#383b3d]">
                      <div className=" flex gap-3 items-center w-[78%]">
                        <span className=" text-[#f3b34d]">
                          <BiSolidCircle />
                        </span>
                        <span className=" tracking-wider font-semibold text-[15px]">
                          Low stock
                        </span>
                      </div>

                      <div className=" justify-between flex items-center w-[22%]">
                        <p>100</p>
                        <div className=" flex items-end ">
                          <p className="text-end">{lowStockProgress}%</p>
                          <p className="text-[#87dd45] text-2xl text-end">
                            <MdKeyboardArrowUp />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-[10px]">
                      <div className=" flex gap-3 items-center w-[78%]">
                        <span className=" text-[#f19dd3]">
                          <BiSolidCircle />
                        </span>
                        <span className=" tracking-wider font-semibold text-[15px]">
                          Out of stock
                        </span>
                      </div>

                      <div className=" justify-between flex items-center w-[22%]">
                        <p>100</p>
                        <div className=" flex items-end ">
                          <p className="text-end">{outOfStockProgress}%</p>
                          <p className="text-[#87dd45] text-2xl text-end">
                            <MdKeyboardArrowUp />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* chart  */}
            <div className=" w-[50%] max-xl:w-full rounded-md border border-[#3F4245] p-5 max-xl:px-10 max-xl:py-7 max-xl:p-5">
              <DonutChartBestSeller chart={brandChart} />
            </div>
          </div>

          {products?.length == 0 ? (
            <NoContact
              image={noPd}
              size={"w-[55%]"}
              title1={"No Stock Report !"}
            />
          ) : (
            <div className=" flex flex-col gap-8">
              {/* banner2  */}
              <div className="flex flex-col gap-4">
                <h1 className=" text-white font-medium text-2xl tracking-wide">
                  Stock Overview
                </h1>
                <div className=" flex max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-1 justify-between items-center">
                  <form className="relative">
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      placeholder="Search"
                      className="search-input"
                    />
                    <div className="text-white absolute top-[10px] left-[11px]">
                      <BiSearch size={20} />
                    </div>
                  </form>
                  <div className="flex gap-5 items-center max-[680px]:w-full max-[680px]:justify-between justify-end mt-1">
                    <div className="flex gap-5 items-center justify-end mt-1">
                      <div className="text-[#7E7F80] flex gap-1 font-medium text-sm tracking-wide">
                        Sort :
                        <select
                          onChange={(e) => setStockLevel(e.target.value)}
                          className=" bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded text-white tracking-wider outline-none"
                        >
                          <option
                            className="bg-[#161618] hover:bg-[#202124]"
                            value=""
                          >
                            All Stocks
                          </option>
                          <option
                            className="bg-[#161618] hover:bg-[#202124]"
                            value="in-stock"
                          >
                            In Stock
                          </option>
                          <option
                            className="bg-[#161618] hover:bg-[#202124]"
                            value="out-of-stock"
                          >
                            Out Of Stock
                          </option>
                          <option
                            className="bg-[#161618] hover:bg-[#202124]"
                            value="low-stock"
                          >
                            Low Stock
                          </option>
                        </select>
                      </div>
                      <div className="text-[#7E7F80] flex gap-1 font-medium text-sm tracking-wide">
                        Filter :
                        <select className=" bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded-md text-white tracking-wider outline-none">
                          <option
                            className="bg-[#161618] hover:bg-[#202124]"
                            value=""
                          >
                            All Files
                          </option>
                          <option
                            className="bg-[#161618] hover:bg-[#202124]"
                            value=""
                          >
                            Half Files
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* table  */}
              <div>
                {isFetching ? (
                  <div className=" ">
                    <Loader />
                  </div>
                ) : (
                  <div>
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
                          <th className="p-4 max-[1000px]:pr-10 text-start">
                            UNIT
                          </th>
                          <th className="p-4 max-[1000px]:pl-10 text-end ">
                            SALE PRICE
                          </th>
                          <th className="p-4 max-[1000px]:pl-10 text-end">
                            TOTAL STOCK
                          </th>
                          <th className="p-4 max-[1000px]:pl-10 text-end">
                            STOCK LEVEL
                          </th>
                        </tr>
                      </thead>
                      <tbody className=" tracking-wide text-sm">
                        {products
                          ?.filter((pd) => {
                            if (search === "") {
                              return pd;
                            } else if (
                              pd?.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            ) {
                              return pd;
                            }
                          })
                          .map((pd) => {
                            return (
                              <tr
                                key={pd?.id}
                                className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                              >
                                <td
                                  className=" p-4 text-start"
                                >
                                  {pd?.id}
                                </td>
                                <td
                                  className=" p-4 text-start"
                                >
                                  {pd?.name}
                                </td>
                                <td
                                  className=" p-4 text-start"
                                >
                                  {pd?.brand_name}
                                </td>
                                <td
                                  className=" p-4 text-start"
                                >
                                  {pd?.unit}
                                </td>
                                <td
                                  className=" p-4 text-end"
                                >
                                  {pd?.sale_price}
                                </td>
                                <td
                                  className=" p-4 text-end"
                                >
                                  {pd?.total_stock}
                                </td>

                                <td className="p-4 flex gap-3 justify-end items-center overflow-hidden select-none">
                                  <div
                                    className={`
                                   ${
                                     pd?.stock_level == "In Stock" &&
                                     "bg-[#3e4c38] border-[#80ff22]"
                                   }
                                   ${
                                     pd?.stock_level == "Out of Stock" &&
                                     "bg-[#4b3f46] border-[#feb2e2]"
                                   }
                                   ${
                                     pd?.stock_level == "Low Stock" &&
                                     "bg-[#4c4741] border-[#ddb169]"
                                   }
                                   py-1 px-3 border rounded-full`}
                                  >
                                    <span
                                      className={` 
                                    ${
                                      pd?.stock_level == "In Stock" &&
                                      "text-[#80ff22]"
                                    }
                                    ${
                                      pd?.stock_level == "Out of Stock" &&
                                      "text-[#feb2e2]"
                                    }
                                    ${
                                      pd?.stock_level == "Low Stock" &&
                                      "text-[#ddb169]"
                                    }
                                    font-semibold whitespace-nowrap`}
                                    >
                                      {pd?.stock_level}
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>

                    {/* Pagination */}
                    <div className=" flex justify-end mt-8 ">
                      <Pagination
                        total={totalPage}
                        value={Number(page)}
                        onChange={setPage}
                      />
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

export default StockReport;
