import React,{useEffect, useState} from 'react'
import {PiUserFocus} from 'react-icons/pi'
import {BiSolidEditAlt} from 'react-icons/bi'
import { useDisclosure } from '@mantine/hooks';
import ModalMedia from '../Modal/ModalMedia';
import { useDispatch, useSelector } from "react-redux";
import { setUserForm3 } from "../../Redux/Services/userSlice";
import { setInsert } from '../../Redux/Services/mediaSlice';
import { TiTick } from 'react-icons/ti';
import { ImArrowRight2 } from 'react-icons/im';

const CreateUserStep3 = ({currentStep , setCurrentStep , steps , setComplete , complete}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch()
  const insert = useSelector(state => state.mediaSlice.insert)
  const userForm3 = useSelector(state => state.userSlice.userForm3)
  const userSelectImg = useSelector(state => state.mediaSlice.userSelectImg)


  useEffect(()=>{
    dispatch(setInsert(false))
  },[])

  
  useEffect(()=>{
    dispatch(setUserForm3(userSelectImg))
  },[currentStep,userSelectImg])

  const clearImgHandler = (e)=>{
    e.preventDefault()
    dispatch(setInsert(false))
  }

  const run = (e) => {
    e.preventDefault()
    if(currentStep > 3) {
      setComplete(true)
    }else{
      setCurrentStep((pre) => pre + 1)
    }
  }

  return (
    <form onSubmit={run} className='flex gap-10'>
      <div className='w-[65%]'>
        <div className=' border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-8 rounded-md'>
          <h1 className='text-center text-[#FFFFFF] font-medium tracking-wider'>Upload Photo</h1>

          {/* img  */}
          {insert ? (
            <div
            onClick={open}
          className=' cursor-pointer w-[150px] h-[150px] bg-[#202124] rounded-full mx-auto border-dashed border-2 border-[#8AB4F8] flex justify-center items-center relative'>
            <img src={userSelectImg} className='w-[150px] h-[150px] object-cover absolute rounded-full' alt="" />
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
        </div>
      </div>
      <div className="flex flex-col mt-16">
                {steps.map((step, i) => {
                  return (
                    <div key={i} className="flex flex-col">
                      <div
                        className={`step-item ${
                          currentStep == i + 1 && "active"
                        } ${(i + 1 < currentStep || complete) && "complete"}`}
                      >
                        <div className="step">
                          {i + 1 < currentStep || complete ? (
                            <TiTick className=" text-black" size={22} />
                          ) : (
                            i + 1
                          )}
                        </div>
                        <p className="text-[#FFFFFF] font-medium tracking-wider">
                          {step}
                        </p>
                      </div>
                      {i < 2 && <div className="line"></div>}
                    </div>
                  );
                })}
                <div className="mt-8">
                    <button
                      className="btn flex items-center gap-2"
                    >
                      {currentStep > 3 ? "Create" : "Next"}
                      {currentStep <= 3 && (
                        <span>
                          <ImArrowRight2 />
                        </span>
                      )}
                    </button>
                </div>
      </div>   
    <ModalMedia opened={opened} onClose={close}/>
    </form>
  )
}

export default CreateUserStep3
