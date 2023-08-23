import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import ModalMedia from "../../Modal/ModalMedia";
import { PiUserFocus } from "react-icons/pi";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaRegImages } from "react-icons/fa";
import { ImImages } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { setInsert } from "../../../Redux/Services/mediaSlice";
import { setPdForm3 } from "../../../Redux/Services/productSlice";

const AddProductStep3 = ({currentStep}) => {
  const [opened, { open, close }] = useDisclosure(false);
  // const pd = useSelector(state => state.productSlice.pdForm2)
  // console.log(pd)
  const dispatch = useDispatch()
  const pdSelectImg = useSelector(state => state.mediaSlice.pdSelectImg)
  const insert = useSelector(state => state.mediaSlice.insert)

  useEffect(()=>{
    dispatch(setInsert(false))
  },[])

  useEffect(()=>{
    dispatch(setPdForm3(pdSelectImg))
  },[currentStep,pdSelectImg])

  const clearImgHandler = (e)=>{
    e.preventDefault()
    dispatch(setInsert(false))
  }

  return (
    <>
      <form className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-8 w-full rounded-md">
        <h1 className="text-center text-[#FFFFFF] font-medium tracking-wider">
          Upload Photo
        </h1>

       {/* img  */}
      {insert ? (
        <div
        onClick={open}
       className=' cursor-pointer w-[150px] h-[150px] bg-[#202124] rounded-full mx-auto border-dashed border-2 border-[#8AB4F8] flex justify-center items-center relative'>
        <img src={pdSelectImg} className='w-[150px] h-[150px] object-cover absolute rounded-full' alt="" />
        <div className='h-7 w-7 hover:bg-[#c1c5cc] hover:scale-[1.1] duration-200 rounded-full flex items-center bg-white justify-center absolute right-4 bottom-0'>
          <BiSolidEditAlt size={18}/>
        </div>
      </div>
      ) : (
        <div
        onClick={open}
       className=' cursor-pointer w-[150px] h-[150px] bg-[#202124] rounded-full mx-auto border-dashed border-2 border-[#8AB4F8] flex justify-center items-center relative'>
        <PiUserFocus className=' text-white' size={45}/>
        <div className='h-7 w-7 hover:bg-[#c1c5cc] hover:scale-[1.1] duration-200 rounded-full flex items-center bg-white justify-center absolute right-4 bottom-0'>
          <BiSolidEditAlt size={18}/>
        </div>
      </div>
      )}

      {/* btn  */}
      <div className=' mx-auto'>
        <button onClick={clearImgHandler} className='btn2'>Clear Photo</button>
      </div>
      </form>
      <ModalMedia opened={opened} onClose={close}/>
    </>
  );
};

export default AddProductStep3;
