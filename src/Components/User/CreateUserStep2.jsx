import React from "react";

const CreateUserStep2 = () => {
  return (
    <form className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 w-full rounded-md">
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Position
        </label>
        <select className="input w-[70%]">
          <option value="">Stuff</option>
          <option value="">Admin</option>
        </select>
      </div>
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Email
        </label>
        <input type="text" placeholder="Your Email" className="input w-[70%]" />
      </div>
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Password
        </label>
        <input type="password" className="input w-[70%]" />
      </div>
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Confirm Password
        </label>
        <input type="password" className="input w-[70%]" />
      </div>
    </form>
  );
};

export default CreateUserStep2;
