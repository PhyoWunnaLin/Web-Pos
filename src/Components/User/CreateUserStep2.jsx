import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserForm2 } from "../../Redux/Services/userSlice";

const CreateUserStep2 = ({currentStep}) => {
  const [position,setPosition] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirm_Password,setConfirm_Password] = useState("")
  const userData = {position,email,password,confirm_Password}
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setUserForm2(userData))
  },[currentStep])
  return (
    <form className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 w-full rounded-md">
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Position
        </label>
        <select onChange={(e)=> setPosition(e.target.value)} className="input w-[70%]">
          <option disabled>Select Position</option>
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Email
        </label>
        <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Your Email" className="input w-[70%]" />
      </div>
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Password
        </label>
        <input onChange={(e)=> setPassword(e.target.value)} type="password" className="input w-[70%]" />
      </div>
      <div className="flex justify-between gap-5">
        <label className="text-[#FFFFFF] font-medium tracking-wider">
          Confirm Password
        </label>
        <input onChange={(e)=> setConfirm_Password(e.target.value)} type="password" className="input w-[70%]" />
      </div>
    </form>
  );
};

export default CreateUserStep2;
