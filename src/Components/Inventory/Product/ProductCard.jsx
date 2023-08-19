import React from 'react'
import { useGetProductsQuery } from '../../../Redux/API/inventoryApi';
import Loader from '../../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import "./products.css"

const ProductCard = () => {
  const token = Cookies.get("token");
  const { data, isLoading } = useGetProductsQuery(token);
  console.log(data);

  const nav = useNavigate();
  const route = () => {
    nav(`/user/detail/`);
  };

  const pd = [
    {
      id: 1,
      name: "stawberry yogut",
      brand: "melon",
      salePrice: 300,
      unit: "s",
      stock: 100,
      img: "https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"
    },
    {
      id: 2,
      name: "apple",
      brand: "melon",
      salePrice: 300,
      unit: "s",
      stock: 100,
      img: "https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"
    },
    {
      id: 3,
      name: "apple",
      brand: "melon",
      salePrice: 300,
      unit: "s",
      stock: 100,
      img: "https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"
    },
    {
      id: 4,
      name: "apple",
      brand: "melon",
      salePrice: 300,
      unit: "s",
      stock: 100,
      img: "https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"
    },
    {
      id: 5,
      name: "apple",
      brand: "melon",
      salePrice: 300,
      unit: "s",
      stock: 100,
      img: "https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"
    },
    {
      id: 6,
      name: "apple",
      brand: "melon",
      salePrice: 300,
      unit: "s",
      stock: 100,
      img: "https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"
    }
  ];
  
  return (
    <div>
      {isLoading ? (
          <div className=" ">
            <Loader/>
          </div>) 
          : (
          <div className=' pl-2'>
             <div className=' flex flex-wrap gap-5'>
                {pd.map(pd => {
                  return(
                    <div key={pd.id} className='w-[200px] h-[220px] shadow-md select-none cursor-pointer bg-[#242528] rounded-md border-[#383b3d] border card'>
                      <img src={pd.img} alt="" className=' w-full h-[65%] rounded-md object-cover' />
                      <div className=' flex flex-col gap-1 items-end px-5 py-2 '>
                        <p className='text-[#e8eaed] text-lg tracking-wider'>{pd.name}</p>
                        <p className=' tracking-wider text-[hsl(0,3%,76%)]'>{pd.salePrice} kyat</p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
          )}
    </div>
  )
}

export default ProductCard