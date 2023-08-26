import React, { useEffect, useState } from "react";
import "./createUser.css";
import { useDispatch } from "react-redux";
import { setUserForm1 } from "../../Redux/Services/userSlice";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import Swal from "sweetalert2";

const CreateUserStep1 = ({ currentStep , setCurrentStep , steps , setComplete , complete }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const userData = { name, phone, DOB, gender, address };
  useEffect(() => {
    dispatch(setUserForm1(userData));
  }, [currentStep]);

  const run = (e) => {
    e.preventDefault()
    if(currentStep > 3) {
      setComplete(true)
    }else{
      setCurrentStep((pre) => pre + 1)
    }
  }

  return (
    <form onSubmit={run} className="flex w-full gap-10">
      <div className="w-[65%]">
        <div className=" border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 rounded-md">
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            placeholder="Your Name"
            className="input w-[70%]"
          />
        </div>

        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Phone
          </label>
          <input
            required
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="input w-[70%]"
          />
        </div>

        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Date Of Birth
          </label>
          <input
            required
            placeholder="19/12/2002"
            onChange={(e) => setDOB(e.target.value)}
            type="text"
            className="input w-[70%]"
          />
        </div>

        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Gender
          </label>
          <div className=" flex gap-4 items-center w-[70%] text-[#FFFFFF] font-medium tracking-wider">
            <input
              required
              onChange={(e) => setGender(e.target.value)}
              type="radio"
              name="gender"
              value={"male"}
              // checked
              style={{ width: "18px", height: "18px" }}
            />
            Male
            <input
              required
              onChange={(e) => setGender(e.target.value)}
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
          <textarea
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Your Address..."
            cols="30"
            rows="4"
            className="input w-[70%]"
          ></textarea>
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

export default CreateUserStep1;
