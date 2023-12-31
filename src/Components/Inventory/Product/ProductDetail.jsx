import React from 'react'
import MainLayout from '../../../Layouts/MainLayout'
import { BiSolidEditAlt } from 'react-icons/bi'
import { CiShop } from 'react-icons/ci'
import Banner2 from '../../Banner/Banner2'
import ProductDetailTable1 from './ProductDetailTable1'
import ProductDetailTable2 from './ProductDetailTable2'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useGetProductDetailQuery } from '../../../Redux/API/inventoryApi'
import Loader from '../../Loader/Loader'

const ProductDetail = () => {
  const {id} = useParams();
  const token = Cookies.get("token");
  const {data , isLoading} = useGetProductDetailQuery({token,id});
  console.log(data?.data);
  const product = data?.data
  return (
    <MainLayout>
      <div className=' w-full flex justify-center'>
        <div className='w-[95%] my-6 flex flex-col gap-8'>
          {/* banner  */}
          <Banner2 
            title={"Product Detail"}
            path1={"Inventory"}
            path2={"Product Detail"}
            btn2={"Product List"}
            button2={true}
            route={"/inventory/products"}/>
          {isLoading ? <div><Loader/></div> : 

          <div className='flex gap-5 max-xl:flex-col max-xl:gap-0'>
            {/* product detail   */}
            <div className=' w-[50%] max-xl:w-[100%]'>
                {/* pp top start  */}
                <div className=' bg-[#161618] border-b border-[#878787]'>
                    {/* profile img  */}
                    <div className='pb-10 pt-7 mt-[73px] flex items-center relative'>
                        <div className=' absolute top-[-70px] left-[33px]'>
                            <div className=' relative rounded-full w-[150px] h-[150px]'>
                                <img src={product?.photo ? product?.photo :"https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"} alt="" className=' rounded-full w-[150px] h-[150px] object-cover'/>

                                {/* <div className=' hover:bg-[#c1c5cc] hover:scale-[1.1] cursor-pointer duration-200 h-7 w-7 rounded-full flex items-center bg-white justify-center absolute right-3 bottom-0'>
                                <BiSolidEditAlt size={18}/>
                                </div> */}
                            </div>
                        </div>

                        <div className= " flex justify-between w-full">

                            <div className='flex flex-col gap-3 ml-[213px]'>
                                <h1 className=' text-xl text-[#fff] font-bold tracking-wider mb-1'>{product?.name}</h1>
                                <div className=' flex flex-col gap-1 text-sm'>
                                  <div className='flex gap-1 tracking-wide font-medium'>
                                    <span className=' text-[#878787]'>Sale Price :</span>
                                    <span className=' text-[#FFFFFF]'>{product?.sale_price} {product?.unit}</span>
                                  </div>
                                  <div className='flex gap-1 tracking-wide font-medium'>
                                    <span className=' text-[#878787]'>Actual Price :</span>
                                    <span className=' text-[#FFFFFF]'>{product?.actual_price} {product?.unit}</span>
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
                          <span className=' text-[#fff]'>: {product?.name}</span>
                        </p>

                        <p className=' flex items-center gap-14 text-[17px] tracking-wider font-medium'>
                          <span className=' text-[#878787] w-[150px]'>Brand</span>
                          <span className=' text-[#fff]'>: {product?.brand_name}</span>
                        </p>
                      
                        <p className=' flex items-center gap-14 text-[17px] tracking-wide font-medium'>
                          <span className=' text-[#878787] w-[150px]'>Stock</span>
                          <span className=' text-[#fff]'>: {product?.total_stock}</span>
                        </p>
                        <p className=' flex items-center gap-14 text-[17px] tracking-wide font-medium'>
                          <span className=' text-[#878787] w-[150px]'>Unit</span>
                          <span className=' text-[#fff]'>: {product?.unit}</span>
                        </p>
                        {product?.more_information && <p className=' flex items-center gap-14 text-[17px] tracking-wide font-medium'>
                          <span className=' text-[#878787] w-[150px]'>More Information</span>
                          <span className=' text-[#fff]'>: {product?.more_information}</span>
                        </p>}
                  </div>
                </div>
                {/* pp bottom end  */}
            </div>
            {/* product detail table  */}
            <div className='w-[50%] max-xl:w-[100%] max-xl:mt-9 flex flex-col gap-8 mt-[74px]'>
              <div>
                <ProductDetailTable1/>
              </div>
              <div>
                <ProductDetailTable2/>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </MainLayout>
  )
}

export default ProductDetail