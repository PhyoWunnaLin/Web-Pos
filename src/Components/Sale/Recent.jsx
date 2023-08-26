import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Banner2 from '../Banner/Banner2'
import NoContact from '../NoContact/NoContact'
import { BiSearch } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { setSearchRecentVoucher } from '../../Redux/Services/saleSlice'
import { useRecentVoucherQuery } from '../../Redux/API/saleApi'
import Loader from '../Loader/Loader'

const Recent = () => {
    const token = Cookies.get("token")
    const {data , isLoading} = useRecentVoucherQuery(token)
    const recent = data?.data 
    const searchRecentVoucher = useSelector(state => state.saleSlice.searchRecentVoucher)
    console.log(recent);
    const dispatch = useDispatch()

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
                  Sale Overview
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
              <div className="flex gap-5 items-center justify-end mt-1">
                  <div className="text-[#7E7F80] flex gap-1 font-medium text-sm tracking-wide">
                    Sort : 
                    <select className=" bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded text-white tracking-wider outline-none">
                      <option className="bg-[#161618] hover:bg-[#202124]" value="">Last</option>
                      <option className="bg-[#161618] hover:bg-[#202124]" value="">first</option>
                    </select>
                  </div>
                  <div className="text-[#7E7F80] flex gap-1 font-medium text-sm tracking-wide">
                    Filter : 
                    <select className=" bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded-md text-white tracking-wider outline-none">
                      <option className="bg-[#161618] hover:bg-[#202124]" value="">All Files</option>
                      <option className="bg-[#161618] hover:bg-[#202124]" value="">Half Files</option>
                    </select>
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
          </div>}
            </div>
        </div>
    </MainLayout>
  )
}

export default Recent