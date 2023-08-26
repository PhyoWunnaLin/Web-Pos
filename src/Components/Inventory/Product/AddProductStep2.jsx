import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPdForm2 } from '../../../Redux/Services/productSlice'
import { TiTick } from 'react-icons/ti'
import { ImArrowRight2 } from 'react-icons/im'

const AddProductStep2 = ({currentStep , setCurrentStep , steps , setComplete , complete}) => {
  // const pd = useSelector(state => state.productSlice.pdForm1)
  // console.log(pd)
  const [price,setPrice] = useState("")
  const [realPrice,setRealPrice] = useState("")
  const pdData = {price, realPrice}
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setPdForm2(pdData))
  },[currentStep])

  const run = (e) => {
    e.preventDefault()
    if(currentStep > 3) {
      setComplete(true)
    }else{
      setCurrentStep((pre) => pre + 1)
    }
  }

  return (
    <form onSubmit={run} className='flex gap-10'>
      {/* form  */}
      <div className='w-[65%]'>
        <div className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 w-full rounded-md">
          <div className="flex justify-between gap-5">
            <label className="text-[#FFFFFF] font-medium tracking-wider">
              Actual-Price
            </label>
            <input required onChange={(e)=> setRealPrice(e.target.value)}
              type="text"
              className="input w-[70%]"
            />
          </div>
          <div className="flex justify-between gap-5">
            <label className="text-[#FFFFFF] font-medium tracking-wider">
              Sale-Price
            </label>
            <input required onChange={(e)=> setPrice(e.target.value)} type="text" className="input w-[70%]" />
          </div>
        </div>
      </div>
      {/* form step  */}
      <div className="flex flex-col mt-16">
              {steps.map((step, i) => {
                return (
                  <div key={i} className="flex flex-col">
                    <div
                      className={`step-item ${
                        currentStep == i + 1 && "active"
                      } ${(i + 1 < currentStep || complete) && "complete"}`}
                    >
                      <div className="step">
                        {i + 1 < currentStep || complete ? (
                          <TiTick className=" text-black" size={22} />
                        ) : (
                          i + 1
                        )}
                      </div>
                      <p className="text-[#FFFFFF] font-medium tracking-wider">
                        {step}
                      </p>
                    </div>
                    {i < 2 && <div className="line"></div>}
                  </div>
                );
              })}
              <div className="mt-8">
                  <button
                    className="btn flex items-center gap-2"
                  >
                    {currentStep > 3 ? "Create" : "Next"}
                    {currentStep <= 3 && (
                      <span>
                        <ImArrowRight2 />
                      </span>
                    )}
                  </button>
              </div>
      </div>
    </form>
  )
}

export default AddProductStep2
