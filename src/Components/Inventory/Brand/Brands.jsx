import React, { useEffect, useRef, useState } from 'react'
import { BiSearch, BiTrash } from "react-icons/bi";
import Loader from '../../Loader/Loader';
import MainLayout from "../../../Layouts/MainLayout";
import Banner2 from '../../Banner/Banner2';
import NoContact from '../../NoContact/NoContact';
import { useDeleteBrandMutation, useGetBrandsQuery } from '../../../Redux/API/inventoryApi';
import Cookies from "js-cookie"
import { BiEditAlt } from "react-icons/bi";
import { HiBan } from 'react-icons/hi'
import Swal from "sweetalert2";
import "../../User/successAlert.css"
import AddBrand from './AddBrand';
import { FiPlus } from 'react-icons/fi';
import { setBrands, setSearchBrand } from '../../../Redux/Services/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import noPd from "../../../assets/noPd3.png"
import EditBrand from './EditBrand';
import { setBrandEditSelectImg, setBrandSelectImg } from '../../../Redux/Services/mediaSlice';

const Brands = () => {
    const [id,setId] = useState(null);
    const [sidebarOpen,setSidebarOpen] = useState(false);
    const [editSidebarOpen,setEditSidebarOpen] = useState(false);
    const token = Cookies.get("token")
    const {data, isLoading} = useGetBrandsQuery(token);
    const [deleteBrand] = useDeleteBrandMutation();
    const brands = useSelector(state => state.productSlice.brands) 
    const searchBrand = useSelector(state => state.productSlice.searchBrand) 
    // console.log(searchBrand);
    const dispatch = useDispatch()
    const ref = useRef()
    // const ref2 = useRef()

    useEffect(()=>{
      dispatch(setBrands(data?.data))
    },[data])

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
    }, [sidebarOpen])

    const handleOpen = () => {
      setSidebarOpen(!sidebarOpen);
    }

    const handleDeleteBrand = (id) => {
      Swal.fire({
        title: 'Do you want to delete this brand?',
        icon: 'warning',
        iconColor: "#E64848",
        background: "#161618",
        showCancelButton: true,
        // showCloseButton: true,
        confirmButtonColor: '#E64848',
        cancelButtonColor: '#24262b',
        confirmButtonText: 'Delete'
      }).then(async(result) => {
        if (result.isConfirmed) {
          const data = await deleteBrand({token,id})
          console.log(data);
          if(data?.data?.message){
            Swal.fire({
              customClass : {
                title: 'swal2-title',
                popup: 'custom-swal-popup'
              },
              title: "Successfully delete a brand",
              icon: "success",
              confirmButtonText: "OK",
              // showCloseButton: true,
              width: 400,
              background: "#161618",
            })
          }
          
        }
      })
    }

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
            <div>
              <button onClick={() => {
                handleOpen();
                setId(null)
              }} className='btn flex gap-2 items-center'><span className=" text-[#161618]">
                <FiPlus />
              </span> Add Brand</button>
              <AddBrand sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} id={id}/>
            </div>
          </div>
          {brands?.length == 0  ? 

          <NoContact image={noPd} size={"w-[55%]"} title1={"No Brand !"} title2={"Please ADD Brand"} /> : 

          <div className=' flex flex-col gap-8'>
            {/* banner2  */}
            <div className='flex flex-col gap-3'>
              <h1 className=" text-white font-medium text-2xl tracking-wide">
                    Brand Overview
              </h1>
              <div className=" flex justify-between items-center max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-3 ">           
                  <form className="relative">
                    <input onChange={(e)=> dispatch(setSearchBrand(e.target.value))}
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
              {brands?.filter(brand => {
                if(searchBrand === ""){
                  return brand
                }else if(brand?.name.toLowerCase().includes(searchBrand.toLowerCase())){
                  return brand
                }
              }).map((brand) => {
                return (
                  <tr
                    key={brand?.id}
                    className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                  >
                    <td onClick={() => route(brand?.id)} className=" cursor-pointer p-4 text-start">{brand?.id}</td>
                    <td onClick={() => route(brand?.id)} className=" cursor-pointer p-4 text-start">{brand?.name}</td>
                    <td onClick={() => route(brand?.id)} className=" cursor-pointer p-4 text-start">{brand?.company}</td>
                    <td onClick={() => route(brand?.id)} className=" cursor-pointer p-4 text-start">{brand?.agent}</td>
                    <td onClick={() => route(brand?.id)} className=" cursor-pointer p-4 text-end">{brand?.phone}</td>
                    <td onClick={() => route(brand?.id)} className=" cursor-pointer p-4 text-end">{brand?.description}</td>
                    
                    <td className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                      <p onClick={() => handleDeleteBrand(brand?.id)} className="hover-scale icon1 text-[#e94343]">
                        <BiTrash />
                      </p>

                      <span onClick={() => {
                        setId(brand?.id);
                        setEditSidebarOpen(!editSidebarOpen);
                        dispatch(setBrandEditSelectImg(null))
                      }} className=" icon1 hover-scale">
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
      {id != null && <EditBrand editSidebarOpen={editSidebarOpen} setEditSidebarOpen={setEditSidebarOpen} id={id} setId={setId}/>}
    </MainLayout>
  )
}

export default Brands