import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setEditPdForm2 } from '../../../Redux/Services/productSlice'

const EditProductStep2 = ({currentStep , detail}) => {
    const [price,setPrice] = useState(detail?.sale_price)
    const [realPrice,setRealPrice] = useState(detail?.actual_price)
    const pdData = {price, realPrice}
    const dispatch = useDispatch()
  
    useEffect(()=>{
      dispatch(setEditPdForm2(pdData))
    },[currentStep])
  return (
    <form className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 w-full rounded-md">
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Actual-Price
          </label>
          <input value={realPrice} onChange={(e)=> setRealPrice(e.target.value)}
            type="text"
            className="input w-[70%]"
          />
        </div>
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Sale-Price
          </label>
          <input value={price} onChange={(e)=> setPrice(e.target.value)} type="text" className="input w-[70%]" />
        </div>
      </form>
  )
}

export default EditProductStep2
