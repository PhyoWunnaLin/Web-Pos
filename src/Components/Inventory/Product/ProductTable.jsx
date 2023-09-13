import React, { useEffect, useRef, useState } from "react";
import {
  // useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../Redux/API/inventoryApi";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { AiOutlinePlus } from "react-icons/ai";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
import "../../User/overview.css";
import { useSelector } from "react-redux";
import AddStock from "../Stock/AddStock";
// import Swal from "sweetalert2";
import { Pagination } from "@mantine/core";

const ProductTable = ({sort}) => {
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  const token = Cookies.get("token");
  const p = localStorage.getItem("pdTablePage");
  const [page, setPage] = useState(p ? p : 1);
  const { data, isLoading, isFetching } = useGetProductsQuery({ token, page ,sort});
  const totalPage = data?.meta?.last_page;
  const products = data?.data;
  const searchProduct = useSelector(
    (state) => state.productSlice.searchProduct
  );

  useEffect(() => {
    localStorage.setItem("pdTablePage", page);
  }, [page]);

  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [open]);

  const nav = useNavigate();
  const route = (id) => {
    nav(`/inventory/product/productDetail/${id}`);
  };
  const route2 = (id) => {
    nav(`/inventory/product/editProduct/${id}`);
  };

  return (
    <>
      <div>
        <AddStock open={open} setOpen={setOpen} id={id} />
      </div>
      <div>
        {isFetching ? (
          <div className=" ">
            <Loader />
          </div>
        ) : (
          <div>
            <table className=" text-white max-[840px]:whitespace-nowrap max-[840px]:block max-[840px]:overflow-x-auto w-full">
              <thead className=" tracking-wider text-sm border border-[#7E7F80]">
                <tr>
                  <th className="p-4 max-[1000px]:pr-5 text-start">NO</th>
                  <th className="p-4 max-[1000px]:pr-24 text-start">NAME</th>
                  <th className="p-4 max-[1000px]:pr-16 text-start">BRAND</th>
                  <th className="p-4 max-[1000px]:pr-10 text-start">UNIT</th>
                  <th className="p-4 max-[1000px]:pl-10 text-end ">
                    SALE PRICE
                  </th>
                  <th className="p-4 max-[1000px]:pl-10 text-end">
                    TOTAL STOCK
                  </th>
                  <th className="p-4 ">...</th>
                </tr>
              </thead>
              <tbody className=" tracking-wide text-sm">
                {products
                  ?.filter((pd) => {
                    if (searchProduct === "") {
                      return pd;
                    } else if (
                      pd?.name
                        .toLowerCase()
                        .includes(searchProduct.toLowerCase())
                    ) {
                      return pd;
                    }
                  })
                  .map((pd) => {
                    return (
                      <tr
                        onClick={() => route(pd?.id)}
                        key={pd?.id}
                        className=" hover:bg-[#161618] duration-300 cursor-pointer border border-[#7E7F80]"
                      >
                        <td className=" p-4 text-start">
                          {pd?.id}
                        </td>
                        <td className=" p-4 text-start">
                          {pd?.name}
                        </td>
                        <td className=" p-4 text-start">
                          {pd?.brand_name}
                        </td>
                        <td className=" p-4 text-start">
                          {pd?.unit}
                        </td>
                        <td className=" p-4 text-end">
                          {pd?.sale_price}
                        </td>
                        <td className=" p-4 text-end">
                          {pd?.total_stock}
                        </td>

                        <td className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                          {/* <span onClick={() => handleDeleteProduct(pd?.id)} className="icon1 hover-scale"><BiTrash className="text-[#e94343]"/></span> */}

                          <p
                            onClick={(e) => {
                              e.stopPropagation();
                              setId(pd?.id);
                              setOpen(!open);
                            }}
                            className="hover-scale icon1"
                          >
                            <AiOutlinePlus />
                          </p>
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              route2(pd?.id);
                            }}
                            className=" icon1 hover-scale"
                          >
                            <BiEditAlt />
                          </span>
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              route(pd?.id);
                            }}
                            className=" icon1 hover-scale"
                          >
                            <HiArrowNarrowRight />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>

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
    </>
  );
};

export default ProductTable;
