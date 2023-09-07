import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useGetBrandsQuery } from '../../../Redux/API/inventoryApi'
import { useDispatch } from 'react-redux'
import { setEditPdForm1 } from '../../../Redux/Services/productSlice'

const EditProductStep1 = ({currentStep , detail}) => {
    const token = Cookies.get("token")
    const {data} = useGetBrandsQuery({token})
    const brands = data?.data
    const [name,setName] = useState(detail?.name)
    const [brand_id,setBrand] = useState(detail?.brand_name)
    const [stock,setStock] = useState(detail?.total_stock)
    const [unit,setUnit] = useState(detail?.unit)
    const [more_information,setMoreInfo] = useState(detail?.more_information)
    const dispatch = useDispatch()
    const pdData = {name,brand_id,unit,more_information,stock}
  
    useEffect(()=>{
      dispatch(setEditPdForm1(pdData))
    },[currentStep])

  return (
    <form className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 w-full rounded-md">
      {/* name  */}
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Name
        </label>
        <input required onChange={(e)=> setName(e.target.value)}
        value={name}
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
          <option key={brand?.id} value={brand?.id} selected={detail?.brand_name == brand?.name && true} >{brand?.name}</option>
            )
          })}
        </select>
      </div>

      {/* stock  */}
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Stock
        </label>
        <input value={stock} onChange={(e)=> setStock(e.target.value)} required type="number" className="input w-[70%]" />
      </div>

      {/* unit  */}
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Unit
        </label>
        <input value={unit} onChange={(e)=> setUnit(e.target.value)} required type="text" className="input w-[70%]" />
      </div>

      {/* more info  */}
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          More Info
        </label>
        <textarea value={more_information} onChange={(e)=> setMoreInfo(e.target.value)}
          placeholder=""
          cols="30"
          rows="4"
          className="input w-[70%]"
        ></textarea>
      </div>
    </form>
  )
}

export default EditProductStep1
