import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { MdOutlineCancelPresentation } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setQty, setSelectReceivePd } from '../../Redux/Services/saleSlice'

const SaleCalc = () => {
  const dispatch = useDispatch()
  const selectReceivePd = useSelector(state => state.saleSlice.selectReceivePd)
  const qty = useSelector(state => state.saleSlice.qty)
  // console.log(qty);

  const selectReceiveHandler = (id)=>{
    dispatch(setSelectReceivePd(id))
  }

  const data = [
    {id:1, name: "Lipstick", qty: "1 khu", price: "10000", total: "10000"},
    {id:2, name: "Lipstick", qty: "1 khu", price: "10000", total: "10000"},
    {id:3, name: "Lipstick", qty: "1 khu", price: "10000", total: "10000"},
    {id:4, name: "Lipstick", qty: "1 khu", price: "10000", total: "10000"},
  ]

  return (
    <div className='w-full border-l border-[#3f4245] bg-[#161618]'>
      <div className='flex flex-col h-screen pt-14'>
        <h1 className=' text-[25px] font-semibold px-8 pb-4 tracking-wide text-white'>Receive</h1>
        <div className=' h-auto overflow-y-scroll scrollbar'>
          {data?.map(data => {
                return(
                  <div onClick={(e)=>selectReceiveHandler(data?.id)}
                   key={data?.id} className={`${selectReceivePd == data?.id && "bg-[#ffffff15]"} border-b pt-1 border-[#3f4245] flex justify-between items-center hover:bg-[#ffffff15] cursor-pointer`}>
                    <div className=' px-8 pb-2 flex flex-col'>
                      <p className=' tracking-wide text-lg text-white'>{data?.name}</p>
                      <p className=' flex gap-2 text-sm tracking-wide text-[hsl(0,1%,67%)] '>
                        <span className=''>{qty && selectReceivePd == data?.id? qty + " khu" : data?.qty}</span>
                        <span className=' text-end'>{data?.price}</span>
                      </p>
                    </div>

                    <div>
                      <p className=' px-8 font-semibold text-lg tracking-wider text-white'>
                        {selectReceivePd == data?.id ? parseFloat(data?.price) * qty : data?.price}
                      </p>
                    </div>
                  </div> 
                )
              })}
        </div>
        <div className=' flex justify-end text-[#e8eaed] mt-auto py-2'>
              <div className=' mx-8'>
              <p className='text-xl tracking-wide'>
                <span>total-</span>
                <span className=' font-semibold'>40000</span>
              </p>
              <p className='text-[hsl(0,1%,67%)] text-end tracking-wide'>Tax-400</p>
              </div>
            </div>
        <div className='flex flex-col bg-[#202124]'>
            <div className='flex border-y border-[#3f4245]'>
                <p className='w-[33%] hover:bg-[#ffffff15] text-sm cursor-pointer py-2 px-4 border-r border-[#3f4245] text-white font-medium tracking-wide flex gap-1 items-center'><span> <BsPlus size={20}/> </span> Note</p>
                <p className='w-[33%] hover:bg-[#ffffff15] text-sm cursor-pointer py-2 px-4 border-r border-[#3f4245] text-white font-medium tracking-wide'> Note</p>
                <p className='w-[33%] hover:bg-[#ffffff15] text-sm cursor-pointer py-2 px-4 text-white font-medium tracking-wide'> Note</p>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div onClick={()=> dispatch(setQty(1))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>1</div>
                <div onClick={()=> dispatch(setQty(2))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>2</div>
                <div onClick={()=> dispatch(setQty(3))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>3</div>
                <div onClick={()=> dispatch(setQty("qty"))} 
                 className='w-[25%] cursor-pointer bg-[#D7DAE0] py-3 font-bold text-center tracking-wider text-[#3F4245]'>QTY</div>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div onClick={()=> dispatch(setQty(4))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>4</div>
                <div onClick={()=> dispatch(setQty(5))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>5</div>
                <div onClick={()=> dispatch(setQty(6))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>6</div>
                <div onClick={()=> dispatch(setQty("dis"))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer text-white py-3 font-medium text-center tracking-wider'>DIS</div>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div onClick={()=> dispatch(setQty(7))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>7</div>
                <div onClick={()=> dispatch(setQty(8))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>8</div>
                <div onClick={()=> dispatch(setQty(9))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>9</div>
                <div onClick={()=> dispatch(setQty("price"))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer text-white py-3 font-medium text-center tracking-wider'>PRICE</div>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div onClick={()=> dispatch(setQty("+"))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>+/-</div>
                <div onClick={()=> dispatch(setQty(0))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>0</div>
                <div onClick={()=> dispatch(setQty("."))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>.</div>
                <div onClick={()=> dispatch(setQty())} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer text-white py-3 font-medium text-center tracking-wider flex justify-center items-center'> <MdOutlineCancelPresentation size={21}/> </div>
            </div>
            <button className='border-t hover:bg-[#ffffff15] border-[#3f4245] py-3 text-[#8ab4f8] font-medium tracking-wider'>Payment</button>
        </div>
      </div>
    </div>
  )
}

export default SaleCalc
