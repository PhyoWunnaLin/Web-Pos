import React from 'react'
import {PiUserFocus} from 'react-icons/pi'
import {BiSolidEditAlt} from 'react-icons/bi'

const CreateUserStep3 = () => {
  return (
    <form className='border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-8 w-full rounded-md'>
      <h1 className='text-center text-[#FFFFFF] font-medium tracking-wider'>Upload Photo</h1>
      <div className='w-[150px] h-[150px] bg-[#202124] rounded-full mx-auto border-dashed border-2 border-[#8AB4F8] flex justify-center items-center relative'>
        <PiUserFocus className=' text-white' size={45}/>
        <div className='h-7 w-7 rounded-full flex items-center bg-white justify-center absolute right-4 bottom-0'>
          <BiSolidEditAlt size={18}/>
        </div>
      </div>
      <div className=' mx-auto'>
        <button className='btn2'>Clear Photo</button>
      </div>
    </form>
  )
}

export default CreateUserStep3
