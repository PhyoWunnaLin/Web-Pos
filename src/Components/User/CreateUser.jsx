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
  const [controlStep, setControlStep] = useState(false) 
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const userForm1 = useSelector(state => state.userSlice.userForm1)
  const userForm2 = useSelector(state => state.userSlice.userForm2)
  const userForm3 = useSelector(state => state.userSlice.userForm3)

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
            <div className="">
              <div className={`${currentStep == 1 ? "block" : " hidden"}`}>
                <CreateUserStep1 steps={steps} setCurrentStep={setCurrentStep} complete={complete} setComplete={setComplete} currentStep={currentStep} />
              </div>

              <div className={`${currentStep == 2 ? "block" : " hidden"}`}>
                <CreateUserStep2 steps={steps} setCurrentStep={setCurrentStep} complete={complete} setComplete={setComplete} currentStep={currentStep} />
              </div>

              <div className={`${currentStep == 3 ? "block" : " hidden"}`}>
                <CreateUserStep3 steps={steps} setCurrentStep={setCurrentStep} complete={complete} setComplete={setComplete} currentStep={currentStep} />
              </div>

              <div className={`${currentStep == 4 ? "block" : " hidden"}`}>
                <CreateUserStep4 steps={steps} setCurrentStep={setCurrentStep} complete={complete} setComplete={setComplete} currentStep={currentStep} />
              </div>
            </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateUser;
