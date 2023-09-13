import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const MonthlyTable = ({ monthlyTable }) => {
  return (
    <div className="flex flex-col gap-8">
      {/* table  */}
      <table className=" text-white max-[760px]:whitespace-nowrap max-[760px]:block max-[760px]:overflow-x-auto w-full">
        <thead className=" tracking-wider text-sm border border-[#7E7F80]">
          <tr>
            <th className="p-4 max-[1000px]:pr-5 text-start">NO</th>
            <th className="p-4 max-[1000px]:pr-5 text-start">CREATE AT</th>
            <th className="p-4 max-[1000px]:pr-24 text-start">VOUCHERS</th>
            <th className="p-4 text-end">CASH</th>
            <th className="p-4 max-[1000px]:pl-10 text-end ">TAX</th>
            <th className="p-4 max-[1000px]:pl-10 text-end">TOTAL</th>
            {/* <th className="p-4 ">...</th> */}
          </tr>
        </thead>
        <tbody className=" tracking-wide text-sm">
          {monthlyTable?.map((pd) => {
            return (
              <tr
                key={pd?.id}
                className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
              >
                <td className=" p-4 text-start">{pd?.id}</td>
                <td className=" p-4 text-start">
                  {pd?.created_at}
                </td>
                <td className=" p-4 text-start">
                  {pd?.total_voucher}
                </td>
                <td className=" p-4 text-end">
                  {pd?.total_cash}
                </td>
                <td className=" p-4 text-end">
                  {pd?.tax_total}
                </td>
                <td className=" p-4 text-end">{pd?.total}</td>
                {/* <td className="p-4 justify-center flex gap-3 items-center overflow-hidden text-white">
                  <p className="icon1">
                    <span>
                      <HiArrowNarrowRight />
                    </span>
                  </p>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyTable;
