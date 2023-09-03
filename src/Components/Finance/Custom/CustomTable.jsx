import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const CustomTable = ({currentShowTable,currentShowTotal,currentRecentTable,currentRecentTotal}) => {
  const customTable = currentShowTable ? currentShowTable : currentRecentTable
    
  return (
    <div className='flex flex-col gap-8'>
      {/* table  */}
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
              {customTable?.map((pd) => {
                return (
                  <tr
                    key={pd?.id}
                    className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                  >
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.id}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.voucher_number}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.created_time}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.item_count}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.total}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.tax}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.net_total}</td>
                    
                    <td className="p-4 justify-center flex gap-3 items-center overflow-hidden text-white">
                      <p className='icon1'><span><HiArrowNarrowRight/></span></p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
      </table>
      
    </div>
  )
}

export default CustomTable
