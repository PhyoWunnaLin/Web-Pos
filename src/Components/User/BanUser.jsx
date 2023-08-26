import React, { useEffect } from 'react'
import "./overview.css";
import { BiSearch } from "react-icons/bi";
import MainLayout from "../../Layouts/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import Banner2 from '../Banner/Banner2';
import NoContact from '../NoContact/NoContact';
import Cookies from "js-cookie"
import Swal from "sweetalert2";
import "./successAlert.css"
import { useGetUserListQuery, useUnBanUserMutation } from '../../Redux/API/userApi';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchBanUser, setUsers } from '../../Redux/Services/userSlice';

const BanUser = () => {
    const token = Cookies.get("token")
    const {data, isLoading} = useGetUserListQuery(token);
    const [unBanUser] = useUnBanUserMutation();
    const nav = useNavigate()

    const dispatch = useDispatch()
    const users = useSelector(state => state.userSlice.users)
    const userList = users?.users;
    const banList = userList?.filter(user => user.banned == 1)
    const searchBanUser = useSelector(state => state.userSlice.searchBanUser)
    // console.log(banList);

    const unBanHandler = async(id)=>{
        Swal.fire({
            title: 'Do you want to restore this user?',
            icon: 'question',
            iconColor: "#fff",
            background: "#161618",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonColor: '#fff',
            cancelButtonColor: '#24262b',
            confirmButtonText: 'RESTORE'
          }).then(async(result) => {
            if (result.isConfirmed) {
              const data = await unBanUser({token,id})
              // console.log(data);
              if(data?.data?.message){
                Swal.fire({
                  customClass : {
                    title: 'swal2-title',
                    popup: 'custom-swal-popup'
                  },
                  title: "Successfully restore an account",
                  icon: "success",
                  showCloseButton: true,
                  confirmButtonText: "SEE ALL USERS",
                  width: 400,
                  background: "#161618",
                }).then((result) => {
                  if (result.isConfirmed) {
                    nav("/user/overview")
                  }
                })
              }
            }
          })
    }

    const route = (id) => {
      nav(`/brand/detail/${id}`);
    };
    
  return (
    <MainLayout>
    <div className="bg-[#202124] w-full flex justify-center">
      <div className="w-[95%] my-6 flex flex-col gap-8">
        {/* banner  */}
        <Banner2
          title={"Banned User"}
          path1={"User"}
          path2={"Banned"}
          icon={true}
          btn2={"Create User"}
          button2={true}
          route={"/user/create"}
        //   route={"/user/create"}
        />
        {banList?.length == 0 ? 
        
        // no user 
        <NoContact image={"https://img.freepik.com/free-icon/user_318-215753.jpg?t=st=1692434065~exp=1692434665~hmac=2980c4d803170dbf42c0125a36bc3a7bb74abd9db2f59410965813f7c678e325"} title1={"No Banned User !"}  />

         : 
        
        <div className="flex flex-col gap-8">
          {/* banner2  */}
        <div className="flex flex-col gap-3">
          <h1 className=" text-white font-medium text-2xl tracking-wide">
              Banned User Overview
          </h1>
          <div className=" flex justify-between items-center">
            <div className="relative">
                <input onChange={(e)=> dispatch(setSearchBanUser(e.target.value))}
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
            {banList?.filter(user => {
              if(searchBanUser === ""){
                return user
              }else if(user?.name.toLowerCase().includes(searchBanUser.toLowerCase())){
                return user
              }
            }).map((user) => {
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
                    <button onClick={()=>unBanHandler(user?.id)} className=' bg-transparent border border-[#fff] py-2 px-7 rounded-md font-medium hover:bg-[#24262b] duration-300;'>
                        RESTORE
                    </button>
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
  )
}

export default BanUser