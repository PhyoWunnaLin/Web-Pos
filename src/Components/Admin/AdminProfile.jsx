import React from 'react'
import {HiOutlineMailOpen} from "react-icons/hi"
import {BsTelephoneOutbound} from "react-icons/bs"
import {AiFillClockCircle} from "react-icons/ai"
import {CiShop} from "react-icons/ci";
import {BiSolidEditAlt} from "react-icons/bi"
import "./adminProfile.css"
import Banner from '../Banner/Banner'
import MainLayout from '../../Layouts/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { setAdminPp } from '../../Redux/Services/profileSlice'
import Cookies from 'js-cookie';
import { useGetProfileQuery } from '../../Redux/API/adminApi';
import Loader from '../Loader/Loader';
import { PiUserFocus } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import person from "../../assets/person.jpg"

const AdminProfile = () => {
  const token = Cookies.get("token");
  const {data, isLoading} = useGetProfileQuery(token)
  const admin = data?.user
  // console.log(admin);

  const dispatch = useDispatch();

  const adminPp = useSelector(state => state.profileSlice.adminPp);
  // const adminPp2 = localStorage.getItem("adminPp");

  // console.log(adminPp);

  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* banner  */}
            <Banner title={"Profile"} path1={"My Account"} path2={adminPp == "Personal" || adminPp == null ? "Personal" : adminPp} button={true} route={"/profile/edit"} icon={true} btn={"edit Profile"}/>

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
                    {admin?.photo ? (
                      <Link to={"/profile/edit"}>
                        <div className=' cursor-pointer relative rounded-full w-[150px] h-[150px]'>
                        <img src={admin?.photo && admin?.photo} alt="" className=' rounded-full w-[150px] h-[150px] object-cover'/>
                        </div>
                      </Link>
                    ) : (
                      <Link to={"/profile/edit"}>
                        <div className=' cursor-pointer relative rounded-full w-[150px] h-[150px]'>
                        <img src={person} alt="" className=' rounded-full w-[150px] h-[150px] object-cover'/>
                        </div>
                      </Link>
                    )}
                    </div>

                    <div className= " flex justify-between w-full">
                        <div className=' ml-[213px]'>
                            <h1 className=' text-xl text-[#fff] font-bold tracking-wider mb-1'>{admin?.name}</h1>
                            <div className=' flex items-center gap-2 '>
                                <span className=' text-[#c5c1c1]'>{admin?.role} /</span> 
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
                    <div onClick={() => dispatch(setAdminPp("Personal"))} className={` ${adminPp == "Personal" || adminPp == null ? "active" : null} navLink cursor-pointer flex items-center gap-2`}>
                        <span className=" text-[19px]"><CiShop/></span>
                        <span className=' font-semibold'>Personal</span>
                    </div>

                    <div onClick={() => dispatch(setAdminPp("Login Information"))} className={` ${adminPp == "Login Information" && "active"} navLink cursor-pointer flex items-center gap-2`}>
                        <span className=" text-[19px]"><CiShop/></span>
                        <span className=' font-semibold'>Login Information</span>
                    </div>
                </div>
            </div>
            {/* pp top end  */}
          

            {/* pp bottom start  */}
            <div className=' bg-[#191919]'>
              {/* Personal  */}
              <div className={` ${adminPp == "Personal" || adminPp == null ? "block" : "hidden"} pl-10 pt-6 pb-9 flex flex-col gap-3`}>
                    <div className=' flex items-center gap-14 text-[17px] tracking-wider'>
                      <p className=' text-[#878787] w-[150px] font-semibold'>Address</p>
                      <p className=' text-[#fff]'>{admin?.address ? admin?.address : "Yangon" }</p>
                    </div>

                    <div className=' flex items-center gap-14 text-[17px] tracking-wider'>
                      <p className=' text-[#878787] w-[150px] font-semibold'>Gender</p>
                      <p className=' text-[#fff]'>{admin?.gender}</p>
                    </div>
                  
                    <div className=' flex items-center gap-14 text-[17px] tracking-wide'>
                      <p className=' text-[#878787] w-[150px] font-semibold'>Date Of Birth</p>
                      <p className=' text-[#fff]'>{admin?.date_of_birth? admin?.date_of_birth: "19/12/2002" }</p>
                    </div>
              </div>

              {/* Login Information  */}
              <div className={` ${adminPp == "Login Information" ? "block" : "hidden"} pl-10 pt-6 pb-9 flex flex-col gap-5`}>
                      <div className=' flex items-center gap-14 text-[17px] tracking-wider'>
                          <p className=' text-[#878787] w-[150px] font-semibold'>Phone</p>
                          <p className=' text-[#fff]'>{admin?.phone? admin?.phone: "099999999" }</p>
                      </div>

                      <div className=' flex items-center gap-14 text-[17px] tracking-wider'>
                          <p className=' text-[#878787] w-[150px] font-semibold'>Position</p>
                          <p className=' text-[#fff]'>{admin?.role}</p>
                      </div>

                      <div className=' flex items-center gap-14 text-[17px] tracking-wider'>
                          <p className=' text-[#878787] w-[150px] font-semibold'>Mail</p>
                          <p className=' text-[#fff]'>{admin?.email}</p>
                      </div>
              </div>
            </div>
            {/* pp bottom end  */}
          </div>}
          {/* profile end  */}

        </div>
      </div>
    </MainLayout>
  )
}

export default AdminProfile