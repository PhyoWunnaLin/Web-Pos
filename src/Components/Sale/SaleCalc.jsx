import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { MdOutlineCancelPresentation } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllSaleItem, deleteQuantity, setQty, setReceiveData, setSaleItem, setSelectReceivePd } from '../../Redux/Services/saleSlice'
import { useCheckoutMutation } from '../../Redux/API/saleApi'
import Cookies from 'js-cookie'
import { Route, useNavigate } from 'react-router-dom'
import { Loader } from '@mantine/core'
import Swal from 'sweetalert2'

const SaleCalc = () => {
  const dispatch = useDispatch()
  const selectReceivePd = useSelector(state => state.saleSlice.selectReceivePd)
  const qty = useSelector(state => state.saleSlice.qty)
  const saleItem = useSelector((state) => state.saleSlice.saleItem);
  const total = useSelector((state) => state.saleSlice.total);
  const tax = useSelector((state) => state.saleSlice.tax);
  const token = Cookies.get("token");
  const [checkout , {isLoading}] = useCheckoutMutation();
  const nav = useNavigate();
  // console.log(saleItem);

  const newData = { items : saleItem.map(item => {
    return(
        {
          product_id : item.id,
          quantity : Number(item.quantity)
        }
    )
  })}

  const errorHandler = (error) => {
    Swal.fire({
      title: error,
      icon: 'warning',
      iconColor: "#E64848",
      background: "#161618",
      // showCloseButton: true,
      confirmButtonColor: '#E64848',
      confirmButtonText: 'OK'
    })
  }

  const handlePayment = async () => {
    try {
      const data = await checkout({token,newData});
      console.log(data?.error?.data?.error)
      if(data?.data) {
        dispatch(setReceiveData(data?.data));
        nav("/sale/receive");
        dispatch(deleteAllSaleItem());
      }else if (data?.error){
        errorHandler(data?.error?.data?.error)
      }
    } catch (error) {
      console.log(error)
    }
  } 

  const selectReceiveHandler = (id)=>{
    dispatch(setSelectReceivePd(id))
  }



  return (
    <div className='w-full border-l border-[#3f4245] bg-[#161618]'>
      <div className='flex flex-col h-screen pt-16'>
        <h1 className=' text-[25px] font-semibold px-8 pb-4 tracking-wide text-white'>Receive</h1>
        <div className=' h-auto overflow-y-scroll scrollbar'>
          {saleItem?.map(data => {
                return(
                  <div onClick={(e)=>selectReceiveHandler(data?.id)}
                   key={data?.id} className={`${selectReceivePd == data?.id && "bg-[#ffffff15]"} border-b pt-1 border-[#3f4245] flex justify-between items-center hover:bg-[#ffffff15] cursor-pointer`}>
                    <div className=' px-8 pb-2 flex flex-col'>
                      <p className=' tracking-wide text-lg text-white'>{data?.name}</p>
                      <p className=' flex gap-2 text-sm tracking-wide text-[hsl(0,1%,67%)] '>
                        <span className=''> {data?.quantity == "" ? "0 khu" : data?.quantity + " khu"}</span>
                        <span className=' text-end'>{data?.sale_price}</span>
                      </p>
                    </div>

                    <div>
                      <p className=' px-8 font-semibold text-lg tracking-wider text-white'>
                        {data?.sale_price * Number(data?.quantity)}
                      </p>
                    </div>
                  </div> 
                )
              })}
        </div>
        {saleItem.length != 0 && <div className=' flex justify-end text-[#e8eaed] mt-auto py-2'>
            <div className=' mx-8'>
              <p className='text-xl tracking-wide'>
                <span>total-</span>
                <span className=' font-semibold'>{total}</span>
              </p>
              <p className='text-[hsl(0,1%,67%)] text-end tracking-wide'>Tax-{tax.toFixed(2)}</p>
            </div>
        </div>}
        <div className={`flex flex-col bg-[#202124] ${saleItem.length == 0 ? "mt-auto" : "mt-0"}`}>
            <div className='flex border-y border-[#3f4245]'>
                <p className='w-[33%] hover:bg-[#ffffff15] text-sm cursor-pointer py-2 px-4 border-r border-[#3f4245] text-white font-medium tracking-wide flex gap-1 items-center'><span> <BsPlus size={20}/> </span> Note</p>
                <p className='w-[33%] hover:bg-[#ffffff15] text-sm cursor-pointer py-2 px-4 border-r border-[#3f4245] text-white font-medium tracking-wide'> Note</p>
                <p className='w-[33%] hover:bg-[#ffffff15] text-sm cursor-pointer py-2 px-4 text-white font-medium tracking-wide'> Note</p>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div onClick={()=> dispatch(setQty({q:"1",id:selectReceivePd}))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>1</div>
                <div onClick={()=> dispatch(setQty({q:"2",id:selectReceivePd}))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>2</div>
                <div onClick={()=> dispatch(setQty({q:"3",id:selectReceivePd}))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>3</div>
                <div
                 className='w-[25%] cursor-pointer bg-[#D7DAE0] py-3 font-bold text-center tracking-wider text-[#3F4245]'>QTY</div>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div onClick={()=> dispatch(setQty({q:"4",id:selectReceivePd}))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>4</div>
                <div onClick={()=> dispatch(setQty({q:"5",id:selectReceivePd}))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>5</div>
                <div onClick={()=> dispatch(setQty({q:"6",id:selectReceivePd}))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>6</div>
                <div
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer text-white py-3 font-medium text-center tracking-wider'>DIS</div>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div onClick={()=> dispatch(setQty({q:"7",id:selectReceivePd}))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>7</div>
                <div onClick={()=> dispatch(setQty({q:"8",id:selectReceivePd}))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>8</div>
                <div onClick={()=> dispatch(setQty({q:"9",id:selectReceivePd}))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>9</div>
                <div 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer text-white py-3 font-medium text-center tracking-wider'>PRICE</div>
            </div>
            <div className='flex border-y border-[#3f4245]'>
                <div
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>+/-</div>
                <div onClick={()=> dispatch(setQty({q:"0",id:selectReceivePd}))} 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>0</div>
                <div 
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer border-r-2 border-[#3f4245] text-white py-3 font-medium text-center'>.</div>
                <div onClick={() => dispatch(deleteQuantity(selectReceivePd))}
                 className='w-[25%] hover:bg-[#ffffff15] cursor-pointer text-white py-3 font-medium text-center tracking-wider flex justify-center items-center'> <MdOutlineCancelPresentation size={21}/> </div>
            </div>
            <button disabled={isLoading && true} onClick={handlePayment} className='border-t hover:bg-[#ffffff15] border-[#3f4245] py-3 text-[#8ab4f8] font-medium tracking-wider flex justify-center items-center gap-2'>Payment {isLoading && <Loader size="xs" className={"-mb-[2px]"}/>} </button>
        </div>
      </div>
    </div>
  )
}

export default SaleCalc
