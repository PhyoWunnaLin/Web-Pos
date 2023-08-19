import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import { HiBan } from 'react-icons/hi'
import "./overview.css";
import Banner from "../Banner/Banner";
import MainLayout from "../../Layouts/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";
import "./successAlert.css"
import Cookies from "js-cookie";
import { useBanUserMutation, useGetUserListQuery } from "../../Redux/API/userApi";
import NoContact from "../NoContact/NoContact";

const Overview = () => {
  const token = Cookies.get("token")
  const {data, isLoading} = useGetUserListQuery(token);
  const [banUser] = useBanUserMutation();
  // console.log(data?.users?.length);
  const length = data?.users?.length
  const userList = data?.users;

  const nav = useNavigate();
  
  const route = (id) => {
    nav(`/user/detail/${id}`);
  };
  

  const banHandler = () => {
    Swal.fire({
      title: 'Do you want to ban this user?',
      icon: 'warning',
      iconColor: "#E64848",
      background: "#161618",
      showCancelButton: true,
      confirmButtonColor: '#E64848',
      cancelButtonColor: '#24262b',
      confirmButtonText: 'Ban User'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          customClass : {
            title: 'swal2-title',
            popup: 'custom-swal-popup'
          },
          title: "Successfully baned an account",
          icon: "success",
          confirmButtonText: "SEE ALL USERS",
          width: 400,
          background: "#161618",
        })
      }
    })
  }

  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* banner  */}
          <Banner
            title={"User"}
            path1={"Overview"}
            icon={true}
            btn={"Create User"}
            button={true}
            route={"/user/create"}
          />
          {length == 0 ? 
          
          // no user 
          <NoContact image={"https://img.freepik.com/free-icon/user_318-215753.jpg?t=st=1692434065~exp=1692434665~hmac=2980c4d803170dbf42c0125a36bc3a7bb74abd9db2f59410965813f7c678e325"} title1={"No User !"} title2={"Please Create User"} />

           : 
          
          <div className="flex flex-col gap-8">
            {/* banner2  */}
          <div className="flex flex-col gap-3">
            <h1 className=" text-white font-medium text-2xl tracking-wide">
                  Staff Overview
            </h1>
            <div className=" flex justify-between items-center">
              <form className="relative">
                  <input
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
              </div>
            </div>
          </div>
          {/* table  */}
          {isLoading ? (
          <div className=" ">
            <Loader/>
          </div>) 
          : (
            <table className=" text-white table-responsive w-full">
            <thead className=" tracking-wider text-sm border border-[#7E7F80]">
              <tr>
                <th className="p-4 text-start">NO</th>
                <th className="p-4 text-start">NAME</th>
                <th className="p-4 text-start">POSITION</th>
                <th className="p-4 text-start">EMAIL</th>
                <th className="p-4 ">...</th>
              </tr>
            </thead>
            <tbody className=" tracking-wide text-sm">
              {userList?.map((user) => {
                return (
                  <tr
                    key={user?.id}
                    className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                  >
                    <td onClick={() => route(user.id)} className=" cursor-pointer p-4 text-start">{user?.id}</td>
                    <td onClick={() => route(user.id)} className=" cursor-pointer p-4 text-start">{user?.name}</td>
                    <td onClick={() => route(user.id)} className=" cursor-pointer p-4 text-start">{user?.role}</td>
                    <td onClick={() => route(user.id)} className=" cursor-pointer p-4 text-start">{user?.email}</td>
                    
                    <td className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                      <Link to={'/user/overview'}>
                      <p onClick={banHandler} className="hover-scale icon1 text-[#e94343]">
                        <HiBan />
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
          </div>}
        </div>
      </div>
    </MainLayout>
  );
};

export default Overview;
