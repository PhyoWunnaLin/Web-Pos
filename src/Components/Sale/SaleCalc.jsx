import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { MdOutlineCancelPresentation } from 'react-icons/md'

const SaleCalc = () => {
  return (
    <div className='w-[35%] border border-[#3f4245] h-screen'>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
            <div className='flex border-y border-[#3f4245]'>
                <p className='w-[33%] text-sm cursor-pointer py-2 px-4 border-r border-[#3f4245] text-white font-medium tracking-wide flex gap-1 items-center'><span> <BsPlus size={20}/> </span> Note</p>
                <p className='w-[33%] text-sm cursor-pointer py-2 px-4 border-r border-[#3f4245] text-white font-medium tracking-wide'> Note</p>
                <p className='w-[33%] text-sm cursor-pointer py-2 px-4 text-white font-medium tracking-wide'> Note</p>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div className='w-[25%] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>1</div>
                <div className='w-[25%] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>2</div>
                <div className='w-[25%] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>3</div>
                <div className='w-[25%] cursor-pointer bg-[#D7DAE0] py-3 font-bold text-center tracking-wider text-[#3F4245]'>QTY</div>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div className='w-[25%] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>4</div>
                <div className='w-[25%] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>5</div>
                <div className='w-[25%] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>6</div>
                <div className='w-[25%] cursor-pointer text-white py-3 font-medium text-center tracking-wider'>DIS</div>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div className='w-[25%] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>7</div>
                <div className='w-[25%] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>8</div>
                <div className='w-[25%] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>9</div>
                <div className='w-[25%] cursor-pointer text-white py-3 font-medium text-center tracking-wider'>PRICE</div>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div className='w-[25%] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>+/-</div>
                <div className='w-[25%] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>0</div>
                <div className='w-[25%] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>.</div>
                <div className='w-[25%] cursor-pointer text-white py-3 font-medium text-center tracking-wider flex justify-center items-center'> <MdOutlineCancelPresentation size={21}/> </div>
            </div>
            <button className='border-t border-[#3f4245] py-3 text-[#8ab4f8] font-medium tracking-wider'>Payment</button>
        </div>
      </div>
    </div>
  )
}

export default SaleCalc
