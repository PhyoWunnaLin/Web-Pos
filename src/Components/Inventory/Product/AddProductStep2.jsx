import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPdForm2 } from '../../../Redux/Services/productSlice'

const AddProductStep2 = ({currentStep}) => {
  // const pd = useSelector(state => state.productSlice.pdForm1)
  // console.log(pd)
  const [price,setPrice] = useState("")
  const [realPrice,setRealPrice] = useState("")
  const pdData = {price, realPrice}
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setPdForm2(pdData))
  },[currentStep])

  return (
    <form className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 w-full rounded-md">
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Actual-Price
          </label>
          <input onChange={(e)=> setRealPrice(e.target.value)}
            type="text"
            className="input w-[70%]"
          />
        </div>
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Sale-Price
          </label>
          <input onChange={(e)=> setPrice(e.target.value)} type="text" className="input w-[70%]" />
        </div>
      </form>
  )
}

export default AddProductStep2
