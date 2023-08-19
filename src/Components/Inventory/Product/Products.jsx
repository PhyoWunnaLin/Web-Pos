import React from 'react'
import { BiSearch } from "react-icons/bi";
import MainLayout from "../../../Layouts/MainLayout";
import Dropdown from "../../Dropdown/Dropdown";
import Banner2 from '../../Banner/Banner2';
import ProductTable from './ProductTable';

const Products = () => {
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
          <ProductTable/>
        </div>
      </div>
    </MainLayout>
    </div>
  )
}

export default Products