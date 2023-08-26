import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserForm2 } from "../../Redux/Services/userSlice";
import { ImArrowRight2 } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import Swal from "sweetalert2";

const CreateUserStep2 = ({currentStep , setCurrentStep , steps , setComplete , complete }) => {
  const [position,setPosition] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirm_Password,setConfirm_Password] = useState("")
  const userData = {position,email,password,confirm_Password}
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setUserForm2(userData))
  },[currentStep])

  const run = (e) => {
    e.preventDefault()
    if(currentStep > 3) {
      setComplete(true)
    }else{
      setCurrentStep((pre) => pre + 1)
    }
  }

  return (
    <form onSubmit={run} className="flex gap-10">
      <div className="w-[65%]">
        <div className=" border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 rounded-md">
          <div className="flex justify-between gap-5">
            <label className="text-[#FFFFFF] font-medium tracking-wider">
              Position
            </label>
            <select required onChange={(e)=> setPosition(e.target.value)} className="input w-[70%]">
              <option value="" ></option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex justify-between gap-5">
            <label className="text-[#FFFFFF] font-medium tracking-wider">
              Email
            </label>
            <input required onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Your Email" className="input w-[70%]" />
          </div>
          <div className="flex justify-between gap-5">
            <label className="text-[#FFFFFF] font-medium tracking-wider">
              Password
            </label>
            <input required onChange={(e)=> setPassword(e.target.value)} type="password" className="input w-[70%]" />
          </div>
          <div className="flex justify-between gap-5">
            <label className="text-[#FFFFFF] font-medium tracking-wider">
              Confirm Password
            </label>
            <input required onChange={(e)=> setConfirm_Password(e.target.value)} type="password" className="input w-[70%]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-16">
              {steps.map((step, i) => {
                return (
                  <div key={i} className="flex flex-col">
                    <div
                      className={`step-item ${
                        currentStep == i + 1 && "active"
                      } ${(i + 1 < currentStep || complete) && "complete"}`}
                    >
                      <div className="step">
                        {i + 1 < currentStep || complete ? (
                          <TiTick className=" text-black" size={22} />
                        ) : (
                          i + 1
                        )}
                      </div>
                      <p className="text-[#FFFFFF] font-medium tracking-wider">
                        {step}
                      </p>
                    </div>
                    {i < 2 && <div className="line"></div>}
                  </div>
                );
              })}
              <div className="mt-8">
                  <button
                    className="btn flex items-center gap-2"
                  >
                    {currentStep > 3 ? "Create" : "Next"}
                    {currentStep <= 3 && (
                      <span>
                        <ImArrowRight2 />
                      </span>
                    )}
                  </button>
              </div>
      </div>
    </form>
  );
};

export default CreateUserStep2;
