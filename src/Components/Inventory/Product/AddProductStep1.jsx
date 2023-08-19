import React from "react";

const AddProductStep1 = () => {
  return (
    <form className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 w-full rounded-md">
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Name
        </label>
        <input
          type="text"
          placeholder="Product Name"
          className="input w-[70%]"
        />
      </div>
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Brand
        </label>
        <select className="input w-[70%] tracking-wider">
          <option value="">Admin</option>
          <option value="">Stuff</option>
        </select>
      </div>
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Stock
        </label>
        <input type="text" className="input w-[70%]" />
      </div>
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Unit
        </label>
        <input type="text" className="input w-[70%]" />
      </div>
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          More Info
        </label>
        <textarea
          placeholder="Your Address..."
          cols="30"
          rows="4"
          className="input w-[70%]"
        ></textarea>
      </div>
    </form>
  );
};

export default AddProductStep1;
