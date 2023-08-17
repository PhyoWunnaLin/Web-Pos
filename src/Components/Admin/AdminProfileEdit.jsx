import React from 'react'
import {HiOutlineMailOpen} from "react-icons/hi"
import {BsTelephoneOutbound} from "react-icons/bs"
import {AiFillClockCircle} from "react-icons/ai"
import {CiShop} from "react-icons/ci";
import {BiSolidEditAlt} from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import { setProfileNavLinkActive } from '../../Redux/Services/profileSlice';
import "./adminProfile.css"
import MainLayout from '../../Layouts/MainLayout';
import Banner from '../Banner/Banner';

const AdminProfileEdit = () => {
  const dispatch = useDispatch();

  const profileNavLinkActive = useSelector(state => state.profileSlice.profileNavLinkActive);
  const profileNavLinkActive2 = localStorage.getItem("profileNavLinkActive");

  console.log(profileNavLinkActive2);
  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] mt-6 flex flex-col gap-8">
          {/* banner  */}
            <Banner title={"Profile"} path1={"Edit"} path2={profileNavLinkActive2 == "Personal" || profileNavLinkActive2 == null ? "Personal" : profileNavLinkActive2} btn={"My Profile"} button={true} route={"/profile/myAccount"} />

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

                    <div onClick={() => dispatch(setProfileNavLinkActive("Password"))} className={` ${profileNavLinkActive2 == "Password" && "active"} navLink cursor-pointer flex items-center gap-2`}>
                        <span className=" text-[19px]"><CiShop/></span>
                        <span className=' font-semibold'>Password</span>
                    </div>
                </div>
            </div>
            {/* pp top end  */}
          

          {/* pp bottom start  */}
          <div className=" bg-[#191919] mb-10">
              {/* Personal form  */}
              <div className={`${profileNavLinkActive2 == "Personal" ? "block" : "hidden"}`}>
                <form className="p-10 flex flex-col gap-6 w-full">
                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input w-[70%]"
                    />
                    </div>

                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Phone
                    </label>
                    <input type="text" className="input w-[70%]" />
                    </div>

                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Date Of Birth
                    </label>
                    <input type="text" className="input w-[70%]" />
                    </div>

                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Gender
                    </label>
                    <div className=" flex gap-4 items-center w-[70%] text-[#FFFFFF] font-medium tracking-wider">
                        <input
                        type="radio"
                        name="gender"
                        // checked
                        style={{ width: "18px", height: "18px" }}
                        />
                        Male
                        <input
                        type="radio"
                        name="gender"
                        style={{ width: "18px", height: "18px" }}
                        />
                        Female
                    </div>
                    </div>

                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Address
                    </label>
                    <textarea
                        placeholder="Your Address..."
                        cols="30"
                        rows="4"
                        className="input w-[70%]"
                    ></textarea>
                    </div>

                    {/* btn  */}
                    <div className=" flex items-center gap-5 mt-8">
                    <button className="btn3 flex gap-2 items-center border border-[#7E7F80] text-[#7E7F80]">
                        Cancle
                    </button>
                    <button className="btn flex gap-2 items-center border border-[#3f4245]">
                        Save
                    </button>
                    </div>
                </form>
              </div>

              {/* Login Information  */}
              <div className={`${profileNavLinkActive2 == "Login Information" ? "block" : "hidden"}`}>
                <form className="p-10 flex flex-col gap-6 w-full">
                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        className="input w-[70%]"
                    />
                    </div>
                    
                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Email
                    </label>
                    <input type="email" className="input w-[70%]" />
                    </div>
                    

                    {/* btn  */}
                    <div className=" flex items-center gap-5 mt-8">
                    <button className="btn3 flex gap-2 items-center border border-[#7E7F80] text-[#7E7F80]">
                        Cancle
                    </button>
                    <button className="btn flex gap-2 items-center border border-[#3f4245]">
                        Save
                    </button>
                    </div>
                </form>
              </div>

              {/* password  */}
              <div className={`${profileNavLinkActive2 == "Password" ? "block" : "hidden"}`}>
                <form className="p-10 flex flex-col gap-6 w-full">
                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Current Password
                    </label>
                    <input
                        type="password"
                        className="input w-[70%]"
                    />
                    </div>
                    
                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        New Password
                    </label>
                    <input type="password" className="input w-[70%]" />
                    </div>

                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Confirm Password
                    </label>
                    <input type="password" className="input w-[70%]" />
                    </div>
                    

                    {/* btn  */}
                    <div className=" flex items-center gap-5 mt-8">
                    <button className="btn3 flex gap-2 items-center border border-[#7E7F80] text-[#7E7F80]">
                        Cancel
                    </button>
                    <button className="btn flex gap-2 items-center border border-[#3f4245]">
                        Save
                    </button>
                    </div>
                </form>
              </div>
          </div>
          {/* pp bottom end  */}


          </div>

        </div>
      </div>
    </MainLayout>
  )
}

export default AdminProfileEdit