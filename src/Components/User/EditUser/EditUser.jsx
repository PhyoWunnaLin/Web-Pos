import React, {useState} from 'react'
import { Link } from "react-router-dom";
import MainLayout from '../../../Layouts/MainLayout';
import Banner from '../../Banner/Banner';
import EditUserStep1 from './EditUserStep1';
import EditUserStep2 from './EditUserStep2';
import EditUserStep3 from './EditUserStep3';
import EditUserStep4 from './EditUserStep4';
import { ImArrowRight2 } from "react-icons/im";
import { TiTick } from "react-icons/ti";

const EditUser = () => {
  const steps = ["Personal", "Login Info", "Photo"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const editUserHandler = async(e)=>{
    try{
      e.preventDefault();
    //   const userData = {name: userForm1?.name, phone: userForm1?.phone, date_of_birth: userForm1?.DOB, gender: userForm1?.gender, address: userForm1?.address, email: userForm2?.email, password: userForm2?.password, password_confirmation: userForm2?.confirm_Password, role: userForm2?.position, user_photo: userForm3 }
    //   const data = await createUser({token,userData})
    //   // console.log(data)
    //   if(data?.data){
    //     showAlert()
    //   }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* header  */}
          <Banner
            title={"User"}
            path1={"Edit User"}
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
                <EditUserStep1 currentStep={currentStep} />
              </div>

              <div className={`${currentStep == 2 ? "block" : " hidden"}`}>
                <EditUserStep2 currentStep={currentStep} />
              </div>

              <div className={`${currentStep == 3 ? "block" : " hidden"}`}>
                <EditUserStep3 currentStep={currentStep} />
              </div>

              <div className={`${currentStep == 4 ? "block" : " hidden"}`}>
                <EditUserStep4 currentStep={currentStep} />
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
                <Link onClick={currentStep == 4 && editUserHandler}>
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
  )
}

export default EditUser