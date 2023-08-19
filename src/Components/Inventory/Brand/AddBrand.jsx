import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";

const AddBrand = ({ open }) => {
  const [file, setFile] = useState("No Selected File");

  return (
    <form
      className={`${
        open ? "top-0 right-0 opacity-100" : " top-0 right-[-400px] opacity-"
      } duration-500 fixed top-0 right-0 z-40 py-5 bg-[#202124] h-screen overflow-y-auto scrollbar w-[300px] px-8 border-l border-[#7E7F80] flex flex-col gap-5`}
    >
      <h1 className=" text-white font-bold tracking-wider text-xl">
        Add New Brand
      </h1>
      <div className="flex flex-col gap-5">
        <div
          onClick={() => {
            document.querySelector(".input-field").click();
          }}
          className="bg-[#383C3E] py-5 border border-dashed border-[#7E7F80] rounded-md cursor-pointer"
        >
          <div className=" flex flex-col">
            <input
              multiple
              type="file"
              accept="image/jpg,image/jpeg"
              className="input-field"
              hidden
              onChange={({ target: { files } }) => {
                files && setFile(files);
              }}
            />
            <BiPlus className=" text-white mx-auto" size={20} />
            <p className=" text-white font-medium tracking-wider text-center">
              Add Image
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Brand Name
          </label>
          <input type="text" className="input" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Company Name
          </label>
          <input type="text" className="input" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Agent
          </label>
          <input type="text" className="input" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Phone
          </label>
          <input type="text" className="input" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Description
          </label>
          <textarea className="input" cols="30" rows="3"></textarea>
        </div>
      </div>
      <button className="btn mt-auto">Save</button>
    </form>
  );
};

export default AddBrand;
