import Cookies from 'js-cookie';
import React from 'react'
import { BiEditAlt } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from 'react-icons/ai'
import "../../User/overview.css";
import MainLayout from "../../../Layouts/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../../Dropdown/Dropdown";
import Loader from "../../Loader/Loader";
import Banner2 from '../../Banner/Banner2';
import { useGetProductsQuery } from '../../../Redux/API/inventoryApi';

const Products = () => {
    const token = Cookies.get("token");
    const {data, isLoading} = useGetProductsQuery(token);
    console.log(data);

    const nav = useNavigate();
  const route = () => {
    nav(`/user/detail/`);
  };

    const pd = [
        {id: 1, name: "apple", brand: "melon", salePrice: 300, unit: "s", stock: 100  }
    ]
  return (
    <div>
        <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* banner  */}
          <Banner2
            title={"Products"}
            path1={"Products"}
            path2={"Inventory"}
            path3={"Products"}
            icon={true}
            btn1={"Go To Shop"}
            btn2={"Add Product"}
            button1={true}
            button2={true}
            // route={"/user/create"}
          />
          {/* banner2  */}
          <div className=" flex justify-between items-center">
            <div className=" flex flex-col gap-3">
              <h1 className=" text-white font-medium text-2xl tracking-wide">
                Staff Overview
              </h1>
              <div className="py-2 px-3 flex border-2 border-[#7E7F80] rounded-md">
                <p className=" tracking-wide text-sm font-medium text-[#FFFFFF] border-r-2 cursor-pointer border-[#7E7F80] pr-3">
                  This Month
                </p>
                <p className=" tracking-wide text-sm font-medium text-[#8bb4f6] cursor-pointer pl-3">
                  Last Month
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                />
                <div className="text-white absolute top-[10px] left-[11px]">
                  <BiSearch size={20} />
                </div>
              </div>
              <div className="flex gap-5 items-center justify-end">
                <div className="text-[#7E7F80] flex gap-1 font-medium text-sm tracking-wide">
                  Sort : 
                  <span><Dropdown name={"Last"} /></span>
                </div>
                <div className="text-[#7E7F80] flex gap-1 font-medium text-sm tracking-wide">
                  Filter : 
                  <span><Dropdown name={"All Files"} /></span>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          {/* table  */}
          {isLoading ? (
          <div className=" ">
            <Loader/>
          </div>) 
          : (
            <table className=" text-white table-responsive">
            <thead className=" tracking-wider text-sm border border-[#7E7F80]">
              <tr>
                <th className="p-4 max-[800px]:pr-5 text-start">NO</th>
                <th className="p-4 max-[800px]:pr-24 text-start">NAME</th>
                <th className="p-4 max-[800px]:pr-16 text-start">BRAND</th>
                <th className="p-4 max-[800px]: pr-40 text-start">UNIT</th>
                <th className="p-4 max-[800px]: pr-40 text-start">SALE PRICE</th>
                <th className="p-4 max-[800px]: pr-40 text-start">TOTAL STOCK</th>
                <th className="p-4 ">...</th>
              </tr>
            </thead>
            <tbody className=" tracking-wide text-sm">
              {pd?.map((pd) => {
                return (
                  <tr
                    key={pd?.id}
                    className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                  >
                    <td onClick={route} className=" cursor-pointer p-4 text-start">{pd?.id}</td>
                    <td onClick={route} className=" cursor-pointer p-4 text-start">{pd?.name}</td>
                    <td onClick={route} className=" cursor-pointer p-4 text-start">{pd?.brand}</td>
                    <td onClick={route} className=" cursor-pointer p-4 text-start">{pd?.unit}</td>
                    <td onClick={route} className=" cursor-pointer p-4 text-start">{pd?.salePrice}</td>
                    <td onClick={route} className=" cursor-pointer p-4 text-start">{pd?.stock}</td>
                    
                    <td className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                      <Link to={'/user/overview'}>
                      <p className="hover-scale icon1">
                        <AiOutlinePlus />
                      </p>
                      </Link>

                      <span className=" icon1 hover-scale">
                        <BiEditAlt />
                      </span>
                      <span className=" icon1 hover-scale">
                        <HiArrowNarrowRight />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          )}
        </div>
      </div>
    </MainLayout>
    </div>
  )
}

export default Products