import React from "react";
import { useGetProductsQuery } from "../../../Redux/API/inventoryApi";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { AiOutlinePlus } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";

const ProductTable = () => {
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
      name: "apple",
      brand: "melon",
      salePrice: 300,
      unit: "s",
      stock: 100,
    },
  ];
  return (
    <div>
        {isLoading ? (
          <div className=" ">
            <Loader/>
          </div>) 
          : (
            <table className=" text-white table-responsive">
            <thead className=" tracking-wider text-sm border border-[#7E7F80]">
              <tr>
                <th className="p-4 max-[800px]:pr-5 text-start">NO</th>
                <th className="p-4 max-[800px]:pr-24 text-start">NAME</th>
                <th className="p-4 max-[800px]:pr-16 text-start">BRAND</th>
                <th className="p-4 max-[800px]: pr-40 text-start">UNIT</th>
                <th className="p-4 max-[800px]: pr-40 text-start">SALE PRICE</th>
                <th className="p-4 max-[800px]: pr-40 text-start">TOTAL STOCK</th>
                <th className="p-4 ">...</th>
              </tr>
            </thead>
            <tbody className=" tracking-wide text-sm">
              {pd?.map((pd) => {
                return (
                  <tr
                    key={pd?.id}
                    className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                  >
                    <td onClick={route} className=" cursor-pointer p-4 text-start">{pd?.id}</td>
                    <td onClick={route} className=" cursor-pointer p-4 text-start">{pd?.name}</td>
                    <td onClick={route} className=" cursor-pointer p-4 text-start">{pd?.brand}</td>
                    <td onClick={route} className=" cursor-pointer p-4 text-start">{pd?.unit}</td>
                    <td onClick={route} className=" cursor-pointer p-4 text-start">{pd?.salePrice}</td>
                    <td onClick={route} className=" cursor-pointer p-4 text-start">{pd?.stock}</td>
                    
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
