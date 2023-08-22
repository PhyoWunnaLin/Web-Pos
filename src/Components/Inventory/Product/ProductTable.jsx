import React from "react";
import { useGetProductsQuery } from "../../../Redux/API/inventoryApi";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { AiOutlinePlus } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
import "../../User/overview.css"
import { useSelector } from "react-redux";

const ProductTable = () => {
  const token = Cookies.get("token");
  const { data, isLoading } = useGetProductsQuery(token);
  const products = data?.data
  const searchProduct = useSelector(state => state.productSlice.searchProduct)
  // console.log(searchProduct);

  const nav = useNavigate();
  const route = (id) => {
    nav(`/inventory/product/productDetail/${id}`);
  };

  return (
    <div>
        {isLoading ? (
          <div className=" ">
            <Loader/>
          </div>) 
          : (
            <table className=" text-white table-responsive w-full">
            <thead className=" tracking-wider text-sm border border-[#7E7F80]">
              <tr>
                <th className="p-4 max-[800px]:pr-5 text-start">NO</th>
                <th className="p-4 max-[800px]:pr-24 text-start">NAME</th>
                <th className="p-4 max-[800px]:pr-16 text-start">BRAND</th>
                <th className="p-4 max-[800px]:pr-40 text-start">UNIT</th>
                <th className="p-4 max-[800px]:pr-40 text-end ">SALE PRICE</th>
                <th className="p-4 max-[800px]:pr-40 text-end">TOTAL STOCK</th>
                <th className="p-4 ">...</th>
              </tr>
            </thead>
            <tbody className=" tracking-wide text-sm">
              {products?.filter(pd => {
                if(searchProduct === ""){
                  return pd
                }else if(pd?.name.toLowerCase().includes(searchProduct.toLowerCase())){
                  return pd
                }
              }).map((pd) => {
                return (
                  <tr
                    key={pd?.id}
                    className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                  >
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.id}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.name}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.brand_name}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-start">{pd?.unit}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.sale_price}</td>
                    <td onClick={() => route(pd?.id)} className=" cursor-pointer p-4 text-end">{pd?.total_stock}</td>
                    
                    <td className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                      <Link to={'/user/overview'}>
                      <p className="hover-scale icon1">
                        <AiOutlinePlus />
                      </p>
                      </Link>

                      <span className=" icon1 hover-scale">
                        <BiEditAlt />
                      </span>
                      <span className=" icon1 hover-scale">
                        <HiArrowNarrowRight />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          )}
    </div>
  );
};

export default ProductTable;

