import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"
import { useGetBrandsQuery } from "../../../Redux/API/inventoryApi";
import { useDispatch, useSelector } from "react-redux";
import { setPdForm1 } from "../../../Redux/Services/productSlice";

const AddProductStep1 = ({currentStep}) => {
  const token = Cookies.get("token")
  const {data} = useGetBrandsQuery(token)
  const brands = data?.data

  const [name,setName] = useState("")
  const [brand_id,setBrand] = useState()
  const [stock,setStock] = useState()
  const [unit,setUnit] = useState("")
  const [more_information,setMoreInfo] = useState("")
  const dispatch = useDispatch()
  // const pd = useSelector(state => state.productSlice.pdForm1)
  const pdData = {name,brand_id,unit,more_information,stock}
  // console.log(pd);
  // console.log(currentStep)

  useEffect(()=>{
    dispatch(setPdForm1(pdData))
  },[currentStep])

  return (
    <form className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 w-full rounded-md">
      {/* name  */}
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Name
        </label>
        <input required onChange={(e)=> setName(e.target.value)}
          type="text"
          placeholder="Product Name"
          className="input w-[70%]"
        />
      </div>

      {/* brand  */}
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Brand
        </label>
        <select onChange={(e)=> setBrand(e.target.value)} required className="input w-[70%] tracking-wider">
          {brands?.map(brand => {
            return (
          <option key={brand?.id} value={brand?.id}>{brand?.name}</option>
            )
          })}
        </select>
      </div>

      {/* stock  */}
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Stock
        </label>
        <input onChange={(e)=> setStock(e.target.value)} required type="number" className="input w-[70%]" />
      </div>

      {/* unit  */}
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Unit
        </label>
        <input onChange={(e)=> setUnit(e.target.value)} required type="text" className="input w-[70%]" />
      </div>

      {/* more info  */}
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          More Info
        </label>
        <textarea onChange={(e)=> setMoreInfo(e.target.value)}
          placeholder=""
          cols="30"
          rows="4"
          className="input w-[70%]"
        ></textarea>
      </div>
    </form>
  );
};

export default AddProductStep1;
