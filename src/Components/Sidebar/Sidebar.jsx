import React from "react";
import {MdOutlinePermMedia,MdOutlineNotificationsActive} from "react-icons/md";
import {BsFillMoonStarsFill,BsPersonCircle} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai"
import {CiShop} from "react-icons/ci";
import {TbPointFilled} from "react-icons/tb"
import {RxExit} from "react-icons/rx"
import { Accordion } from '@mantine/core';

const Sidebar = () => {
    return(
        <div className=" select-none">

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
            <div className="text-[#e8eaed] bg-[#161618] border-r-2 border-[#3f4245] h-screen fixed w-[210px] mt-[53px]">
                <p className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-[#202124]">
                    <span className=" text-[23px]"><AiOutlineHome/></span>
                    <span className=" font-semibold tracking-wide">Overview</span>
                </p>
                <div className=" border-b border-[#3f4245]" />

                <Accordion className=" hover:bg-transparent">
                    <Accordion.Item value="customization">
                        <Accordion.Control>
                            <div className=" flex items-center gap-2 text-[#e8eaed]">
                                <span className=" text-[23px]"><CiShop/></span>
                                <span className=" tracking-wide">Sale</span>
                            </div>
                        </Accordion.Control>

                        <Accordion.Panel>
                            <div className=" flex items-center text-[#e8eaed]">
                                <span className="pl-3 text-[8px]"><TbPointFilled/></span>
                                <span className=" tracking-wide px-3 text-[#e8eaed]">Cashier</span>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=" flex items-center text-[#e8eaed]">
                                <span className="pl-3 text-[8px]"><TbPointFilled/></span>
                                <span className=" tracking-wide px-3 text-[#e8eaed]">Recent</span>
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>


                <p className="flex items-center gap-3 px-5 py-3 cursor-pointer hover:bg-[#202124]">
                    <span className=" text-[20px]"><MdOutlinePermMedia/></span>
                    <span className=" tracking-wide">Media</span>
                </p>
                <div className=" border-b border-[#3f4245]" />

                <p className="flex items-center gap-3 px-5 py-3 cursor-pointer hover:bg-[#202124]">
                    <span className=" text-[20px]"><RxExit/></span>
                    <span className=" tracking-wide">Logout</span>
                </p>
                <div className=" border-b border-[#3f4245]" />

            </div>
            {/* sidebar end  */}
            
        </div>
    )
}

export default Sidebar;
