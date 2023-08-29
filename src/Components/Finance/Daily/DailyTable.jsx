import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const DailyTable = () => {
    const Daily = [
        {id:1,voucher:"09523",time:"11:30 AM",item:"20",cash:"10,000",tax:"200",total:"10,200"},
        {id:2,voucher:"09523",time:"11:30 AM",item:"20",cash:"10,000",tax:"200",total:"10,200"},
        {id:4,voucher:"09523",time:"11:30 AM",item:"20",cash:"10,000",tax:"200",total:"10,200"},
        {id:5,voucher:"09523",time:"11:30 AM",item:"20",cash:"10,000",tax:"200",total:"10,200"},
    ]
  return (
    <table className=" text-white table-responsive2 w-full">
            <thead className=" tracking-wider text-sm border border-[#7E7F80]">
              <tr>
                <th className="p-4 max-[1000px]:pr-5 text-start">NO</th>
                <th className="p-4 max-[1000px]:pr-5 text-start">VOUCHER</th>
                <th className="p-4 max-[1000px]:pr-24 text-start">TIME</th>
                <th className="p-4 max-[1000px]:pr-16 text-end">ITEM COUNT</th>
                <th className="p-4 max-[1000px]:pr-10 text-end">CASH</th>
                <th className="p-4 max-[1000px]:pl-10 text-end ">TAX</th>
                <th className="p-4 max-[1000px]:pl-10 text-end">TOTAL</th>
                <th className="p-4 ">...</th>
              </tr>
            </thead>
            <tbody className=" tracking-wide text-sm">
              {Daily?.map((pd) => {
                return (
                  <tr
                    key={pd?.id}
                    className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                  >
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.id}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.voucher}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.time}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.item}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.cash}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.tax}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.total}</td>
                    
                    <td className="p-4 justify-center flex gap-3 items-center overflow-hidden text-white">
                      <p className='icon1'><span><HiArrowNarrowRight/></span></p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
    </table>
  )
}

export default DailyTable
