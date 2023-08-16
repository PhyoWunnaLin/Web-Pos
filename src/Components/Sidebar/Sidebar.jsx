import React from "react";
import {MdOutlinePermMedia,MdOutlineNotificationsActive} from "react-icons/md";
import {BsFillMoonStarsFill,BsPersonCircle, BsPersonSquare} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai"
import {CiShop} from "react-icons/ci";
import {TbPointFilled} from "react-icons/tb"
import {RxExit} from "react-icons/rx"
import { Accordion } from '@mantine/core';
import {PiNotepadBold, PiUserCirclePlusDuotone, PiUserSquareFill} from "react-icons/pi"
import {HiOutlinePhotograph} from "react-icons/hi"
import "./sidebar.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className=" select-none ">

            {/* navbar  */}
            <div className=" flex justify-between items-center border-b border-[#3f4245] text-[#e8eaed] bg-[#202124] px-5 py-3 fixed w-full z-40">
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
            <div className="text-[#e8eaed] bg-[#161618] border-r-2 border-[#3f4245] scrollbar overflow-y-auto h-screen fixed w-[210px] mt-[53px]">

                {/* Overview  */}
                <p className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-[#202124] hover:text-[#8ab4f8]">
                    <span className=" text-[23px]"><AiOutlineHome/></span>
                    <span className=" font-bold tracking-wider">Overview</span>
                </p>
                <div className=" border-b border-[#3f4245]" />

                {/* Sale  */}
                <Accordion>
                    <Accordion.Item value="customization">
                        <Accordion.Control>
                            <div className=" flex items-center text-[#e8eaed] gap-2">
                                <span className=" text-[23px]"><CiShop/></span>
                                <span className=" tracking-wider font-medium">Sale</span>
                            </div>
                        </Accordion.Control>

                        <Accordion.Panel>
                            <div className=" flex items-center nav ">
                                <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                                <span className=" tracking-wider text-sm font-medium px-3 navLink">Cashier</span>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=" flex items-center nav">
                                <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                                <span className=" tracking-wider text-sm font-medium px-3 navLink">Recent</span>
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
                <div className=" border-b border-[#3f4245]" />

                {/* Inventory  */}
                <Accordion>
                    <Accordion.Item value="customization">
                        <Accordion.Control>
                            <div className=" flex items-center text-[#e8eaed] gap-2">
                                <span className=" text-[23px]"><PiNotepadBold/></span>
                                <span className=" tracking-wider font-medium">Inventory</span>
                            </div>
                        </Accordion.Control>

                        <Accordion.Panel>
                            <div className=" flex items-center nav">
                                <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                                <span className=" tracking-wider font-medium text-sm px-3 navLink">Products</span>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=" flex items-center nav">
                                <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                                <span className=" tracking-wider font-medium text-sm px-3 navLink">Add Product</span>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=" flex items-center nav">
                                <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                                <span className=" tracking-wider font-medium text-sm px-3 navLink">Stock Control</span>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=" flex items-center nav">
                                <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                                <span className=" tracking-wider font-medium text-sm px-3 navLink">Manage Brands</span>
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
                <div className=" border-b border-[#3f4245]" />

                {/* User  */}
                <Accordion>
                    <Accordion.Item value="customization">
                        <Accordion.Control>
                            <div className=" flex items-center text-[hsl(216,12%,92%)] gap-2">
                                <span className=" text-[23px]"><PiUserCirclePlusDuotone/></span>
                                <span className=" tracking-wider font-medium">User</span>
                            </div>
                        </Accordion.Control>

                        <Link to={'/user/overview'}>
                            <Accordion.Panel>
                                <div className=" flex items-center nav">
                                    <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                                    <span className=" tracking-wider font-medium text-sm px-3 navLink">Overview</span>
                                </div>
                            </Accordion.Panel>
                        </Link>
                        <Link to={'/user/create'}>
                            <Accordion.Panel>
                                <div className=" flex items-center nav">
                                    <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                                    <span className=" tracking-wider font-medium text-sm px-3 navLink">Create User</span>
                                </div>
                            </Accordion.Panel>
                        </Link>
                    </Accordion.Item>
                </Accordion>
                <div className=" border-b border-[#3f4245]" />

                {/* Media  */}
                <Link to={'/media'}>
                    <p className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-[#202124] hover:text-[#8ab4f8]">
                        <span className=" text-[23px]"><HiOutlinePhotograph/></span>
                        <span className=" tracking-wider font-medium">Media</span>
                    </p>
                </Link>
                <div className=" border-b border-[#3f4245]" />

                {/* Profile  */}
                <Accordion>
                    <Accordion.Item value="customization">
                        <Accordion.Control>
                            <div className=" flex items-center text-[hsl(216,12%,92%)] gap-2">
                                <span className=" text-[23px]"><PiUserSquareFill/></span>
                                <span className=" tracking-wider font-medium">Profile</span>
                            </div>
                        </Accordion.Control>

                        <Link to={'/profile/myAccount'}>
                            <Accordion.Panel>
                                <div className=" flex items-center nav">
                                    <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                                    <span className=" tracking-wider font-medium text-sm px-3 navLink">My Account</span>
                                </div>
                            </Accordion.Panel>
                        </Link>
                        <Link to={'/profile/edit'}>
                            <Accordion.Panel>
                                <div className=" flex items-center nav">
                                    <span className="pl-3 text-[8px] navLink"><TbPointFilled/></span>
                                    <span className=" tracking-wider font-medium text-sm px-3 navLink">Edit</span>
                                </div>
                            </Accordion.Panel>
                        </Link>
                    </Accordion.Item>
                </Accordion>
                <div className=" border-b border-[#3f4245]" />

                {/* Logout  */}
                <Link to={'/login'}>
                    <p className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-[#202124] hover:text-[#df7272]">
                        <span className=" text-[20px]"><RxExit/></span>
                        <span className=" tracking-wider font-medium">Logout</span>
                    </p>
                </Link>
                <div className=" border-b border-[#3f4245]" />

            </div>
            {/* sidebar end  */}
            
        </div>
    )
}

export default Sidebar;
