import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Banner from "../Banner/Banner";
import {HiOutlineMailOpen} from "react-icons/hi"
import {BsTelephoneOutbound} from "react-icons/bs"
import {AiFillClockCircle} from "react-icons/ai"
import {CiShop} from "react-icons/ci";
import {BiSolidEditAlt} from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";
import { setUserPp } from "../../Redux/Services/profileSlice";
import { useGetProfileQuery } from "../../Redux/API/adminApi";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

const Detail = () => {
  const token = Cookies.get("token")
  const {data, isLoading} = useGetProfileQuery()
  
  const dispatch = useDispatch();

  const userPp = useSelector(state => state.profileSlice.userPp);
  // const userPp2 = localStorage.getItem("userPp");

  return (
    <MainLayout>
      <div className=" w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          <Banner
            title={"User"}
            path1={"Overview"}
            btn={"Update User"}
            button={true}
            // route={"/profile/edit"}
          />
          <div className="w-[100%]">
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
                        <div onClick={() => dispatch(setUserPp("Personal"))} className={` ${userPp == "Personal" || userPp == null ? "active" : null} navLink cursor-pointer flex items-center gap-2`}>
                            <span className=" text-[19px]"><CiShop/></span>
                            <span className=' font-semibold'>Personal</span>
                        </div>

                        <div onClick={() => dispatch(setUserPp("Login Information"))} className={` ${userPp == "Login Information" && "active"} navLink cursor-pointer flex items-center gap-2`}>
                            <span className=" text-[19px]"><CiShop/></span>
                            <span className=' font-semibold'>Login Information</span>
                        </div>

                    </div>
                </div>
                {/* pp top end  */}
              

                {/* pp bottom start  */}
                <div className=' bg-[#191919]'>
                  {/* Personal  */}
                  <div className={` ${userPp == "Personal" || userPp == null ? "block" : "hidden"} pl-10 pt-6 pb-9 flex flex-col gap-3`}>
                        <p className=' flex items-center gap-14 text-[17px] tracking-wider'>
                          <span className=' text-[#878787] w-[150px] font-semibold'>Address</span>
                          <span className=' text-[#fff]'>Yangon</span>
                        </p>

                        <p className=' flex items-center gap-14 text-[17px] tracking-wider'>
                          <span className=' text-[#878787] w-[150px] font-semibold'>Gender</span>
                          <span className=' text-[#fff]'>Female</span>
                        </p>
                      
                        <p className=' flex items-center gap-14 text-[17px] tracking-wide'>
                          <span className=' text-[#878787] w-[150px] font-semibold'>Date Of Birth</span>
                          <span className=' text-[#fff]'>19/12/2002</span>
                        </p>
                  </div>

                  {/* Login Information  */}
                  <div className={` ${userPp == "Login Information" ? "block" : "hidden"} pl-10 pt-6 pb-9 flex flex-col gap-5`}>
                          <p className=' flex items-center gap-14 text-[17px] tracking-wider'>
                              <span className=' text-[#878787] w-[150px] font-semibold'>Phone</span>
                              <span className=' text-[#fff]'>099999999</span>
                          </p>

                          <p className=' flex items-center gap-14 text-[17px] tracking-wider'>
                              <span className=' text-[#878787] w-[150px] font-semibold'>Position</span>
                              <span className=' text-[#fff]'>Sale Executive</span>
                          </p>

                          <p className=' flex items-center gap-14 text-[17px] tracking-wider'>
                              <span className=' text-[#878787] w-[150px] font-semibold'>Mail</span>
                              <span className=' text-[#fff]'>kzt@gmail.com</span>
                          </p>
                  </div>
                </div>
                {/* pp bottom end  */}
              </div>
            {/* profile end  */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Detail;
