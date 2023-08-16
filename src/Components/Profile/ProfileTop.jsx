import React from 'react'
import {HiOutlineMailOpen} from "react-icons/hi"
import {BsTelephoneOutbound} from "react-icons/bs"
import {AiFillClockCircle} from "react-icons/ai"
import {CiShop} from "react-icons/ci";
import {BiSolidEditAlt} from "react-icons/bi"
import "../User/overview.css"
import { useDispatch, useSelector } from 'react-redux';
import { SetProfileNavLinkActive } from '../../Redux/Services/profileSlice';
import "./profile.css"

const ProfileTop = (props) => {
    const dispatch = useDispatch();
    const profileNavLinkActive = useSelector(state => state.profileSlice.profileNavLinkActive);
    const profileNavLinkActive2 = localStorage.getItem("profileNavLinkActive");
    // console.log(profileNavLinkActive);

  return (
    <div className=' bg-[#161618] border-b border-[#878787]'>
        {/* profile img  */}
        <div className=' pb-10 pt-7 mt-10 flex items-center relative'>
            <div className=' absolute top-[-40px] left-[40px]'>
                <div className=' relative rounded-full w-[55%]'>
                    <img src={props.img} alt="" className=' rounded-full'/>

                    <div className='h-7 w-7 rounded-full flex items-center bg-white justify-center absolute right-3 bottom-0'>
                    <BiSolidEditAlt size={18}/>
                    </div>
                </div>
            </div>

            <div className= " flex justify-between w-full">

                <div className=' ml-[190px]'>
                    <h1 className=' text-xl text-[#fff] font-bold tracking-wider mb-1'>Khine zin thin</h1>
                    <p className=' flex items-center gap-2 '>
                        <span className=' text-[#c5c1c1]'>Sale Executive /</span> 
                        <p className=' flex items-center gap-1'>
                            <span  className=' text-xs text-[#8ab4f8]'><AiFillClockCircle/></span>
                            <span className=' text-[#fff] text-sm'>Active in 1 hr</span>
                        </p>
                    </p>
                </div>

                <div className=' flex items-center gap-3 mr-8'>
                    <p className=' icon2 hover-up text-[#fff]'><HiOutlineMailOpen/></p>
                    <p className=' icon2 hover-up text-[#fff]'><BsTelephoneOutbound/></p>
                </div>

            </div>

        </div>

        {/* profile navLink  */}
        <div className=' flex items-center gap-16 ml-10 pb-5'>
            <p onClick={() => dispatch(SetProfileNavLinkActive("Personal"))} className={` ${profileNavLinkActive2 == "Personal" || profileNavLinkActive2 == null ? "active" : null} navLink cursor-pointer flex items-center gap-2`}>
                <span className=" text-[19px]"><CiShop/></span>
                <span className=' font-semibold'>Personal</span>
            </p>

            <p onClick={() => dispatch(SetProfileNavLinkActive("Login Information"))} className={` ${profileNavLinkActive2 == "Login Information" && "active"} navLink cursor-pointer flex items-center gap-2`}>
                <span className=" text-[19px]"><CiShop/></span>
                <span className=' font-semibold'>Login Information</span>
            </p>

            <p onClick={() => dispatch(SetProfileNavLinkActive("Password"))} className={` ${profileNavLinkActive2 == "Password" && "active"} navLink cursor-pointer flex items-center gap-2`}>
                <span className=" text-[19px]"><CiShop/></span>
                <span className=' font-semibold'>Password</span>
            </p>
        </div>
    </div>
  )
}

export default ProfileTop