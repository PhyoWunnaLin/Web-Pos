import React from 'react'
import { BiSearch } from "react-icons/bi";
import MainLayout from "../../../Layouts/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import Banner2 from '../../Banner/Banner2';
import { useGetProductsQuery } from '../../../Redux/API/inventoryApi';
import { TfiMenuAlt } from 'react-icons/tfi';
import { TbBorderAll } from 'react-icons/tb';
import ProductTable from './ProductTable';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../../Redux/Services/productSlice';
import ProductCard from './ProductCard';

const Products = () => {
  const state = useSelector((state) => state.productSlice.active);
  const active = localStorage.getItem("productActive");
  const dispatch = useDispatch();
  
  return (
    <div>
        <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* banner  */}
          <Banner2
            title={"Products"}
            path1={"Inventory"}
            path2={"Products"}
            icon={true}
            btn1={"Go To Shop"}
            btn2={"Add Product"}
            button1={true}
            button2={true}
            // route2={"/inventory/addProduct"}
          />
          {/* banner2  */}
          <div className='flex flex-col gap-3'>
            <h1 className=" text-white font-medium text-2xl tracking-wide">
                  Product Overview
            </h1>
            <div className=" flex justify-between items-center">           
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
              <div className="flex gap-5 items-center justify-end mt-1">
                  <div className="text-[#7E7F80] flex gap-1 font-medium text-sm tracking-wide">
                    Sort : 
                    <select className=" bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded text-white tracking-wider outline-none">
                      <option className="bg-[#161618] hover:bg-[#202124]" value="">Last</option>
                      <option className="bg-[#161618] hover:bg-[#202124]" value="">first</option>
                    </select>
                  </div>
                  <div className="text-[#7E7F80] flex gap-1 font-medium text-sm tracking-wide">
                    Filter : 
                    <select className=" bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded-md text-white tracking-wider outline-none">
                      <option className="bg-[#161618] hover:bg-[#202124]" value="">All Files</option>
                      <option className="bg-[#161618] hover:bg-[#202124]" value="">Half Files</option>
                    </select>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => dispatch(setActive("1"))}
                      className={`${
                        active != "2" && "text-[#8AB4F8]"
                      } flex justify-center items-center w-10 h-10 rounded-l-md border border-[#7E7F80] text-[#7E7F80]`}
                    >
                      <TfiMenuAlt size={20} />
                    </button>
                    <button
                      onClick={() => dispatch(setActive("2"))}
                      className={`${
                        active == 2 && "text-[#8AB4F8]"
                      } flex justify-center items-center w-10 h-10 rounded-r-md border-l-0 border border-[#7E7F80] text-[#7E7F80]`}
                    >
                      <TbBorderAll size={20} />
                    </button>
                  </div>
              </div>
            </div>
          </div>
          {/* table  */}
          <div>
            {active == "2" ? <ProductCard/> : <ProductTable/>}
          </div>
        </div>
      </div>
    </MainLayout>
    </div>
  )
}

export default Products