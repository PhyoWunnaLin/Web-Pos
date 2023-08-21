import React, { useEffect, useState } from "react";
import './createUser.css';
import { useDispatch } from "react-redux";
import { setUserForm1 } from "../../Redux/Services/userSlice";

const CreateUserStep1 = ({currentStep}) => {
  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [DOB,setDOB] = useState("")
  const [gender,setGender] = useState("")
  const [address,setAddress] = useState("")
  const dispatch = useDispatch()

  const userData = {name,phone,DOB,gender,address}
  useEffect(()=>{
    dispatch(setUserForm1(userData))
  },[currentStep])

  return (
      <form className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 w-full rounded-md">
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Name
          </label>
          <input onChange={(e)=> setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            className="input w-[70%]"
          />
        </div>

        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Phone
          </label>
          <input onChange={(e)=> setPhone(e.target.value)} type="text" className="input w-[70%]" />
        </div>

        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Date Of Birth
          </label>
          <input placeholder="19/12/2002" onChange={(e)=> setDOB(e.target.value)} type="text" className="input w-[70%]" />
        </div>

        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Gender
          </label>
          <div className=" flex gap-4 items-center w-[70%] text-[#FFFFFF] font-medium tracking-wider">
            <input onChange={(e)=> setGender(e.target.value)}
              type="radio"
              name="gender"
              value={"male"}
              // checked
              style={{ width: "18px", height: "18px" }}
            />
            Male
            <input onChange={(e)=> setGender(e.target.value)}
              type="radio"
              name="gender"
              value={"female"}
              style={{ width: "18px", height: "18px" }}
            />
            Female
          </div>
        </div>

        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Address
          </label>
          <textarea onChange={(e)=> setAddress(e.target.value)}
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
