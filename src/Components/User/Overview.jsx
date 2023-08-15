import React from "react";
import {FiPlus} from "react-icons/fi"
import {FaMinus} from "react-icons/fa"
import {BiEditAlt} from "react-icons/bi"
import {HiArrowNarrowRight} from "react-icons/hi"
import "./overview.css"

const Overview = () => {
  return (
    <div className="bg-[#202124] h-screen w-full flex justify-center">
      <div className="w-[95%] mt-6 flex flex-col gap-8">
        {/* header  */}
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
                <h1 className=" text-white font-medium text-2xl tracking-wide">User</h1>
                <p className=" text-sm text-[#7E7F80] font-medium tracking-wide">User <span className="text-[#8AB4F8]">/</span> Overview</p>
            </div>
            <button className="btn flex gap-2 items-center">
               <span><FiPlus/></span> Create User
            </button>
        </div>
        {/* table  */}
        <table className=" text-white table-responsive">
            <thead className=" tracking-wider text-sm border border-[#7E7F80]">
                <tr>
                    <th className="p-4 max-[800px]:pr-5 text-start">NO</th>
                    <th className="p-4 max-[800px]:pr-24 text-start">NAME</th>
                    <th className="p-4 max-[800px]:pr-16 text-start">POSITION</th>
                    <th className="p-4 max-[800px]: pr-40 text-start">EMAIL</th>
                    <th className="p-4 ">...</th>
                </tr>
            </thead>
            <tbody className=" tracking-wide text-sm">
                <tr className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]">
                    <th className="p-4 text-start">1</th>
                    <th className="p-4 text-start">Messi</th>
                    <th className="p-4 text-start">Admin</th>
                    <th className="p-4 text-start">messi@gmail.com</th>
                    <th className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                        <span className="bg-[#7E7F80] p-2 rounded-full cursor-pointer hover-up duration-300"><FaMinus/></span>
                        <span className="bg-[#7E7F80] p-2 rounded-full cursor-pointer hover-up duration-300"><BiEditAlt/></span>
                        <span className="bg-[#7E7F80] p-2 rounded-full cursor-pointer hover-up duration-300"><HiArrowNarrowRight/></span>
                    </th>
                </tr>
                <tr className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]">
                    <th className="p-4 text-start">1</th>
                    <th className="p-4 text-start">Messi</th>
                    <th className="p-4 text-start">Admin</th>
                    <th className="p-4 text-start">messi@gmail.com</th>
                    <th className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                        <span className="bg-[#7E7F80] p-2 rounded-full cursor-pointer hover-up duration-300"><FaMinus/></span>
                        <span className="bg-[#7E7F80] p-2 rounded-full cursor-pointer hover-up duration-300"><BiEditAlt/></span>
                        <span className="bg-[#7E7F80] p-2 rounded-full cursor-pointer hover-up duration-300"><HiArrowNarrowRight/></span>
                    </th>
                </tr>
                <tr className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]">
                    <th className="p-4 text-start">1</th>
                    <th className="p-4 text-start">Messi</th>
                    <th className="p-4 text-start">Admin</th>
                    <th className="p-4 text-start">messi@gmail.com</th>
                    <th className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                        <span className="bg-[#7E7F80] p-2 rounded-full cursor-pointer hover-up duration-300"><FaMinus/></span>
                        <span className="bg-[#7E7F80] p-2 rounded-full cursor-pointer hover-up duration-300"><BiEditAlt/></span>
                        <span className="bg-[#7E7F80] p-2 rounded-full cursor-pointer hover-up duration-300"><HiArrowNarrowRight/></span>
                    </th>
                </tr>
                <tr className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]">
                    <th className="p-4 text-start">1</th>
                    <th className="p-4 text-start">Messi</th>
                    <th className="p-4 text-start">Admin</th>
                    <th className="p-4 text-start">messi@gmail.com</th>
                    <th className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                        <span className="bg-[#7E7F80] p-2 rounded-full cursor-pointer hover-up duration-300"><FaMinus/></span>
                        <span className="bg-[#7E7F80] p-2 rounded-full cursor-pointer hover-up duration-300"><BiEditAlt/></span>
                        <span className="bg-[#7E7F80] p-2 rounded-full cursor-pointer hover-up duration-300"><HiArrowNarrowRight/></span>
                    </th>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
