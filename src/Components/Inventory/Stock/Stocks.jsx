import React, { useEffect, useRef, useState } from "react";
import Loader from "../../Loader/Loader";
import MainLayout from "../../../Layouts/MainLayout";
import Banner2 from "../../Banner/Banner2";
import NoContact from "../../NoContact/NoContact";
import { BiSearch } from "react-icons/bi";
import { useGetStocksQuery } from "../../../Redux/API/inventoryApi";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import "../../User/overview.css";
import AddStock from "./AddStock";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchStock } from "../../../Redux/Services/productSlice";
import noPd from "../../../assets/noPd3.png";
import { Pagination } from "@mantine/core";

const Stocks = () => {
  const [open, setOpen] = useState(false);
  const token = Cookies.get("token");
  const p = localStorage.getItem("stockPage");
  const [page, setPage] = useState(p ? p : 1);
  const { data, isLoading, isFetching } = useGetStocksQuery({ token, page });
  const totalPage = data?.meta?.last_page
  const stocks = data?.data;
  const dispatch = useDispatch();
  const searchStock = useSelector((state) => state.productSlice.searchStock);
  // console.log(totalPage);

  useEffect(() => {
    localStorage.setItem("stockPage", page);
  }, [page]);

  const nav = useNavigate();

  const route = (id) => {
    nav(`/stock/detail/${id}`);
  };

  return (
    <>
      <MainLayout>
        <div className="bg-[#202124] w-full flex justify-center">
          <div className="w-[95%] my-6 flex flex-col gap-8">
            {/* banner  */}
            <div className=" flex justify-between items-center">
              <Banner2
                title={"Stock Control"}
                path1={"Inventory"}
                path2={"Stock Control"}
                icon={true}
              />
            </div>
            {stocks?.length == 0 ? (
              <NoContact
                image={noPd}
                size={"w-[55%]"}
                title1={"No Stock !"}
                title2={"Please ADD Stock"}
              />
            ) : (
              <div className=" flex flex-col gap-8 ">
                {/* banner2  */}
                <div className="flex flex-col gap-3">
                  <h1 className=" text-white font-medium text-2xl tracking-wide">
                    Stock Overview
                  </h1>
                  <div className=" flex justify-between items-center max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-3">
                    <form className="relative">
                      <input
                        onChange={(e) =>
                          dispatch(setSearchStock(e.target.value))
                        }
                        type="text"
                        placeholder="Search"
                        className="search-input"
                      />
                      <div className="text-white absolute top-[10px] left-[11px]">
                        <BiSearch size={20} />
                      </div>
                    </form>
                    <div className="flex gap-5 items-center justify-end mt-1">
                      <div className="text-[#7E7F80] flex gap-1 font-medium text-sm tracking-wide">
                        Sort :
                        <select className=" bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded text-white tracking-wider outline-none">
                          <option
                            className="bg-[#161618] hover:bg-[#202124]"
                            value=""
                          >
                            Last
                          </option>
                          <option
                            className="bg-[#161618] hover:bg-[#202124]"
                            value=""
                          >
                            first
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
                {/* table  */}
                <div>
                  {isFetching ? (
                    <div className=" ">
                      <Loader />
                    </div>
                  ) : (
                    <div>
                      <table className=" text-white max-[970px]:whitespace-nowrap max-[970px]:block max-[970px]:overflow-x-auto w-full ">
                        <thead className=" tracking-wider text-sm border border-[#7E7F80]">
                          <tr>
                            <th className="p-4 max-[1000px]:pr-5 text-start">
                              NO
                            </th>
                            <th className="p-4 max-[1000px]:pr-40 text-start">
                              PRODUCT NAME
                            </th>
                            <th className="p-4 max-[1000px]:pr-20 text-start">
                              USER NAME
                            </th>
                            <th className="p-4 max-[1000px]:pl-10 text-end">
                              ADDED QUANTITY
                            </th>
                            <th className="p-4 max-[1000px]:pr-20 text-start">
                              CREATED AT
                            </th>
                          </tr>
                        </thead>
                        <tbody className=" tracking-wide text-sm">
                          {stocks
                            ?.filter((stock) => {
                              if (searchStock === "") {
                                return stock;
                              } else if (
                                stock?.product_name
                                  .toLowerCase()
                                  .includes(searchStock.toLowerCase())
                              ) {
                                return stock;
                              }
                            })
                            .map((stock) => {
                              return (
                                <tr
                                  key={stock?.id}
                                  className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                                >
                                  <td
                                    onClick={() => route(stock?.id)}
                                    className=" cursor-pointer p-4 text-start"
                                  >
                                    {stock?.id}
                                  </td>
                                  <td
                                    onClick={() => route(stock?.id)}
                                    className=" cursor-pointer p-4 text-start"
                                  >
                                    {stock?.product_name}
                                  </td>
                                  <td
                                    onClick={() => route(stock?.id)}
                                    className=" cursor-pointer p-4 text-start"
                                  >
                                    {stock?.user_name}
                                  </td>
                                  <td
                                    onClick={() => route(stock?.id)}
                                    className=" cursor-pointer p-4 text-end"
                                  >
                                    {stock?.quantity}
                                  </td>
                                  <td
                                    onClick={() => route(stock?.id)}
                                    className=" cursor-pointer p-4 text-start"
                                  >
                                    {stock?.created_at}
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
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Stocks;
