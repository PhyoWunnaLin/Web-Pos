import Cookies from "js-cookie";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsFillMoonStarsFill, BsPersonCircle } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useGetProductsQuery } from "../../Redux/API/inventoryApi";
import SaleCalc from "./SaleCalc";
import { useDispatch, useSelector } from "react-redux";
import { setSearchSaleProduct } from "../../Redux/Services/saleSlice";
import ImageLoader from "../Loader/ImageLoader";

const Sale = () => {
  const token = Cookies.get("token");
  const { data, isLoading } = useGetProductsQuery(token);
  const products = data?.data;
  const searchSaleProduct = useSelector(
    (state) => state.saleSlice.searchSaleProduct
  );
  const dispatch = useDispatch();

  return (
    <div className="relative">
      {/* navbar  */}
      <div className=" flex justify-between items-center border-b border-[#3f4245] text-[#e8eaed] bg-[#202124] px-5 py-3 b-60 fixed top-0 w-full z-10">
        <h1 className=" font-semibold tracking-wider text-lg">MMS</h1>
        <div className=" flex gap-5 items-center">
          <p className=" text-xl">
            <MdOutlineNotificationsActive />
          </p>
          <p>
            <BsFillMoonStarsFill />
          </p>
          <p>
            <BsPersonCircle />
          </p>
        </div>
      </div>
      {/* cashier  */}
      <div className="flex mt-[53px]">
        {/* product  */}
        <div className="w-[70%] flex flex-col gap-5">
          {/* banner  */}
          <div className=" flex justify-between items-center border-b border-[#3f4245] py-5 px-5">
            <div className="w-[50%] flex gap-4">
              <p className="text-[hsl(0,3%,76%)] tracking-wide">
                Sale <span className="text-[#8ab4f8]">/</span> Cashier{" "}
                <span className="text-[#8ab4f8]">/</span>
              </p>
              <p className="text-[#8ab4f8]">ALL</p>
            </div>
            <form className="relative">
              <input
                onChange={(e) => dispatch(setSearchSaleProduct(e.target.value))}
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <div className="text-white absolute top-[10px] left-[11px]">
                <BiSearch size={20} />
              </div>
            </form>
          </div>
          {/* product card  */}
          <div>
            {isLoading ? (
              <div className=" flex justify-center">
                <ImageLoader />
              </div>
            ) : (
              <div className="ml-2">
                <div className=" flex flex-wrap gap-5">
                  {products.filter((pd) => {
                      if (searchSaleProduct === "") {
                        return pd;
                      } else if (pd?.name.toLowerCase().includes(searchSaleProduct.toLowerCase())) {
                        return pd;
                      }
                    }).map((pd) => {
                      return (
                        <div
                          key={pd?.id}
                          className="w-[23.2%] h-[220px] shadow-md select-none cursor-pointer bg-[#242528] rounded-md border-[#383b3d] border card"
                        >
                          <img
                            src={
                              pd?.photo
                                ? pd?.photo
                                : "https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"
                            }
                            alt=""
                            className=" w-full h-[65%] rounded-md object-cover"
                          />
                          <div className=" flex flex-col gap-1 items-end px-5 py-2 ">
                            <p className="text-[#e8eaed] text-end text-lg tracking-wider">
                              {pd?.name}
                            </p>
                            <p className=" tracking-wider text-end text-[hsl(0,3%,76%)]">
                              {pd?.sale_price} kyat
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* calculator */}
        <div className="w-[30%] fixed top-0 right-0">
          <SaleCalc />
        </div>
      </div>
    </div>
  );
};

export default Sale;
