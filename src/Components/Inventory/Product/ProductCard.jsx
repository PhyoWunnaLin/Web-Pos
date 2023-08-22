import React from 'react'
import { useGetProductsQuery } from '../../../Redux/API/inventoryApi';
import Loader from '../../Loader/Loader';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import "./products.css"
import { useSelector } from 'react-redux';

const ProductCard = () => {
  const token = Cookies.get("token");
  const { data, isLoading } = useGetProductsQuery(token);
  const products = data?.data
  const searchProduct = useSelector(state => state.productSlice.searchProduct)
  
  // console.log(data);

  const nav = useNavigate();
  const route = () => {
    nav(`/user/detail/`);
  };
  
  return (
    <div>
      {isLoading ? (
          <div className=" ">
            <Loader/>
          </div>) 
          : (
          <div className=' pl-2'>
             <div className=' flex flex-wrap gap-5'>
                {products?.filter(pd => {
                if(searchProduct === ""){
                  return pd
                }else if(pd?.name.toLowerCase().includes(searchProduct.toLowerCase())){
                  return pd
                }
              }).map(pd => {
                  return(
                    <Link to={`/inventory/product/productDetail/${pd?.id}`}  key={pd?.id}>
                      <div className='w-[200px] h-[220px] shadow-md select-none cursor-pointer bg-[#242528] rounded-md border-[#383b3d] border card'>
                        <img src={pd?.img ? pd?.img : "https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"} alt="" className=' w-full h-[65%] rounded-md object-cover' />
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
          )}
    </div>
  )
}

export default ProductCard