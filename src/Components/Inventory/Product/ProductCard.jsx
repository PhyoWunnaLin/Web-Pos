import React, { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../../../Redux/API/inventoryApi';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import "./products.css"
import { useSelector } from 'react-redux';
import ImageLoader from '../../Loader/ImageLoader';
import { Pagination } from '@mantine/core';

const ProductCard = () => {
  const token = Cookies.get("token");
  const p = localStorage.getItem("pdCardPage")
  const [page,setPage] = useState(p ? p : 1)
  const { data, isLoading, isFetching } = useGetProductsQuery({token, page});
  const totalPage = data?.meta?.last_page
  const products = data?.data
  const searchProduct = useSelector(state => state.productSlice.searchProduct)
  // console.log(data);

  useEffect(() => {
    localStorage.setItem("pdCardPage",page)
  },[page])

  const nav = useNavigate();
  const route = () => {
    nav(`/user/detail/`);
  };
  
  return (
    <div>
      {isFetching ? (
          <div className=" ">
            <ImageLoader/>
          </div>) 
          : (
          <div>
            <div className=' pl-2'>
             <div className=' grid grid-cols-5 max-[900px]:grid-cols-3 max-[650px]:grid-cols-2 max-[400px]:grid-cols-1 gap-5'>
             {/* <div className=' flex flex-wrap'> */}
                {products?.filter(pd => {
                if(searchProduct === ""){
                  return pd
                }else if(pd?.name.toLowerCase().includes(searchProduct.toLowerCase())){
                  return pd
                }
              }).map(pd => {
                  return(
                    <Link to={`/inventory/product/productDetail/${pd?.id}`}  key={pd?.id}>
                      <div className=' h-[250px] shadow-md select-none cursor-pointer bg-[#242528] rounded-md border-[#383b3d] border card'>
                        <img src={pd?.photo ? pd?.photo : "https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"} alt="" className=' w-full h-[65%] rounded-md object-cover' />
                        <div className=' flex flex-col gap-1 items-end px-5 py-2 '>
                          <p className='text-[#e8eaed] text-lg tracking-wider'>{pd?.name}</p>
                          <p className=' tracking-wider text-[hsl(0,3%,76%)]'>{pd?.sale_price} kyat</p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
            </div>
          </div>

          {/* Pagination */}
          <div className=" flex justify-end mt-8 ">
          <Pagination
            total={totalPage}
            value={Number(page)}
            onChange={setPage}
          />
        </div>
          </div>

          )}
    </div>
  )
}

export default ProductCard