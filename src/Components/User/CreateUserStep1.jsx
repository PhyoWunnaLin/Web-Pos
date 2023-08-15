import React from "react";

const CreateUserStep1 = () => {
  return (
    <div className="bg-[#202124] h-screen w-full flex justify-center">
      <div className="w-[95%] mt-6 flex flex-col gap-8">
        {/* header  */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className=" text-white font-medium text-2xl tracking-wide">
              User
            </h1>
            <p className=" text-sm text-[#7E7F80] font-medium tracking-wide">
              User <span className="text-[#8AB4F8]">/</span> Create User
            </p>
          </div>
          <button className="btn">User List</button>
        </div>
        {/* form  */}
        <div className="flex">
          <form className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 w-[55%]">
            <div className="flex justify-between gap-5">
              <label className="text-[#FFFFFF] font-medium tracking-wider">
                Name
              </label>
              <input type="text" placeholder="Your Name" className="input w-[70%]" />
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUserStep1;
