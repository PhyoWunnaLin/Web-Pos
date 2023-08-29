import React from 'react'
import { BsFillMoonStarsFill, BsPersonCircle } from 'react-icons/bs'
import { ImArrowLeft2 } from 'react-icons/im'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './receive.css'
import { useSelector } from 'react-redux'
import {BiPrinter} from "react-icons/bi"

const Receive = () => {
  const receiveData = useSelector((state) => state.saleSlice.receiveData);
  // console.log(receiveData)

  const printHandler = () => {
    const printContent = document.getElementById('print-content');
    if (printContent) {
      // const originalContents = document.body.innerHTML;
      // const printContents = printContent.innerHTML;

      // document.body.innerHTML = printContents;
      window.print();

      // document.body.innerHTML = originalContents;
    }
  };

  return (
    <div className=" bg-[#202124]">
      {/* navbar  */}
        <div className=' print:hidden fixed w-full z-10 bg-[#202124]'>
          <div className=" flex justify-between items-center border-b border-[#3f4245] text-[#e8eaed] px-5 py-3 b-60 w-full">
          <Link to={'/'}><h1 className=" font-semibold tracking-wider text-lg cursor-pointer">MMS</h1></Link>
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

          <div className='border-b border-[#3f4245] py-3 px-5 '>
              <div className=' flex  items-center text-white gap-1'>
                <p className='text-[#e8eaed]'><ImArrowLeft2/></p>
                
                <Link to={"/sale/cashier"}>
                  <p className='text-[#e8eaed]'>Back</p>
                </Link>
              </div>
          </div>
        </div>
      {/* navbar end */}

      {/* receive  */}
      <div className=' pt-[130px] pb-10 flex justify-center items-center'>
        <div className=' w-[50%] bg-[#161618] px-5 pt-9 pb-10 text-[#e8eaed] receive-shadow rounded'>
        <div id="print-content" className=' w-full title'>
          <h1 className=' text-[25px] font-semibold px-8 pb-4 tracking-wide'>Receive</h1>

          <div>
            {/* voucher data  */}
            {receiveData?.records?.map(data => {
              return(
                <div key={data?.id} className=' border-bottom pt-1 flex justify-between items-center'>
                  <div className=' px-8 pb-2 flex flex-col'>
                    <p className=' tracking-wide text-lg'>{data?.product_name}</p>
                    <p className=' flex gap-2 tracking-wide text-[hsl(0,1%,67%)] '>
                      <span className='title'>{data?.quantity}</span>
                      <span className=' text-end title'>{data?.sale_price}</span>
                    </p>
                  </div>

                  <div>
                    <p className=' px-8 font-semibold text-xl tracking-wider title'>{data?.cost}</p>
                  </div>
                </div>
              )
            })}
            
            {/* total  */}
            <div className=' flex justify-end pt-1 total text-[#e8eaed] title'>
              <div className=' mx-8'>
              <p className='text-xl tracking-wide'>
                <span>total-</span>
                <span className=' font-semibold'>{receiveData?.net_total}</span>
              </p>
              <p className=' text-end tracking-wide tax-color'>Tax-{receiveData?.tax}</p>
              </div>
            </div>
          </div>

        </div>

        </div>
      </div>

      {/* button  */}
      <div className=' flex justify-center mt-[-10px] gap-4 print:hidden'>
        <Link to={'/sale/recent'}>
        <button className=' btn5 text-white'>
          Recent
        </button>
        </Link>

        <Link to={'/sale/cashier'}>
        <button className=' btn5 text-white'>
          Next Sale
        </button>
        </Link>

        <button onClick={printHandler} className=' btn5 text-[#8bb4f6] text-lg tracking-wide'>
          <BiPrinter/>
        </button>
      </div>

    </div>
  )
}

export default Receive