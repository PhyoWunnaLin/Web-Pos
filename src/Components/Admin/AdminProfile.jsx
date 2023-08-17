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
import { setProfileNavLinkActive } from '../../Redux/Services/profileSlice'

const AdminProfile = () => {
  const dispatch = useDispatch();

  const profileNavLinkActive = useSelector(state => state.profileSlice.profileNavLinkActive);
  const profileNavLinkActive2 = localStorage.getItem("profileNavLinkActive");

  // console.log(profileNavLinkActive2);

  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* banner  */}
            <Banner title={"Profile"} path1={"My Account"} path2={profileNavLinkActive2 == "Personal" || profileNavLinkActive2 == null ? "Personal" : profileNavLinkActive2} button={true} route={"/profile/edit"} icon={true} btn={"edit Profile"}/>

          {/* Profile  */}
          <div>
            {/* pp top start  */}
            <div className=' bg-[#161618] border-b border-[#878787]'>
                {/* profile img  */}
                <div className='pb-10 pt-7 mt-[73px] flex items-center relative'>
                    <div className=' absolute top-[-70px] left-[33px]'>
                        <div className=' relative rounded-full w-[150px] h-[150px]'>
                            <img src={"https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"} alt="" className=' rounded-full w-[150px] h-[150px] object-cover'/>

                            <div className=' hover:bg-[#c1c5cc] hover:scale-[1.1] cursor-pointer duration-200 h-7 w-7 rounded-full flex items-center bg-white justify-center absolute right-3 bottom-0'>
                            <BiSolidEditAlt size={18}/>
                            </div>
                        </div>
                    </div>

                    <div className= " flex justify-between w-full">
                        <div className=' ml-[213px]'>
                            <h1 className=' text-xl text-[#fff] font-bold tracking-wider mb-1'>Khine zin thin</h1>
                            <div className=' flex items-center gap-2 '>
                                <span className=' text-[#c5c1c1]'>Sale Executive /</span> 
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
                    <div onClick={() => dispatch(setProfileNavLinkActive("Personal"))} className={` ${profileNavLinkActive2 == "Personal" || profileNavLinkActive2 == null ? "active" : null} navLink cursor-pointer flex items-center gap-2`}>
                        <span className=" text-[19px]"><CiShop/></span>
                        <span className=' font-semibold'>Personal</span>
                    </div>

                    <div onClick={() => dispatch(setProfileNavLinkActive("Login Information"))} className={` ${profileNavLinkActive2 == "Login Information" && "active"} navLink cursor-pointer flex items-center gap-2`}>
                        <span className=" text-[19px]"><CiShop/></span>
                        <span className=' font-semibold'>Login Information</span>
                    </div>
                </div>
            </div>
            {/* pp top end  */}
          

            {/* pp bottom start  */}
            <div className=' bg-[#191919]'>
              {/* Personal  */}
              <div className={` ${profileNavLinkActive2 == "Personal" || profileNavLinkActive2 == null ? "block" : "hidden"} pl-10 pt-6 pb-9 flex flex-col gap-3`}>
                    <div className=' flex items-center gap-14 text-[17px] tracking-wider'>
                      <p className=' text-[#878787] w-[150px] font-semibold'>Address</p>
                      <p className=' text-[#fff]'>Yangon</p>
                    </div>

                    <div className=' flex items-center gap-14 text-[17px] tracking-wider'>
                      <p className=' text-[#878787] w-[150px] font-semibold'>Gender</p>
                      <p className=' text-[#fff]'>Female</p>
                    </div>
                  
                    <div className=' flex items-center gap-14 text-[17px] tracking-wide'>
                      <p className=' text-[#878787] w-[150px] font-semibold'>Date Of Birth</p>
                      <p className=' text-[#fff]'>19/12/2002</p>
                    </div>
              </div>

              {/* Login Information  */}
              <div className={` ${profileNavLinkActive2 == "Login Information" ? "block" : "hidden"} pl-10 pt-6 pb-9 flex flex-col gap-5`}>
                      <div className=' flex items-center gap-14 text-[17px] tracking-wider'>
                          <p className=' text-[#878787] w-[150px] font-semibold'>Phone</p>
                          <p className=' text-[#fff]'>099999999</p>
                      </div>

                      <div className=' flex items-center gap-14 text-[17px] tracking-wider'>
                          <p className=' text-[#878787] w-[150px] font-semibold'>Position</p>
                          <p className=' text-[#fff]'>Sale Executive</p>
                      </div>

                      <div className=' flex items-center gap-14 text-[17px] tracking-wider'>
                          <p className=' text-[#878787] w-[150px] font-semibold'>Mail</p>
                          <p className=' text-[#fff]'>kzt@gmail.com</p>
                      </div>
              </div>
            </div>
            {/* pp bottom end  */}
          </div>
          {/* profile end  */}

        </div>
      </div>
    </MainLayout>
  )
}

export default AdminProfile