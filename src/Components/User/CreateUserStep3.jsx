import React,{useEffect, useState} from 'react'
import {PiUserFocus} from 'react-icons/pi'
import {BiSolidEditAlt} from 'react-icons/bi'
import { useDisclosure } from '@mantine/hooks';
import ModalMedia from '../Modal/ModalMedia';
import { useDispatch, useSelector } from "react-redux";
import { setUserForm3 } from "../../Redux/Services/userSlice";

const CreateUserStep3 = ({currentStep}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [photo,setPhoto] = useState("")
  const dispatch = useDispatch()
  const selectImg = useSelector(state => state.mediaSlice.selectImg)
  const insert = useSelector(state => state.mediaSlice.insert)
  // console.log(selectImg);

  useEffect(()=>{
    setPhoto(selectImg),
    dispatch(setUserForm3(photo))
  },[currentStep])

  return (
    <>
    <form className='border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-8 w-full rounded-md'>
      <h1 className='text-center text-[#FFFFFF] font-medium tracking-wider'>Upload Photo</h1>

      {/* img  */}
      {insert ? (
        <div
        onClick={open}
       className=' cursor-pointer w-[150px] h-[150px] bg-[#202124] rounded-full mx-auto border-dashed border-2 border-[#8AB4F8] flex justify-center items-center relative z-10'>
        <img src={selectImg} className='w-full object-cover absolute rounded-full' alt="" />
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
        <button className='btn2'>Clear Photo</button>
      </div>
    </form>

    <ModalMedia opened={opened} onClose={close}/>
    </>
  )
}

export default CreateUserStep3
