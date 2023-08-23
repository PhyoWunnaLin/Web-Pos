import React from 'react'
import { BsFillMoonStarsFill, BsPersonCircle } from 'react-icons/bs'
import { ImArrowLeft2 } from 'react-icons/im'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Receive = () => {
  const data = [
    {id:1, name: "Lipstick", qty: "1 khu", price: "10000 kyat", total: "10000"},
    {id:2, name: "Lipstick", qty: "1 khu", price: "10000 kyat", total: "10000"},
    {id:3, name: "Lipstick", qty: "1 khu", price: "10000 kyat", total: "10000"},
    {id:4, name: "Lipstick", qty: "1 khu", price: "10000 kyat", total: "10000"},
  ]
  return (
    <div className=" bg-[#202124]">
      {/* navbar  */}
        <div className=' fixed w-full z-10 bg-[#202124]'>
          <div className=" flex justify-between items-center border-b border-[#3f4245] text-[#e8eaed] px-5 py-3 b-60 w-full">
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
        <div className=' w-[50%] bg-[#161618] px-5 pt-9 pb-10 text-[#e8eaed]'>
          <h1 className=' text-[25px] font-semibold px-8 pb-4 tracking-wide'>Receive</h1>

          <div>
            {/* voucher data  */}
            {data.map(data => {
              return(
                <div className=' border-b pt-1 border-[#3f4245] flex justify-between items-center'>
                  <div className=' px-8 pb-2 flex flex-col'>
                    <p className=' tracking-wide text-lg'>{data.name}</p>
                    <p className=' flex gap-2 tracking-wide text-[hsl(0,1%,67%)] '>
                      <span className=''>{data.qty}</span>
                      <span className=' text-end'>{data.price}</span>
                    </p>
                  </div>

                  <div>
                    <p className=' px-8 font-semibold text-xl tracking-wider'>{data.total}</p>
                  </div>
                </div>
              )
            })}

            {/* total  */}
            <div className=' flex justify-end mt-[100px] text-[#e8eaed]'>
              <div className=' mx-8'>
              <p className='text-xl tracking-wide'>
                <span>total-</span>
                <span className=' font-semibold'>40000</span>
              </p>
              <p className='text-[hsl(0,1%,67%)] text-end tracking-wide'>Tax-400</p>
              </div>
            </div>

            {/* button  */}
            <div className=' flex justify-center mt-8'>
              <button className=' btn text-black w-[60%] tracking-wide'>
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Receive