import React from "react";
import { useSelector } from "react-redux";

const ProfileFormBottom = () => {
  const profileNavLinkActive = useSelector((state) => state.profileSlice.profileNavLinkActive);
  const profileNavLinkActive2 = localStorage.getItem("profileNavLinkActive");

  return (
    <div className=" bg-[#191919]">
      {/* Personal form  */}
      <div
        className={` 
          pl-10 pt-6 pb-9 flex flex-col gap-5`}
      >
        {/* ${profileNavLinkActive2 == "Login Information" ? "block" : "hidden"}  */}
        {/* {props.phone && (
          <p className=" flex items-center gap-36 text-[19px] tracking-wide">
            <span className=" text-[#878787] font-semibold">Phone</span>
            <span className=" text-[#fff]">{": " + props.phone}</span>
          </p>
        )} */}

        <div className=" flex items-center gap-36 text-[19px] tracking-wide">
            <span className=" text-[#878787] font-semibold">Name</span>
            <input type="text" placeholder="Your Name" className=" input" />
        </div>
      </div>

      {/* Password  */}
    </div>
  );
};

export default ProfileFormBottom;
