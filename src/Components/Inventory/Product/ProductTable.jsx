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


const ProductTable = () => {
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  const token = Cookies.get("token");
  const p = localStorage.getItem("pdTablePage")
  const [page,setPage] = useState(p ? p : 1)
  const { data, isLoading, isFetching } = useGetProductsQuery({token, page});
  const totalPage = data?.meta?.last_page
  // const [deleteProduct] = useDeleteProductMutation();
  const products = data?.data;
  const searchProduct = useSelector(
    (state) => state.productSlice.searchProduct
  );
  // console.log(totalPage);

  // const handleDeleteProduct = (id) => {
  //   Swal.fire({
  //     title: 'Do you want to delete this product?',
  //     icon: 'warning',
  //     iconColor: "#E64848",
  //     background: "#161618",
  //     showCancelButton: true,
  //     // showCloseButton: true,
  //     confirmButtonColor: '#E64848',
  //     cancelButtonColor: '#24262b',
  //     confirmButtonText: 'Delete'
  //   }).then(async(result) => {
  //     if (result.isConfirmed) {
  //       const data = await deleteProduct({token,id})
  //       console.log(data);
  //       if(data?.data?.message){
  //         Swal.fire({
  //           customClass : {
  //             title: 'swal2-title',
  //             popup: 'custom-swal-popup'
  //           },
  //           title: "Successfully delete a product",
  //           icon: "success",
  //           confirmButtonText: "OK",
  //           // showCloseButton: true,
  //           width: 400,
  //           background: "#161618",
  //         })
  //       }

  //     }
  //   })
  // }

  useEffect(() => {
    localStorage.setItem("pdTablePage",page)
  },[page])

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
            <table className=" text-white table-responsive2 w-full">
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
                        key={pd?.id}
                        className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]"
                      >
                        <td
                          onClick={() => route(pd?.id)}
                          className=" cursor-pointer p-4 text-start"
                        >
                          {pd?.id}
                        </td>
                        <td
                          onClick={() => route(pd?.id)}
                          className=" cursor-pointer p-4 text-start"
                        >
                          {pd?.name}
                        </td>
                        <td
                          onClick={() => route(pd?.id)}
                          className=" cursor-pointer p-4 text-start"
                        >
                          {pd?.brand_name}
                        </td>
                        <td
                          onClick={() => route(pd?.id)}
                          className=" cursor-pointer p-4 text-start"
                        >
                          {pd?.unit}
                        </td>
                        <td
                          onClick={() => route(pd?.id)}
                          className=" cursor-pointer p-4 text-end"
                        >
                          {pd?.sale_price}
                        </td>
                        <td
                          onClick={() => route(pd?.id)}
                          className=" cursor-pointer p-4 text-end"
                        >
                          {pd?.total_stock}
                        </td>

                        <td className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                          {/* <span onClick={() => handleDeleteProduct(pd?.id)} className="icon1 hover-scale"><BiTrash className="text-[#e94343]"/></span> */}

                          <p
                            onClick={() => {
                              setId(pd?.id);
                              setOpen(!open);
                            }}
                            className="hover-scale icon1"
                          >
                            <AiOutlinePlus />
                          </p>
                          <span
                            onClick={() => route2(pd?.id)}
                            className=" icon1 hover-scale"
                          >
                            <BiEditAlt />
                          </span>
                          <span
                            onClick={() => route(pd?.id)}
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
            <div className=" flex justify-end mt-5 ">
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
