import React, { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

const AddStock = ({ open, setOpen }) => {
  return (
    <form
      className={`${
        open ? "top-0 right-0 opacity-100" : " top-0 right-[-400px] opacity-0"
      } duration-500 fixed top-0 right-0 z-40 py-5 bg-[#202124] min-h-screen w-[300px] px-8 border-l border-[#7E7F80] flex flex-col gap-5`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="hover:bg-[#ffffff15] duration-200 p-[3px] absolute top-1 left-1 cursor-pointer rounded"
      >
        <RxCross2 className=" text-white" />
      </div>
      <h1 className=" text-white font-bold tracking-wider text-xl mt-2">
        Add Stock
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Quantity
          </label>
          <input type="text" className="input" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            More
          </label>
          <textarea className="input" cols="30" rows="4"></textarea>
        </div>
      </div>
      <button className="btn mt-auto">Save</button>
    </form>
  );
};

export default AddStock;
