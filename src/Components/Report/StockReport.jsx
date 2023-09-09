import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Banner2 from "../Banner/Banner2";
import NoContact from "../NoContact/NoContact";
import { BiSearch, BiSolidCircle, BiSolidUserBadge } from "react-icons/bi";
import noPd from "../../assets/noPd3.png";
import { Pagination } from "@mantine/core";
import { useGetProductsQuery } from "../../Redux/API/inventoryApi";
import Cookies from "js-cookie";
import Loader from "../Loader/Loader";
import DonutChart from "../Chart/DonutChart";
import { MdKeyboardArrowUp } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";

const StockReport = () => {
  const token = Cookies.get("token");
  const { data, isLoading, isFetching } = useGetProductsQuery({ token });

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
            path2={"Stock"}
            icon={true}
            btn1={"Go To Shop"}
            btn2={"Add Product"}
            button1={true}
            button2={true}
            route={"/inventory/addProduct"}
            route2={"/sale/cashier"}
          />

          <div className=" flex gap-5 justify-between">
           <div className=" w-[50%]">
             {/* left top total  */}
           <div className=" flex gap-5 mb-5">
              <div className="w-[50%] flex justify-between px-5 py-5 items-center border border-[#3F4245] rounded-md">
                <div className="bg-[#323336] rounded-full h-20 w-20 flex justify-center items-center">
                  <div className="border border-[#8bb4f6] flex justify-center items-center bg-[#434446] rounded-full h-14 w-14">
                    <HiOutlineShoppingCart className=" text-[#8bb4f6]" size={25}/>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#E8EAED] text-2xl font-bold tracking-wide text-end">28,500 k</p>
                  <p className=" text-[#DFDFDF] font-medium tracking-wider text-end text-sm">Total Products</p>
                </div>
              </div>
              <div className="w-[50%] flex justify-between px-5 items-center border border-[#3F4245] rounded-md">
                <div className="bg-[#323336] rounded-full h-20 w-20 flex justify-center items-center">
                  <div className="border border-[#8bb4f6] flex justify-center items-center bg-[#434446] rounded-full h-14 w-14">
                    <BiSolidUserBadge className=" text-[#8bb4f6]" size={25}/>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className=" text-[#E8EAED] text-2xl font-bold tracking-wide text-end">28 k</p>
                  <p className=" text-[#DFDFDF] font-medium tracking-wider text-end text-sm">Total Brands</p>
                </div>
              </div>
            </div>

            {/* left bottom progress  */}
            <div className="px-5 py-6 rounded-md border border-[#3F4245] ">
              <div className="">
                <div className="gap-5 flex items-center justify-between">
                  {/* progress  */}
                  <div className=" w-[75%]">
                    <div className=" flex items-center h-3 rounded-full">
                      <div
                        className={` w-[70%] flex flex-col bg-[#87dd45] h-3 rounded-l-full`}
                      ></div>
                      <div
                        className={` w-[25%] flex flex-col bg-[#f3b34d] h-3 z-20`}
                      ></div>
                      <div
                        className={` w-[15%] flex flex-col bg-[#f19dd3] h-3 rounded-r-full z-10`}
                      ></div>
                    </div>
                  </div>

                  <div className="w-[20%] text-end">
                    <p className=" text-2xl text-white font-semibold tracking-wide">
                      2000
                    </p>
                    <p className=" text-[hsl(0,3%,76%)] tracking-wider">
                      Products
                    </p>
                  </div>
                </div>

                <div className=" text-white mt-2">
                  <div className="flex justify-between items-center py-2 border-b border-[#383b3d]">
                    <div className=" flex gap-3 items-center">
                      <span className=" text-[#87dd45]">
                        <BiSolidCircle />
                      </span>
                      <span className=" tracking-wider font-semibold text-[15px]">
                        Instock
                      </span>
                    </div>

                    <div className=" flex items-center gap-7">
                      <p>100</p>
                      <div className=" flex items-end ">
                        <p>70%</p>
                        <p className="text-[#87dd45] text-2xl">
                          <MdKeyboardArrowUp />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-[#383b3d]">
                    <div className=" flex gap-3 items-center">
                      <span className=" text-[#f3b34d]">
                        <BiSolidCircle />
                      </span>
                      <span className=" tracking-wider font-semibold text-[15px]">
                        Low stock
                      </span>
                    </div>

                    <div className=" flex items-center gap-7">
                      <p>100</p>
                      <div className=" flex items-end ">
                        <p>25%</p>
                        <p className="text-[#87dd45] text-2xl">
                          <MdKeyboardArrowUp />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <div className=" flex gap-3 items-center">
                      <span className=" text-[#f19dd3]">
                        <BiSolidCircle />
                      </span>
                      <span className=" tracking-wider font-semibold text-[15px]">
                        Out of stock
                      </span>
                    </div>

                    <div className=" flex items-center gap-7">
                      <p>100</p>
                      <div className=" flex items-end ">
                        <p>15%</p>
                        <p className="text-[#87dd45] text-2xl">
                          <MdKeyboardArrowUp />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>

            <div className=" w-[50%] rounded-md border border-[#3F4245]">
              <DonutChart />
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
                      // onChange={(e)=> dispatch(setSearchProduct(e.target.value))}
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
                        <select className=" bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded text-white tracking-wider outline-none">
                          <option
                            className="bg-[#161618] hover:bg-[#202124]"
                            value=""
                          >
                            In Stock
                          </option>
                          <option
                            className="bg-[#161618] hover:bg-[#202124]"
                            value=""
                          >
                            Out Of Stock
                          </option>
                          <option
                            className="bg-[#161618] hover:bg-[#202124]"
                            value=""
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
                {isLoading ? (
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
                          // ?.filter((pd) => {
                          //   if (searchProduct === "") {
                          //     return pd;
                          //   } else if (
                          //     pd?.name
                          //       .toLowerCase()
                          //       .includes(searchProduct.toLowerCase())
                          //   ) {
                          //     return pd;
                          //   }
                          // })
                          .map((pd) => {
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
                                  className=" cursor-pointer p-4 text-start"
                                >
                                  {pd?.unit}
                                </td>
                                <td
                                  onClick={() => route(pd?.id)}
                                  className=" cursor-pointer p-4 text-end"
                                >
                                  {pd?.sale_price}
                                </td>
                                <td
                                  onClick={() => route(pd?.id)}
                                  className=" cursor-pointer p-4 text-end"
                                >
                                  {pd?.total_stock}
                                </td>

                                <td className="p-4 flex gap-3 justify-end items-center overflow-hidden">
                                  <div
                                    className={`
                                   ${
                                     pd?.level == "in stock" &&
                                     "bg-[#3e4c38] border-[#80ff22]"
                                   }
                                   ${
                                     pd?.level == "out of stock" &&
                                     "bg-[#4b3f46] border-[#feb2e2]"
                                   }
                                   ${
                                     pd?.level == "low stock" &&
                                     "bg-[#4c4741] border-[#ddb169]"
                                   }
                                   py-1 px-3 border rounded-full`}
                                  >
                                    <span
                                      className={` 
                                    ${
                                      pd?.level == "in stock" &&
                                      "text-[#80ff22]"
                                    }
                                    ${
                                      pd?.level == "out of stock" &&
                                      "text-[#feb2e2]"
                                    }
                                    ${
                                      pd?.level == "low stock" &&
                                      "text-[#ddb169]"
                                    }
                                    font-semibold whitespace-nowrap`}
                                    >
                                      {pd?.level}
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
                        total={2}
                        // value={Number(page)}
                        // onChange={setPage}
                      />
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

export default StockReport;
