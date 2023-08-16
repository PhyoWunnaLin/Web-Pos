import React from "react";
import { useSelector } from "react-redux";

const ProfileFormBottom = () => {
  const profileNavLinkActive = useSelector((state) => state.profileSlice.profileNavLinkActive);
  const profileNavLinkActive2 = localStorage.getItem("profileNavLinkActive");

  return (
    <div className=" bg-[#191919] mb-10">
      {/* Personal form  */}
      <div className={`${profileNavLinkActive2 == "Personal" ? "block" : "hidden"}`}>
        <form className="p-10 flex flex-col gap-6 w-full">
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
                // checked
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

            {/* btn  */}
            <div className=" flex items-center gap-5 mt-8">
            <button className="btn3 flex gap-2 items-center border border-[#7E7F80] text-[#7E7F80]">
                Cancle
            </button>
            <button className="btn flex gap-2 items-center border border-[#3f4245]">
                Save
            </button>
            </div>
        </form>
      </div>

      {/* Login Information  */}
      <div className={`${profileNavLinkActive2 == "Login Information" ? "block" : "hidden"}`}>
        <form className="p-10 flex flex-col gap-6 w-full">
            <div className="flex justify-between gap-5">
            <label className="text-[#FFFFFF] font-medium tracking-wider">
                Phone Number
            </label>
            <input
                type="text"
                className="input w-[70%]"
            />
            </div>
            
            <div className="flex justify-between gap-5">
            <label className="text-[#FFFFFF] font-medium tracking-wider">
                Email
            </label>
            <input type="email" className="input w-[70%]" />
            </div>
            

            {/* btn  */}
            <div className=" flex items-center gap-5 mt-8">
            <button className="btn3 flex gap-2 items-center border border-[#7E7F80] text-[#7E7F80]">
                Cancle
            </button>
            <button className="btn flex gap-2 items-center border border-[#3f4245]">
                Save
            </button>
            </div>
        </form>
      </div>

      {/* password  */}
      <div className={`${profileNavLinkActive2 == "Password" ? "block" : "hidden"}`}>
        <form className="p-10 flex flex-col gap-6 w-full">
            <div className="flex justify-between gap-5">
            <label className="text-[#FFFFFF] font-medium tracking-wider">
                Current Password
            </label>
            <input
                type="password"
                className="input w-[70%]"
            />
            </div>
            
            <div className="flex justify-between gap-5">
            <label className="text-[#FFFFFF] font-medium tracking-wider">
                New Password
            </label>
            <input type="password" className="input w-[70%]" />
            </div>

            <div className="flex justify-between gap-5">
            <label className="text-[#FFFFFF] font-medium tracking-wider">
                Confirm Password
            </label>
            <input type="password" className="input w-[70%]" />
            </div>
            

            {/* btn  */}
            <div className=" flex items-center gap-5 mt-8">
            <button className="btn3 flex gap-2 items-center border border-[#7E7F80] text-[#7E7F80]">
                Cancle
            </button>
            <button className="btn flex gap-2 items-center border border-[#3f4245]">
                Save
            </button>
            </div>
        </form>
      </div>



    </div>
  );
};

export default ProfileFormBottom;
