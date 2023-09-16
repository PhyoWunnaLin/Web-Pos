import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { BiCalculator, BiSearch } from "react-icons/bi";
import { BsFillMoonStarsFill, BsPersonCircle } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import SaleCalc from "./SaleCalc";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setSaleClose,
  setSaleItem,
  setSearchSaleProduct,
  setSelectReceivePd,
} from "../../Redux/Services/saleSlice";
import ImageLoader from "../Loader/ImageLoader";
import { Link } from "react-router-dom";
import "./receive.css";
import "./sale.css";
import NoContact from "../NoContact/NoContact";
import closedImg from "../../assets/closed.png";
import {
  useGetSaleBrandsQuery,
  useGetSaleProductsQuery,
  useSaleOpenMutation,
} from "../../Redux/API/saleApi";
import Swal from "sweetalert2";

const Sale = () => {
  const token = Cookies.get("token");
  const [brand_id,setBrand_id] = useState("");  
  const saleClose1 = Cookies.get("sale");
  const { data , isFetching } = useGetSaleProductsQuery({token,id:brand_id});
  const { data: brands } = useGetSaleBrandsQuery(token);
  const category = brands?.data;
  const products = data?.data;
  const [saleOpen] = useSaleOpenMutation();
  // const products = useSelector(state => state.saleSlice.products)
  console.log(data);
  const searchSaleProduct = useSelector(
    (state) => state.saleSlice.searchSaleProduct
  );
  const saleItem = useSelector((state) => state.saleSlice.saleItem);
  console.log(saleItem);
  const dispatch = useDispatch();

  const saleClose = useSelector((state) => state.saleSlice.saleClose);

  // useEffect(()=>{
  //   dispatch(setProducts(data?.data))
  // },[data])

  const saleOpenHandler = () => {
    Swal.fire({
      title: `Are you sure to sale open ?`,
      icon: "question",
      iconColor: "#fff",
      background: "#161618",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: "#fff",
      cancelButtonColor: "#24262b",
      confirmButtonText: "Open",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = await saleOpen(token);
        console.log(data?.data?.data);
        dispatch(
          setSaleClose(
            data?.data?.data?.sale_close ? data?.data?.data?.sale_close : false
          )
        );
      }
    });
  };

  return (
    <div className="relative">
      {/* navbar  */}
      <div className=" flex justify-between items-center border-b border-[#3f4245] text-[#e8eaed] bg-[#202124] px-5 py-3 b-60 fixed top-0 w-full z-10">
        <Link to={"/"}>
          <h1 className=" font-semibold tracking-wider text-lg cursor-pointer">
            MMS
          </h1>
        </Link>
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
      {saleClose === "true" || saleClose1 === "true" ? (
        <div className=" flex flex-col justify-center items-center h-screen text-white">
          <NoContact image={closedImg} size={"w-[25%]"} />
          <div
            onClick={saleOpenHandler}
            className="text-white bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded  outline-none flex gap-1 font-medium text-sm tracking-wide cursor-pointer hover:bg-[#24262b]"
          >
            <div className=" flex justify-center items-center gap-2 py-2 px-2">
              <BiCalculator className=" text-[#8bb4f6] text-lg" />
              <p className=" tracking-wider">Sale Open</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* cashier  */}
          <div className="flex mt-[53px]">
            {/* product  */}
            <div className="w-[70%] max-[840px]:w-[60%] max-[665px]:w-[55%] flex flex-col gap-5">
              {/* banner  */}
              <div className=" flex max-[800px]:flex-col max-[800px]:gap-3 justify-between items-center border-b border-[#3f4245] py-5 px-5">
                <div className="w-[50%] flex gap-4 items-center">
                  <p className="text-[hsl(0,3%,76%)] tracking-wide">
                    Sale <span className="text-[#8ab4f8]">/</span> Cashier{" "}
                    <span className="text-[#8ab4f8]">/</span>
                  </p>
                  <div className="text-[hsl(0,3%,76%)] flex items-center gap-1 font-medium text-sm tracking-wide">
                    Category :
                    <select
                      onChange={(e) => setBrand_id(e.target.value)}
                      className=" bg-transparent px-1 border -mt-[2px] border-[#7E7F80] rounded text-white tracking-wider outline-none"
                    >
                      <option
                        className="bg-[#161618] hover:bg-[#202124]"
                        value=""
                      >
                        All
                      </option>
                      {category?.map((brand) => {
                        return (
                          <option
                            key={brand?.id}
                            className="bg-[#161618] hover:bg-[#202124]"
                            value={brand?.id}
                          >
                            {brand?.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <form className="relative">
                  <input
                    onChange={(e) =>
                      dispatch(setSearchSaleProduct(e.target.value))
                    }
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
                { isFetching ? (
                  <div className=" flex justify-center">
                    <ImageLoader />
                  </div>
                ) : (
                  <div className="mx-5">
                    <div className="grid grid-cols-4 max-[1110px]:grid-cols-3 max-[840px]:grid-cols-2 max-[665px]:grid-cols-1 gap-5 pb-5">
                      {/* <div className="flex flex-wrap gap-5"> */}
                      {products
                        ?.filter((pd) => {
                          if (searchSaleProduct === "") {
                            return pd;
                          } else if (
                            pd?.name
                              .toLowerCase()
                              .includes(searchSaleProduct.toLowerCase())
                          ) {
                            return pd;
                          }
                        })
                        .map((pd) => {
                          return (
                            <div
                              onClick={() => {
                                dispatch(setSaleItem(pd));
                                dispatch(setSelectReceivePd(pd?.id));
                              }}
                              key={pd?.id}
                              className=" h-[250px] shadow-md select-none cursor-pointer bg-[#242528] rounded-md border-[#383b3d] border-2 card relative"
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
                              {/* <div className={` ${pd?.total_stock != 0 ? "bg-green-600" : "bg-red-600"} px-3 py-1 flex flex-col justify-center items-center absolute top-0 text-[#e8eaed] stock`}>
                                {pd?.total_stock}
                              </div> */}
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
            <div className="w-[30%] max-[840px]:w-[40%] max-[665px]:w-[45%] fixed top-0 right-0">
              <SaleCalc />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sale;
