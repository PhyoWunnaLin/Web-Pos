import React from "react";
import {MdOutlineNotificationsActive} from "react-icons/md";
import {BsFillMoonStarsFill,BsPersonCircle, BsPersonSquare} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai"
import {CiShop} from "react-icons/ci";
import {TbPointFilled} from "react-icons/tb"
import {MdKeyboardArrowDown} from "react-icons/md"
import {RxExit} from "react-icons/rx"
// import { Accordion } from '@mantine/core';
import { Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";
import {PiNotepadBold, PiUserCirclePlusDuotone, PiUserSquareFill} from "react-icons/pi"
import {HiOutlinePhotograph} from "react-icons/hi"
import "./sidebar.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../Redux/API/authApi";
import Cookies from 'js-cookie';
import { removeToken } from "../../Redux/Services/authSlice";
import { Loader } from '@mantine/core';

const Sidebar = () => {
    const [logout , {isLoading}] = useLogoutMutation();
    const [open, setOpen] = React.useState(0);
    
     const dispatch = useDispatch();
    const location = useLocation();
    const sidebarActive = location.pathname;
    // console.log(sidebarActive);
    const token = Cookies.get("token")
    const nav = useNavigate();

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const logoutHandler = async(e)=>{
        const {data} = await logout(token);
        console.log(data);
        if(data.message){
            nav("/login")
            dispatch(removeToken())
        }
    }

    
    return(
        <div className=" select-none">

            {/* navbar  */}
            <div className=" flex justify-between items-center border-b border-[#3f4245] text-[#e8eaed] bg-[#202124] px-5 py-3 b-60 fixed w-full z-40">
                <h1 className=" font-semibold tracking-wider text-lg">MMS</h1>
                <div className=" flex gap-5 items-center">
                    <p className=" text-xl">
                        <MdOutlineNotificationsActive/>
                    </p>
                    <p>
                        <BsFillMoonStarsFill/>
                    </p>
                    <p>
                        <BsPersonCircle/>
                    </p>
                </div>
            </div>
            {/* navbar end */}

            {/* sidebar  */}
            <div className="text-[#e8eaed] bg-[#161618] border-r-2 border-[#3f4245] scrollbar overflow-y-auto fixed w-[210px] mt-[53px] h-screen pb-24">

                {/* Overview  */}
                <p className={` flex items-center gap-2 px-5 py-3 cursor-pointer sidebarLink`}>
                    <span className=" text-[23px]"><AiOutlineHome/></span>
                    <span className=" font-bold tracking-wider">Overview</span>
                </p>
                <div className=" border-b border-[#3f4245]" />

                {/* Sale  */}
                <Accordion open={open === 1} >
                <div onClick={() => handleOpen(1)} className=" cursor-pointer sidebarLink px-5 py-3 flex items-center justify-between text-[#e8eaed] gap-2">
                    <div className=" flex items-center gap-2">
                    <span className=" text-[23px]"><CiShop/></span>
                    <span className=" tracking-wider font-medium">Sale</span>
                    </div>
                    <div className=" text-xl"><MdKeyboardArrowDown/></div>
                </div>
                <AccordionBody className="">
                    <div className=" cursor-pointer sidebarLink px-5 py-[0.55rem] flex items-center nav">
                        <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                        <span className=" tracking-wider text-sm font-medium px-3 navLink">Cashier</span>
                    </div>

                    <div className=" cursor-pointer sidebarLink px-5 py-[0.55rem] flex items-center nav">
                        <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                        <span className=" tracking-wider text-sm font-medium px-3 navLink">Recent</span>
                    </div>
                </AccordionBody>
                </Accordion>
                <div className=" border-b border-[#3f4245]" />

                {/* Inventory  */}
                <Accordion open={open === 2} >
                <div onClick={() => handleOpen(2)} className=" cursor-pointer sidebarLink px-5 py-3 flex items-center justify-between text-[#e8eaed] gap-2">
                    <div className=" flex items-center gap-2">
                    <span className=" text-[23px]"><PiNotepadBold/></span>
                    <span className=" tracking-wider font-medium">Inventory</span>
                    </div>
                    <div className=" text-xl"><MdKeyboardArrowDown/></div>
                </div>
                <AccordionBody className="">
                    <Link to={'/inventory/products'}>
                    <div className={` ${sidebarActive == "/inventory/products" && "sidebarActive"} cursor-pointer sidebarLink px-5 py-[0.55rem] flex items-center nav`}>
                        <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                        <span className=" tracking-wider text-sm font-medium px-3 navLink">Products</span>
                    </div>
                    </Link>

                    <div className=" cursor-pointer sidebarLink px-5 py-[0.55rem] flex items-center nav">
                        <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                        <span className=" tracking-wider text-sm font-medium px-3 navLink">Add Product</span>
                    </div>

                    <div className=" cursor-pointer sidebarLink px-5 py-[0.55rem] flex items-center nav">
                        <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                        <span className=" tracking-wider text-sm font-medium px-3 navLink">Stock Control</span>
                    </div>

                    <div className=" cursor-pointer sidebarLink px-5 py-[0.55rem] flex items-center nav">
                        <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                        <span className=" tracking-wider text-sm font-medium px-3 navLink">Manage Brands</span>
                    </div>
                </AccordionBody>
                </Accordion>
                <div className=" border-b border-[#3f4245]" />

                {/* User  */}
                <Accordion open={open === 3} >
                <div onClick={() => handleOpen(3)} className=" cursor-pointer sidebarLink px-5 py-3 flex items-center justify-between text-[#e8eaed] gap-2">
                    <div className=" flex items-center gap-2">
                    <span className=" text-[23px]"><PiUserCirclePlusDuotone/></span>
                    <span className=" tracking-wider font-medium">User</span>
                    </div>
                    <div className=" text-xl"><MdKeyboardArrowDown/></div>
                </div>
                <AccordionBody className="">
                    <Link to={'/user/overview'}>
                    <div className={` ${sidebarActive == "/user/overview" && "sidebarActive"} cursor-pointer sidebarLink px-5 py-[0.55rem] flex items-center nav`}>
                        <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                        <span className=" tracking-wider text-sm font-medium px-3 navLink">Overview</span>
                    </div>
                    </Link>

                    <Link to={'/user/create'}>
                    <div className={` ${sidebarActive == "/user/create" && "sidebarActive"} cursor-pointer sidebarLink px-5 py-[0.55rem] flex items-center nav`}>
                        <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                        <span className=" tracking-wider text-sm font-medium px-3 navLink">Create User</span>
                    </div>
                    </Link>
                </AccordionBody>
                </Accordion>
                <div className=" border-b border-[#3f4245]" />

                {/* Media  */}
                <Link to={'/media'}>
                    <p className={`flex items-center gap-2 px-5 py-3 cursor-pointer sidebarLink ${sidebarActive == "/media" && "sidebarActive"}`}>
                        <span className=" text-[23px]"><HiOutlinePhotograph/></span>
                        <span className=" tracking-wider font-medium">Media</span>
                    </p>
                </Link>
                <div className=" border-b border-[#3f4245]" />

                {/* Profile  */}
                <Accordion open={open === 4} >
                <div onClick={() => handleOpen(4)} className=" cursor-pointer sidebarLink px-5 py-3 flex items-center justify-between text-[#e8eaed] gap-2">
                    <div className=" flex items-center gap-2">
                    <span className=" text-[23px]"><PiUserSquareFill/></span>
                    <span className=" tracking-wider font-medium">Profile</span>
                    </div>
                    <div className=" text-xl"><MdKeyboardArrowDown/></div>
                </div>
                <AccordionBody className="">
                    <Link to={'/profile/myAccount'}>
                    <div className={` ${sidebarActive == "/profile/myAccount" && "sidebarActive"} cursor-pointer sidebarLink px-5 py-[0.55rem] flex items-center nav`}>
                        <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                        <span className=" tracking-wider text-sm font-medium px-3 navLink">My Account</span>
                    </div>
                    </Link>

                    <Link to={'/profile/edit'}>
                    <div className={` ${sidebarActive == "/profile/edit" && "sidebarActive"} cursor-pointer sidebarLink px-5 py-[0.55rem] flex items-center nav`}>
                        <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                        <span className=" tracking-wider text-sm font-medium px-3 navLink">Edit</span>
                    </div>
                    </Link>
                </AccordionBody>
                </Accordion>
                <div className=" border-b border-[#3f4245]" />

                {/* Logout  */}
                    {isLoading ? 

                    <p className="flex items-center gap-2 px-5 py-3 hover:bg-[#202124]">
                        <span className=" text-[20px] text-[#df7272]"><RxExit/></span>
                        <span className=" tracking-wider font-medium text-[#df7272]">Logout</span>
                        <span><Loader color="red" size="sm" className="pt-[3px]"/></span>
                    </p> : 
                    
                    <p onClick={logoutHandler} className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-[#202124] hover:text-[#df7272] ">
                        <span className=" text-[20px]"><RxExit/></span>
                        <span className=" tracking-wider font-medium">Logout</span>
                    </p>}

                <div className=" border-b border-[#3f4245]" />

            </div>
            {/* sidebar end  */}
            
        </div>
    )
}

export default Sidebar;
