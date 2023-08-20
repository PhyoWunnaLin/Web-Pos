import React, { useEffect, useRef, useState } from 'react'
import Loader from "../../Loader/Loader";
import MainLayout from "../../../Layouts/MainLayout";
import Banner2 from '../../Banner/Banner2';
import NoContact from '../../NoContact/NoContact';
import { BiSearch } from "react-icons/bi";
import { useGetStocksQuery } from '../../../Redux/API/inventoryApi';
import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom";
import "../../User/overview.css"
import AddStock from './AddStock';
import { FiPlus } from 'react-icons/fi';

const Stocks = () => {
    const [open,setOpen] = useState(false);
    const token = Cookies.get("token")
    const {data, isLoading} = useGetStocksQuery(token)
    console.log(data);

    const nav = useNavigate();

    const route = (id) => {
      nav(`/stock/detail/${id}`);
    };

    const stocks = [
        {id: 1, pdName: "BANANA", userName: "dd", q: 10, create: 12/7/2023},
        {id: 2, pdName: "BANANA", userName: "dd", q: 10, create: 12/7/2023}
    ]
    const ref = useRef()
    useEffect(() => {
      const checkIfClickedOutside = e => {
        if (open && ref.current && !ref.current.contains(e.target)) {
          setOpen(false)
        }
      }
      document.addEventListener("click", checkIfClickedOutside)
      return () => {
        document.removeEventListener("click", checkIfClickedOutside)
      }
    }, [open])

  return (
    <>
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* banner  */}
          <div className=' flex justify-between items-center'>
            <Banner2
              title={"Stock Control"}
              path1={"Inventory"}
              path2={"Stock Control"}
              icon={true}
            />  
            <div ref={ref}>
              <button onClick={() => setOpen(!open)} className='btn flex gap-2 items-center'><span className=" text-[#161618]">
                <FiPlus />
              </span> Add Stock</button>
              <AddStock open={open} setOpen={setOpen}/>
            </div>
          </div>
          {stocks?.length == 0  ? 

          <NoContact image={"https://img.freepik.com/free-icon/user_318-215753.jpg?t=st=1692434065~exp=1692434665~hmac=2980c4d803170dbf42c0125a36bc3a7bb74abd9db2f59410965813f7c678e325"} title1={"No Stock !"} title2={"Please ADD Stock"} /> : 

          <div className=' flex flex-col gap-8'>
            {/* banner2  */}
            <div className='flex flex-col gap-3'>
              <h1 className=" text-white font-medium text-2xl tracking-wide">
                    Stock Overview
              </h1>
              <div className=" flex justify-between items-center">           
                  <form className="relative">
                    <input
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
            <div>
        {isLoading ? (
          <div className=" ">
            <Loader/>
          </div>) 
          : (
            <table className=" text-white table-responsive w-full">
            <thead className=" tracking-wider text-sm border border-[#7E7F80]">
              <tr>
                <th className="p-4 text-start">NO</th>
                <th className="p-4 text-start">PRODUCT NAME</th>
                <th className="p-4 text-start">USER NAME</th>
                <th className="p-4 text-end">ADDED QUANTITY</th>
                <th className="p-4 text-start">CREATED AT</th>
              </tr>
            </thead>
            <tbody className=" tracking-wide text-sm">
              {stocks?.map((pd) => {
                return (
                  <tr
                    key={pd?.id}
                    className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                  >
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.id}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.pdName}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.userName}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.q}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.create}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          )}
    </div>
          </div>}

        </div>
      </div>
    </MainLayout>
    </>
  )
}

export default Stocks