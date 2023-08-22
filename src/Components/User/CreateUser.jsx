import React, { useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import CreateUserStep1 from "./CreateUserStep1";
import Banner from "../Banner/Banner";
import { ImArrowRight2 } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import CreateUserStep2 from "./CreateUserStep2";
import CreateUserStep3 from "./CreateUserStep3";
import CreateUserStep4 from "./CreateUserStep4";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./successAlert.css";
import { useSelector } from "react-redux";
import { useCreateUserMutation } from "../../Redux/API/userApi";
import Cookies from "js-cookie";

const CreateUser = () => {
  const steps = ["Personal", "Login Info", "Photo"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const nav = useNavigate();
  const token = Cookies.get("token")
  const [createUser] = useCreateUserMutation()
  const userForm1 = useSelector(state => state.userSlice.userForm1)
  const userForm2 = useSelector(state => state.userSlice.userForm2)
  // const userForm3 = useSelector(state => state.userSlice.userForm3)
  const selectImg = useSelector(state => state.mediaSlice.selectImg)
  // console.log(selectImg)

  const createUserHandler = async(e)=>{
    try{
      e.preventDefault();
      const userData = {name: userForm1?.name, phone: userForm1?.phone, date_of_birth: userForm1?.DOB, gender: userForm1?.gender, address: userForm1?.address, email: userForm2?.email, password: userForm2?.password, password_confirmation: userForm2?.confirm_Password, role: userForm2?.position, user_photo: selectImg }
      const data = await createUser({token,userData})
      // console.log(data)
      if(data?.data){
        showAlert()
      }
    }catch(error){
      console.log(error)
    }
  }

  const showAlert = () => {
    Swal.fire({
      customClass: {
        title: "swal2-title",
      },
      title: "Successfully created an account",
      icon: "success",
      confirmButtonText: "OK",
      // showCloseButton: true,
      width: 400,
      background: "#161618",
    }).then((result) => {
      if (result.isConfirmed) {
        nav("/user/overview");
      }
    });
  };
  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* header  */}
          <Banner
            title={"User"}
            path1={"Create User"}
            btn={"User List"}
            button={true}
            route={"/user/overview"}
          />
          {/* form  */}
          <div className="flex gap-10">
            <div className="w-[65%]">
              {/* {currentStep == 1 && <CreateUserStep1 />}
              {currentStep == 2 && <CreateUserStep2 />}
              {currentStep == 3 && <CreateUserStep3 />}
              {currentStep == 4 && <CreateUserStep4 />} */}

              <div className={`${currentStep == 1 ? "block" : " hidden"}`}>
                <CreateUserStep1 currentStep={currentStep} />
              </div>

              <div className={`${currentStep == 2 ? "block" : " hidden"}`}>
                <CreateUserStep2 currentStep={currentStep} />
              </div>

              <div className={`${currentStep == 3 ? "block" : " hidden"}`}>
                <CreateUserStep3 currentStep={currentStep} />
              </div>

              <div className={`${currentStep == 4 ? "block" : " hidden"}`}>
                <CreateUserStep4 currentStep={currentStep} />
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
                <Link onClick={currentStep == 4 && createUserHandler}>
                  <button
                    onClick={() => {
                      {
                        currentStep > 3
                          ? setComplete(true)
                          : setCurrentStep((pre) => pre + 1);
                      }
                    }}
                    className="btn flex items-center gap-2"
                  >
                    {currentStep > 3 ? "Create" : "Next"}
                    {currentStep <= 3 && (
                      <span>
                        <ImArrowRight2 />
                      </span>
                    )}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateUser;
