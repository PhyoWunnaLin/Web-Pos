import React, { useState } from 'react'
import {HiOutlineMailOpen} from "react-icons/hi"
import {BsTelephoneOutbound} from "react-icons/bs"
import {AiFillClockCircle} from "react-icons/ai"
import {CiShop} from "react-icons/ci";
import {BiSolidEditAlt} from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import { setAdminEditPp } from '../../Redux/Services/profileSlice';
import "./adminProfile.css"
import MainLayout from '../../Layouts/MainLayout';
import Banner from '../Banner/Banner';
import Cookies from 'js-cookie';
import PersonalForm from './PersonalForm';
import LoginInfoEditForm from './LoginInfoEditForm';
import ChangePasswordForm from './ChangePasswordForm';
import { useGetProfileQuery } from '../../Redux/API/adminApi';
import Loader from '../Loader/Loader';
import ModalMedia from '../Modal/ModalMedia';
import { useDisclosure } from "@mantine/hooks";
import { PiUserFocus } from 'react-icons/pi';
import { setAdminSelectImg } from '../../Redux/Services/mediaSlice';
import person from "../../assets/person.jpg"

const AdminProfileEdit = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const token = Cookies.get("token");
    const {data, isLoading} = useGetProfileQuery(token);
    const user = data?.user;
    const adminSelectImg = useSelector(state => state.mediaSlice.adminSelectImg)

    // console.log(user);

    const clearImgHandler = (e)=>{
      e.preventDefault()
      dispatch(setAdminSelectImg(person))
    }

    const dispatch = useDispatch();

    const adminEditPp = useSelector(state => state.profileSlice.adminEditPp);
    //   const adminEditPp2 = localStorage.getItem("adminEditPp");
    //   console.log(adminEditPp2);
  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] mt-6 flex flex-col gap-8">
          {/* banner  */}
            <Banner title={"Profile"} path1={"Edit"} path2={adminEditPp == "Personal" || adminEditPp == null ? "Personal" : adminEditPp} btn={"My Profile"} button={true} route={"/profile/myAccount"} />

          {/* Profile  */}
          {isLoading ? 
          <div className=" ">
            <Loader/>
          </div> : <div>
            {/* pp top start  */}
            <div className=' bg-[#161618] border-b border-[#878787]'>
                {/* profile img  */}
                <div className='pb-10 pt-7 mt-[73px] flex items-center relative'>
                    <div className=' absolute top-[-70px] left-[33px]'>
                    {user?.user_photo? (
                      <div>
                        <div onClick={open} className=' cursor-pointer relative rounded-full w-[150px] h-[150px]'>
                        <img src={adminSelectImg ? adminSelectImg : user?.user_photo} alt="" className=' rounded-full w-[150px] h-[150px] object-cover'/>

                        <div className=' hover:bg-[#c1c5cc] hover:scale-[1.1] duration-200 h-7 w-7 rounded-full flex items-center bg-white justify-center absolute right-3 bottom-0'>
                        <BiSolidEditAlt size={18}/>
                        </div>

                      </div>
                        <div className=' text-center'>
                        <button onClick={clearImgHandler} className='bg-transparent border border-[#7E7F80] rounded-md hover:bg-[#24262b] duration-300 text-xs text-[#7E7F80] px-1 mt-2 py-1'>remove photo</button>
                        </div>
                      </div>

                    ) : (
                      <div
                      onClick={open}
                     className=' cursor-pointer w-[150px] h-[150px] bg-[#202124] rounded-full mx-auto border-dashed border-2 border-[#8AB4F8] flex justify-center items-center relative'>
                      {adminSelectImg ? (
                        <img src={adminSelectImg} alt="" className=' rounded-full w-[150px] h-[150px] object-cover'/>
                      ): (
                      <PiUserFocus className=' text-white' size={45}/>
                      )}
                      <div className='h-7 w-7 hover:bg-[#c1c5cc] hover:scale-[1.1] duration-200 rounded-full flex items-center bg-white justify-center absolute right-4 bottom-0'>
                        <BiSolidEditAlt size={18}/>
                      </div>
                    </div>
                    )}

                    </div>

                    <div className= " flex justify-between w-full">
                        <div className=' ml-[213px]'>
                            <h1 className=' text-xl text-[#fff] font-bold tracking-wider mb-1'>{user?.name}</h1>
                            <div className=' flex items-center gap-2 '>
                                <span className=' text-[#c5c1c1]'>{user?.role} /</span> 
                                <p className=' flex items-center gap-1'>
                                    <span  className=' text-xs text-[#8ab4f8]'><AiFillClockCircle/></span>
                                    <span className=' text-[#fff] text-sm'>Active in 1 hr</span>
                                </p>
                            </div>
                        </div>

                        <div className=' flex items-center gap-3 mr-8'>
                            <p className=' icon2 hover-up text-[#fff]'><HiOutlineMailOpen/></p>
                            <p className=' icon2 hover-up text-[#fff]'><BsTelephoneOutbound/></p>
                        </div>

                    </div>

                </div>

                {/* profile navLink  */}
                <div className=' flex items-center gap-20 ml-10 pb-5'>
                    <div onClick={() => dispatch(setAdminEditPp("Personal"))} className={` ${adminEditPp == "Personal" || adminEditPp == null ? "active" : null} navLink cursor-pointer flex items-center gap-2`}>
                        <span className=" text-[19px]"><CiShop/></span>
                        <span className=' font-semibold'>Personal</span>
                    </div>

                    <div onClick={() => dispatch(setAdminEditPp("Login Information"))} className={` ${adminEditPp == "Login Information" && "active"} navLink cursor-pointer flex items-center gap-2`}>
                        <span className=" text-[19px]"><CiShop/></span>
                        <span className=' font-semibold'>Login Information</span>
                    </div>

                    <div onClick={() => dispatch(setAdminEditPp("Password"))} className={` ${adminEditPp == "Password" && "active"} navLink cursor-pointer flex items-center gap-2`}>
                        <span className=" text-[19px]"><CiShop/></span>
                        <span className=' font-semibold'>Password</span>
                    </div>
                </div>
            </div>
            {/* pp top end  */}
          

          {/* pp bottom start  */}
          <div className=" bg-[#191919] mb-10">
              {/* Personal form  */}
              <div className={`${adminEditPp == "Personal" ? "block" : "hidden"}`}>
                <PersonalForm/>
              </div>

              {/* Login Information  */}
              <div className={`${adminEditPp == "Login Information" ? "block" : "hidden"}`}>
                <LoginInfoEditForm/>
              </div>

              {/* password  */}
              <div className={`${adminEditPp == "Password" ? "block" : "hidden"}`}>
                <ChangePasswordForm/>
              </div>
          </div>
          {/* pp bottom end  */}

        <ModalMedia opened={opened} onClose={close}/>


          </div>}

        </div>
      </div>
    </MainLayout>
  )
}

export default AdminProfileEdit