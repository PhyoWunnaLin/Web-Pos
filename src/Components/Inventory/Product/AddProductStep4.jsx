import React, { useEffect } from 'react'
import { AiFillClockCircle } from 'react-icons/ai'
import { BiSolidEditAlt } from 'react-icons/bi'
import { BsTelephoneOutbound } from 'react-icons/bs'
import { CiShop } from 'react-icons/ci'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { setUserCreatePp } from '../../../Redux/Services/profileSlice'
import { useGetBrandsQuery } from '../../../Redux/API/inventoryApi'
import {PiUserFocus} from 'react-icons/pi'
import Cookies from 'js-cookie'
import { setInsert } from '../../../Redux/Services/mediaSlice'

const AddProductStep4 = () => {
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const form1 = useSelector(state => state.productSlice.pdForm1)
  const form2 = useSelector(state => state.productSlice.pdForm2)
  const form3 = useSelector(state => state.productSlice.pdForm3)
  const {data} = useGetBrandsQuery(token);
  const brandId = form1?.brand_id
  const products = data?.data
  const brandName = brandId && products?.filter((product) => product?.id == brandId);
  const name = brandName && brandName[0]?.name;
  const userCreatePp = useSelector(state => state.profileSlice.userCreatePp);

  return (
    <div className="">
      {/* Profile  */}
          <div>
            {/* pp top start  */}
            <div className=' bg-[#161618] border-b border-[#878787]'>
                {/* profile img  */}
                <div className='pb-10 pt-7 mt-[73px] flex items-center relative'>
                    <div className=' absolute top-[-70px] left-[33px]'>
                    {form3 ? (
                <div className="w-[150px] h-[150px] bg-[#202124] rounded-full mx-auto border-dashed border-2 border-[#8AB4F8] flex justify-center items-center relative">
                  <img
                    src={form3}
                    className="w-[150px] h-[150px] object-cover absolute rounded-full"
                    alt=""
                  />
                </div>
              ) : (
                <div className="w-[150px] h-[150px] bg-[#202124] rounded-full mx-auto border-dashed border-2 border-[#8AB4F8] flex justify-center items-center relative">
                  <PiUserFocus className=" text-white" size={45} />
                </div>
              )}
                    </div>

                    <div className= " flex justify-between w-full">

                        <div className='flex flex-col gap-3 ml-[213px]'>
                            <h1 className=' text-xl text-[#fff] font-bold tracking-wider mb-1'>{form1?.name}</h1>
                            <div className=' flex flex-col gap-1 text-sm'>
                              <div className='flex gap-1 tracking-wide font-medium'>
                                <span className=' text-[#878787]'>Sale Price :</span>
                                <span className=' text-[#FFFFFF]'>{form2?.price} MMK</span>
                              </div>
                              <div className='flex gap-1 tracking-wide font-medium'>
                                <span className=' text-[#878787]'>Actual Price :</span>
                                <span className=' text-[#FFFFFF]'>{form2?.realPrice} MMK</span>
                              </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* profile navLink  */}
                <div className=' flex items-center gap-20 ml-10 pb-5'>
                    <div className={` text-white cursor-pointer flex items-center gap-2`}>
                        <span className=" text-[19px] text-[#8bb4f6]"><CiShop/></span>
                        <span className=' font-semibold'>Information</span>
                    </div>
                </div>
            </div>
            {/* pp top end  */}
          

            {/* pp bottom start  */}
            <div className=' bg-[#191919]'>
              {/* Information  */}
              <div className={` pl-10 pt-6 pb-9 flex flex-col gap-5`}>
                    <p className=' flex items-center gap-14 text-[17px] tracking-wider font-medium'>
                      <span className=' text-[#878787] w-[150px]'>Name</span>
                      <span className=' text-[#fff]'>: {form1?.name}</span>
                    </p>

                    <p className=' flex items-center gap-14 text-[17px] tracking-wider font-medium'>
                      <span className=' text-[#878787] w-[150px]'>Brand</span>
                      <span className=' text-[#fff]'>: {name}</span>
                    </p>
                  
                    <p className=' flex items-center gap-14 text-[17px] tracking-wide font-medium'>
                      <span className=' text-[#878787] w-[150px]'>Stock</span>
                      <span className=' text-[#fff]'>: {form1?.stock}</span>
                    </p>
                    <p className=' flex items-center gap-14 text-[17px] tracking-wide font-medium'>
                      <span className=' text-[#878787] w-[150px]'>Unit</span>
                      <span className=' text-[#fff]'>: {form1?.unit}</span>
                    </p>
                    <p className=' flex items-center gap-14 text-[17px] tracking-wide font-medium'>
                      <span className=' text-[#878787] w-[150px]'>More Information</span>
                      <span className=' text-[#fff]'>: {form1?.more_information}</span>
                    </p>
              </div>
            </div>
            {/* pp bottom end  */}
          </div>
      {/* profile end  */}
    </div>
  )
}

export default AddProductStep4
