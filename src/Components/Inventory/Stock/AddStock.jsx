import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useCreateStockMutation } from "../../../Redux/API/inventoryApi";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const AddStock = ({ open, setOpen, id }) => {
  const token = Cookies.get("token");
  const [createStock] = useCreateStockMutation();
  const [quantity, setQuantity] = useState('');
  const [more, setMore] = useState('');
  console.log(id);

  const showAlert = () => {
    Swal.fire({
      customClass: {
        title: "swal2-title",
      },
      title: "Successfully created an stock",
      icon: "success",
      confirmButtonText: "OK",
      width: 400,
      background: "#161618",
    });
  };

  const reset = () => {
    setQuantity('');
    setMore('')
  }

  const handleCreateStock = async (e) => {
    try {
      e.preventDefault();
      const newData = { product_id: id, quantity , more };
      const { data } = await createStock({token,newData});
      console.log(data);
      if(data?.message){
        reset();
        showAlert();
        setOpen(!open);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleCreateStock}
      className={`${
        open ? "top-0 right-0 opacity-100" : " top-0 right-[-400px] opacity-0"
      } duration-500 fixed top-0 right-0 z-40 py-5 bg-[#202124] min-h-screen w-[300px] px-8 border-l border-[#7E7F80] flex flex-col gap-5`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="hover:bg-[#ffffff15] duration-200 p-[3px] absolute top-2 left-2 cursor-pointer rounded"
      >
        <RxCross2 className=" text-white" />
      </div>
      <h1 className=" text-white font-bold tracking-wider text-xl mt-3">
        Add Stock
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Quantity
          </label>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            className="input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            More
          </label>
          <textarea
            value={more}
            onChange={(e) => setMore(e.target.value)}
            className="input"
            cols="30"
            rows="4"
          ></textarea>
        </div>
      </div>
      <button className="btn mt-auto">Save</button>
    </form>
  );
};

export default AddStock;
