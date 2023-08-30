import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Banner2 from '../Banner/Banner2'
import NoContact from '../NoContact/NoContact'
import { BiSearch, BiCalculator } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { setSaleClose, setSearchRecentVoucher } from '../../Redux/Services/saleSlice'
import { useRecentVoucherQuery } from '../../Redux/API/saleApi'
import Loader from '../Loader/Loader'
import { Pagination } from '@mantine/core';
import {PiExportBold} from "react-icons/pi"
import Swal from "sweetalert2";

const Recent = () => {
    const token = Cookies.get("token")
    const p = localStorage.getItem("page");
    const [page,setPage] = useState(p ? p : 1);
    const {data , isLoading} = useRecentVoucherQuery({token,page})
    // console.log(data)
    const totalPage = data?.meta?.last_page
    const recent = data?.data 
    const searchRecentVoucher = useSelector(state => state.saleSlice.searchRecentVoucher)
    const dispatch = useDispatch()
    const saleClose = useSelector(state => state.saleSlice.saleClose)

    useEffect(() => {
      localStorage.setItem("page",page)
    },[page])
    
    // console.log(saleClose);

    // const recent = [
    //   {id: 1, voucher_number: "aabbcc", total: 30000, tax: 300, net_total: 33000, created_at: 12/7/2023, created_time: 3}
    // ]

    const saleCloseHandler = () => {
      Swal.fire({
        title: `Are you sure to sale ${saleClose ? "Open" : "Close"} ?`,
        icon: 'question',
        iconColor: "#fff",
        background: "#161618",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: '#fff',
        cancelButtonColor: '#24262b',
        confirmButtonText: `${saleClose ? "Open" : "CACULATE"}`,
      }).then(async(result) => {
        if (result.isConfirmed) {
          dispatch(setSaleClose(!saleClose))
        }
      })
    }

  return (
    <MainLayout>
        <div className="bg-[#202124] w-full flex justify-center">
            <div className="w-[95%] my-6 flex flex-col gap-8">
                {/* banner  */}
                <Banner2
                    title={"Recent"}
                    path1={"Sale"}
                    path2={"Recent"}
                    btn2={"Go To Shop"}
                    button2={true}
                    route={"/sale/cashier"}
                />
                {recent?.length == 0 ? 
          
          // no user 
          <NoContact image={"https://static.thenounproject.com/png/3518204-200.png"} size={"w-[60%]"} title1={"No Recent Voucher !"} />

           : 
          
          <div className="flex flex-col gap-8">
            {/* banner2  */}
          <div className="flex flex-col gap-3">
            <h1 className=" text-white font-medium text-2xl tracking-wide">
                Today Sales Overview
            </h1>
            <div className=" flex justify-between items-center max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-3">
              <form className="relative">
                  <input onChange={(e)=> dispatch(setSearchRecentVoucher(e.target.value))}
                    type="text"
                    placeholder="Search"
                    className="search-input"
                  />
                  <div className="text-white absolute top-[10px] left-[11px]">
                    <BiSearch size={20} />
                  </div>
              </form>
              <div className="flex gap-3 items-center justify-end mt-1 select-none">
                  <div className="text-white bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded  outline-none flex gap-1 font-medium text-sm tracking-wide cursor-pointer hover:bg-[#24262b]">
                    <div className=' flex justify-center items-center gap-1 py-2 px-2'>
                    <PiExportBold className=' text-[#8bb4f6] text-lg'/>
                    <p className=' tracking-wider'>Export</p>
                    </div>
                    {/* <select className=" bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded text-white tracking-wider outline-none">
                      <option className="bg-[#161618] hover:bg-[#202124]" value="">pdf</option>
                      <option className="bg-[#161618] hover:bg-[#202124]" value="">pdf</option>
                    </select> */}
                  </div>
                  <div onClick={saleCloseHandler} className="text-white bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded  outline-none flex gap-1 font-medium text-sm tracking-wide cursor-pointer hover:bg-[#24262b]">
                    <div className=' flex justify-center items-center gap-1 py-2 px-2'>
                    <BiCalculator className=' text-[#8bb4f6] text-lg'/>
                    <p className=' tracking-wider'>{saleClose ? "Sale Open" : "Sale Close"}</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          {/* table  */}
          {isLoading ? (
          <div className=" ">
            <Loader/>
          </div>) 
          : (
            <table className=" text-white table-responsive w-full">
            <thead className=" tracking-wider text-sm border border-[#7E7F80]">
              <tr>
                <th className="p-4 text-start">NO</th>
                <th className="p-4 text-start">VOUCHER</th>
                <th className="p-4 text-start">CASH</th>
                <th className="p-4 text-start">TAX</th>
                <th className="p-4 text-start">TOTAL</th>
                <th className="p-4 text-start">DATE</th>
                <th className="p-4 text-start">TIME</th>
              </tr>
            </thead>
            <tbody className=" tracking-wide text-sm">
              {recent?.filter(rVoucher => {
                if(searchRecentVoucher === ""){
                  return rVoucher
                }else if(rVoucher?.voucher_number.toLowerCase().includes(searchRecentVoucher.toLowerCase())){
                  return rVoucher
                }
              }).map((rVoucher) => {
                return (
                  <tr
                    key={rVoucher?.id}
                    className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                  >
                    <td className=" p-4 text-start">{rVoucher?.id}</td>
                    <td className=" p-4 text-start">{rVoucher?.voucher_number}</td>
                    <td className=" p-4 text-start">{rVoucher?.total}</td>
                    <td className=" p-4 text-start">{rVoucher?.tax}</td>
                    <td className=" p-4 text-start">{rVoucher?.net_total}</td>
                    <td className=" p-4 text-start">{rVoucher?.created_at}</td>
                    <td className=" p-4 text-start">{rVoucher?.created_time}</td>
                    
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
          )}

          <div className={` ${isLoading ? "hidden" : "flex"} gap-5 items-end w-full`}>
            {/* TOTAL DAILY MONEY  */}
            <div className={` flex mt-5  border-[#7E7F80] w-[60%]`}>
              <div className=' border border-[#7E7F80] px-5 py-2 text-end w-auto'>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Vouchers</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wide font-semibold'>15</p>
              </div>

              <div className=' border-r border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto'>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Cash</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wider font-semibold'>1400000</p>
              </div>
              
              <div className=' border-t border-b border-[#7E7F80] px-5 py-2 text-end w-auto'>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total Tax</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wider font-semibold'>10000</p>
              </div>

              <div className=' border border-[#7E7F80] py-2 px-5 text-end w-auto '>
                <h1 className=' text-[#8bb4f6] font-semibold whitespace-nowrap tracking-wide'>Total</h1>
                <p className=' text-white text-xl whitespace-nowrap tracking-wider font-semibold'>1500000</p>
              </div>
            </div>

            {/* Pagination */}
            <div className=' ml-auto mb-1'>
              <Pagination total={totalPage} value={Number(page)} onChange={setPage}/>
            </div>
          </div>

          </div>}
            </div>
        </div>
    </MainLayout>
  )
}

export default Recent