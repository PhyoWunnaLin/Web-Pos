import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useMonthlyMutation } from '../../../Redux/API/saleApi';

const MonthlyTable = ({monthlyTable , monthlyTotal}) => {
    // const Monthly = [
    //     {id:1,voucher:"09523",date:"12 Aung 2023",item:"20",cash:"10,000",tax:"200",total:"10,200"},
    //     {id:2,voucher:"09523",date:"12 Aung 2023",item:"20",cash:"10,000",tax:"200",total:"10,200"},
    //     {id:4,voucher:"09523",date:"12 Aung 2023",item:"20",cash:"10,000",tax:"200",total:"10,200"},
    //     {id:5,voucher:"09523",date:"12 Aung 2023",item:"20",cash:"10,000",tax:"200",total:"10,200"},
    // ]
  return (
    <div className='flex flex-col gap-8'>
      {/* table  */}
      <table className=" text-white table-responsive2 w-full">
            <thead className=" tracking-wider text-sm border border-[#7E7F80]">
              <tr>
                <th className="p-4 max-[1000px]:pr-5 text-start">NO</th>
                <th className="p-4 max-[1000px]:pr-5 text-start">CREATE AT</th>
                <th className="p-4 max-[1000px]:pr-24 text-start">VOUCHERS</th>
                <th className="p-4 max-[1000px]:pr-10 text-end">CASH</th>
                <th className="p-4 max-[1000px]:pl-10 text-end ">TAX</th>
                <th className="p-4 max-[1000px]:pl-10 text-end">TOTAL</th>
                <th className="p-4 ">...</th>
              </tr>
            </thead>
            <tbody className=" tracking-wide text-sm">
              {monthlyTable?.map((pd) => {
                return (
                  <tr
                    key={pd?.id}
                    className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                  >
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.id}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.created_at}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.total_voucher}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.total_cash}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.tax_total}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.total}</td>
                    
                    <td className="p-4 justify-center flex gap-3 items-center overflow-hidden text-white">
                      <p className='icon1'><span><HiArrowNarrowRight/></span></p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
      </table>
      {/* total monthly  */}
      <div className={` flex mt-5  border-[#7E7F80] w-[60%]`}>
                {/* <div className=' border border-[#7E7F80] px-5 py-2 text-end w-auto'>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Days</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wide font-semibold'>12</p>
              </div> */}

              <div className=' border border-[#7E7F80] px-5 py-2 text-end w-auto'>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Vouchers</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wide font-semibold'>{monthlyTotal?.total_voucher}</p>
              </div>

              <div className=' border-r border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto'>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Cash</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wider font-semibold'>{monthlyTotal?.total_cash}</p>
              </div>
              
              <div className=' border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto'>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Tax</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wider font-semibold'>{monthlyTotal?.total_tax}</p>
              </div>

              <div className=' border border-[#7E7F80] py-2 px-5 text-end w-auto '>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wider font-semibold'>{monthlyTotal?.total}</p>
              </div>
      </div>
    </div>
  )
}

export default MonthlyTable
