import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { MdOutlineCancelPresentation } from 'react-icons/md'

const SaleCalc = () => {
  const data = [
    {id:1, name: "Lipstick", qty: "1 khu", price: "10000 kyat", total: "10000"},
    {id:2, name: "Lipstick", qty: "1 khu", price: "10000 kyat", total: "10000"},
    {id:3, name: "Lipstick", qty: "1 khu", price: "10000 kyat", total: "10000"},
    {id:4, name: "Lipstick", qty: "1 khu", price: "10000 kyat", total: "10000"},
  ]
  return (
    <div className='w-full border-l border-[#3f4245]'>
      <div className='flex flex-col h-screen pt-14'>
        <h1 className=' text-[25px] font-semibold px-8 pb-4 tracking-wide text-white'>Receive</h1>
        <div className=' h-auto mb-2 overflow-y-scroll scrollbar'>
          {data.map(data => {
                return(
                  <div key={data?.id} className=' border-b pt-1 border-[#3f4245] flex justify-between items-center hover:bg-[#161618] cursor-pointer'>
                    <div className=' px-8 pb-2 flex flex-col'>
                      <p className=' tracking-wide text-lg text-white font-medium'>{data.name}</p>
                      <p className=' flex gap-2 font-medium text-sm tracking-wide text-[hsl(0,1%,67%)] '>
                        <span className=''>{data.qty}</span>
                        <span className=' text-end'>{data.price}</span>
                      </p>
                    </div>

                    <div>
                      <p className=' px-8 font-semibold text-lg tracking-wider text-white'>{data.total}</p>
                    </div>
                  </div>
                )
              })}
        </div>
        <div className=' flex justify-end text-[#e8eaed] mt-auto'>
              <div className=' mx-8'>
              <p className='text-xl tracking-wide'>
                <span>total-</span>
                <span className=' font-semibold'>40000</span>
              </p>
              <p className='text-[hsl(0,1%,67%)] text-end tracking-wide'>Tax-400</p>
              </div>
            </div>
        <div className='flex flex-col mt-2'>
            <div className='flex border-y border-[#3f4245]'>
                <p className='w-[33%] hover:bg-[#161618] text-sm cursor-pointer py-2 px-4 border-r border-[#3f4245] text-white font-medium tracking-wide flex gap-1 items-center'><span> <BsPlus size={20}/> </span> Note</p>
                <p className='w-[33%] hover:bg-[#161618] text-sm cursor-pointer py-2 px-4 border-r border-[#3f4245] text-white font-medium tracking-wide'> Note</p>
                <p className='w-[33%] hover:bg-[#161618] text-sm cursor-pointer py-2 px-4 text-white font-medium tracking-wide'> Note</p>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>1</div>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>2</div>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>3</div>
                <div className='w-[25%] cursor-pointer bg-[#D7DAE0] py-3 font-bold text-center tracking-wider text-[#3F4245]'>QTY</div>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>4</div>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>5</div>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>6</div>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer text-white py-3 font-medium text-center tracking-wider'>DIS</div>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>7</div>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>8</div>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>9</div>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer text-white py-3 font-medium text-center tracking-wider'>PRICE</div>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>+/-</div>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>0</div>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>.</div>
                <div className='w-[25%] hover:bg-[#161618] cursor-pointer text-white py-3 font-medium text-center tracking-wider flex justify-center items-center'> <MdOutlineCancelPresentation size={21}/> </div>
            </div>
            <button className='border-t border-[#3f4245] py-3 text-[#8ab4f8] font-medium tracking-wider'>Payment</button>
        </div>
      </div>
    </div>
  )
}

export default SaleCalc
