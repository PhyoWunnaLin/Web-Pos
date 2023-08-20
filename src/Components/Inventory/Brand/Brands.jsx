import React, { useEffect, useRef, useState } from 'react'
import { BiSearch } from "react-icons/bi";
import Loader from '../../Loader/Loader';
import MainLayout from "../../../Layouts/MainLayout";
import Banner2 from '../../Banner/Banner2';
import NoContact from '../../NoContact/NoContact';
import { useGetBrandsQuery } from '../../../Redux/API/inventoryApi';
import Cookies from "js-cookie"
import { BiEditAlt } from "react-icons/bi";
import { HiBan } from 'react-icons/hi'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../User/successAlert.css"
import AddBrand from './AddBrand';

const Brands = () => {
    const [open,setOpen] = useState(false);
    const token = Cookies.get("token")
    const {data, isLoading} = useGetBrandsQuery(token);
    console.log(data);

    const nav = useNavigate();
  
  const route = (id) => {
    nav(`/brand/detail/${id}`);
  };
  
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

  const banHandler = () => {
    Swal.fire({
      title: 'Do you want to ban this brand?',
      icon: 'warning',
      iconColor: "#E64848",
      background: "#161618",
      showCancelButton: true,
      confirmButtonColor: '#E64848',
      cancelButtonColor: '#24262b',
      confirmButtonText: 'Ban brand'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          customClass : {
            title: 'swal2-title',
            popup: 'custom-swal-popup'
          },
          title: "Successfully baned a brand",
          icon: "success",
          confirmButtonText: "OK",
          width: 400,
          background: "#161618",
        })
      }
    })
  }

    const brands = [
        {id: 1, brandName: "go go", comName: "Dutch Lady", agent: "no no", phone: "09999", dec: "hello"},
        {id: 2, brandName: "go go", comName: "Dutch Lady", agent: "no no", phone: "0909090483", dec: "hello"},
    ]
  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* banner  */}
          <div  className=' flex justify-between items-center'>
            <Banner2
              title={"Manage Brands"}
              path1={"Inventory"}
              path2={"Manage Brands"}
              icon={true}
            />
            <div ref={ref}>
              <button onClick={() => setOpen(!open)} className='btn'>Add Stock</button>
              <AddBrand open={open}/>
            </div>
          </div>
          {brands?.length == 0  ? 

          <NoContact image={"https://img.freepik.com/free-icon/user_318-215753.jpg?t=st=1692434065~exp=1692434665~hmac=2980c4d803170dbf42c0125a36bc3a7bb74abd9db2f59410965813f7c678e325"} title1={"No Brand !"} title2={"Please ADD Brand"} /> : 

          <div className=' flex flex-col gap-8'>
            {/* banner2  */}
            <div className='flex flex-col gap-3'>
              <h1 className=" text-white font-medium text-2xl tracking-wide">
                    Brand Overview
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
                <th className="p-4 text-start">BRAND NAME</th>
                <th className="p-4 text-start">COMPANY NAME</th>
                <th className="p-4 text-start">AGENT</th>
                <th className="p-4 text-end ">PHONE</th>
                <th className="p-4 text-end">DESCRIPTION</th>
                <th className="p-4 ">...</th>
              </tr>
            </thead>
            <tbody className=" tracking-wide text-sm">
              {brands?.map((pd) => {
                return (
                  <tr
                    key={pd?.id}
                    className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                  >
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.id}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.brandName}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.comName}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.agent}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.phone}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.dec}</td>
                    
                    <td className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                      <p onClick={banHandler} className="hover-scale icon1 text-[#e94343]">
                        <HiBan />
                      </p>

                      <span className=" icon1 hover-scale">
                        <BiEditAlt />
                      </span>
                    </td>

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
  )
}

export default Brands