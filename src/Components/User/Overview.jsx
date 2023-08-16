import React from "react";
import {FaMinus} from "react-icons/fa"
import {BiEditAlt} from "react-icons/bi"
import {HiArrowNarrowRight} from "react-icons/hi"
import "./overview.css"
import Banner from "../Banner/Banner";
import MainLayout from "../../Layouts/MainLayout";

const Overview = () => {
    const user = [
        {id:1 , name: "Messi", position: "Admin", email: "messi@gmail.com"},
        {id:2 , name: "Messi", position: "Admin", email: "messi@gmail.com"},
        {id:3 , name: "Messi", position: "Admin", email: "messi@gmail.com"},
        {id:4 , name: "Messi", position: "Admin", email: "messi@gmail.com"},
    ]
  return (
    <MainLayout>
    <div className="bg-[#202124] h-screen w-full flex justify-center">
      <div className="w-[95%] mt-6 flex flex-col gap-8">
        {/* banner  */}
            <Banner title={"User"} path1={"Overview"} icon={true} btn={"Create User"}/>
            
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
                {user.map(user => {
                    return(
                        <tr key={user.id} className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]">
                            <th className="p-4 text-start">{user.id}</th>
                            <th className="p-4 text-start">{user.name}</th>
                            <th className="p-4 text-start">{user.position}</th>
                            <th className="p-4 text-start">{user.email}</th>
                            <th className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                                <span className=" icon1 hover-up"><FaMinus/></span>
                                <span className=" icon1 hover-up"><BiEditAlt/></span>
                                <span className=" icon1 hover-up"><HiArrowNarrowRight/></span>
                            </th>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
      </div>
    </div>
    </MainLayout>
  );
};

export default Overview;
