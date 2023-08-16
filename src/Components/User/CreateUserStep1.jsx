import React from "react";
import Banner from "../Banner/Banner";

const CreateUserStep1 = () => {
  return (
      <form className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 w-[65%]">
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input w-[70%]"
          />
        </div>
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Phone
          </label>
          <input type="text" className="input w-[70%]" />
        </div>
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Date Of Birth
          </label>
          <input type="text" className="input w-[70%]" />
        </div>
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Gender
          </label>
          <div className=" flex gap-4 items-center w-[70%] text-[#FFFFFF] font-medium tracking-wider">
            <input
              type="radio"
              name="gender"
              checked
              style={{ width: "18px", height: "18px" }}
            />
            Male
            <input
              type="radio"
              name="gender"
              style={{ width: "18px", height: "18px" }}
            />
            Female
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Address
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

export default CreateUserStep1;
