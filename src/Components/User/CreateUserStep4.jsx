import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephoneOutbound } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { BiSolidEditAlt } from "react-icons/bi";
import {PiUserFocus} from 'react-icons/pi'
import { useDispatch, useSelector } from "react-redux";
import { setUserCreatePp } from "../../Redux/Services/profileSlice";
import { TiTick } from "react-icons/ti";
import { ImArrowRight2 } from "react-icons/im";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useCreateUserMutation } from "../../Redux/API/userApi";

const CreateUserStep4 = ({currentStep , setCurrentStep , steps , setComplete , complete}) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const token = Cookies.get("token")
  const [createUser] = useCreateUserMutation()
  const userForm1 = useSelector((state) => state.userSlice.userForm1);
  const userForm2 = useSelector((state) => state.userSlice.userForm2);
  const userForm3 = useSelector(state => state.userSlice.userForm3)
  // console.log(userForm2)

  const userCreatePp = useSelector((state) => state.profileSlice.userCreatePp);
  // const userCreatePp2 = localStorage.getItem("userCreatePp");

  const showAlert = () => {
    Swal.fire({
      customClass: {
        title: "swal2-title",
      },
      title: "Successfully created an account",
      icon: "success",
      confirmButtonText: "OK",
      width: 400,
      background: "#161618",
    }).then((result) => {
      if (result.isConfirmed) {
        nav("/user/overview");
      }
    });
  };

  const createUserHandler = async()=>{
    try{
      const userData = {name: userForm1?.name, phone: userForm1?.phone, date_of_birth: userForm1?.DOB, gender: userForm1?.gender, address: userForm1?.address, email: userForm2?.email, password: userForm2?.password, password_confirmation: userForm2?.confirm_Password, role: userForm2?.position, user_photo: userForm3 }
      const data = await createUser({token,userData})
      // console.log(data)
      if(data?.data){
        showAlert()
      }
    }catch(error){
      console.log(error)
    }
  }

  const run = () => {
    createUserHandler();
  }

  return (
    <div className="flex gap-10">
      {/* preview  */}
      <div className="w-[65%]">
      {/* Profile  */}
      <div>
        {/* pp top start  */}
        <div className=" bg-[#161618] border-b border-[#878787]">
          {/* profile img  */}
          <div className="pb-10 pt-7 mt-[73px] flex items-center relative">
            <div className=" absolute top-[-70px] left-[33px]">
              {userForm3 ? (
                <div className="w-[150px] h-[150px] bg-[#202124] rounded-full mx-auto border-dashed border-2 border-[#8AB4F8] flex justify-center items-center relative">
                  <img
                    src={userForm3}
                    className="w-[150px] h-[150px] object-cover absolute rounded-full"
                    alt=""
                  />
                </div>
              ) : (
                <div className="w-[150px] h-[150px] bg-[#202124] rounded-full mx-auto border-dashed border-2 border-[#8AB4F8] flex justify-center items-center relative">
                  <PiUserFocus className=" text-white" size={45} />
                </div>
              )}
            </div>

            <div className=" flex justify-between w-full">
              <div className=" ml-[213px]">
                <h1 className=" text-xl text-[#fff] font-bold tracking-wider mb-1">
                  {userForm1?.name}
                </h1>
                <div className=" flex items-center gap-2 ">
                  <span className=" text-[#c5c1c1]">
                    {userForm2?.position} /
                  </span>
                  <p className=" flex items-center gap-1">
                    <span className=" text-xs text-[#8ab4f8]">
                      <AiFillClockCircle />
                    </span>
                    <span className=" text-[#fff] text-sm">Active in 1 hr</span>
                  </p>
                </div>
              </div>

              <div className=" flex items-center gap-3 mr-8">
                <p className=" icon2 hover-up text-[#fff]">
                  <HiOutlineMailOpen />
                </p>
                <p className=" icon2 hover-up text-[#fff]">
                  <BsTelephoneOutbound />
                </p>
              </div>
            </div>
          </div>

          {/* profile navLink  */}
          <div className=" flex items-center gap-20 ml-10 pb-5">
            <div
              onClick={() => dispatch(setUserCreatePp("Personal"))}
              className={` ${
                userCreatePp == "Personal" || userCreatePp == null
                  ? "active"
                  : null
              } navLink cursor-pointer flex items-center gap-2`}
            >
              <span className=" text-[19px]">
                <CiShop />
              </span>
              <span className=" font-semibold">Personal</span>
            </div>

            <div
              onClick={() => dispatch(setUserCreatePp("Login Information"))}
              className={` ${
                userCreatePp == "Login Information" && "active"
              } navLink cursor-pointer flex items-center gap-2`}
            >
              <span className=" text-[19px]">
                <CiShop />
              </span>
              <span className=" font-semibold">Login Information</span>
            </div>
          </div>
        </div>
        {/* pp top end  */}

        {/* pp bottom start  */}
        <div className=" bg-[#191919]">
          {/* Personal  */}
          <div
            className={` ${
              userCreatePp == "Personal" || userCreatePp == null
                ? "block"
                : "hidden"
            } pl-10 pt-6 pb-9 flex flex-col gap-3`}
          >
            <p className=" flex items-center gap-14 text-[17px] tracking-wider">
              <span className=" text-[#878787] w-[150px] font-semibold">
                Address
              </span>
              <span className=" text-[#fff]">{userForm1?.address}</span>
            </p>

            <p className=" flex items-center gap-14 text-[17px] tracking-wider">
              <span className=" text-[#878787] w-[150px] font-semibold">
                Gender
              </span>
              <span className=" text-[#fff]">{userForm1?.gender}</span>
            </p>

            <p className=" flex items-center gap-14 text-[17px] tracking-wide">
              <span className=" text-[#878787] w-[150px] font-semibold">
                Date Of Birth
              </span>
              <span className=" text-[#fff]">{userForm1?.DOB}</span>
            </p>
          </div>

          {/* Login Information  */}
          <div
            className={` ${
              userCreatePp == "Login Information" ? "block" : "hidden"
            } pl-10 pt-6 pb-9 flex flex-col gap-5`}
          >
            <p className=" flex items-center gap-14 text-[17px] tracking-wider">
              <span className=" text-[#878787] w-[150px] font-semibold">
                Phone
              </span>
              <span className=" text-[#fff]">{userForm1?.phone}</span>
            </p>

            <p className=" flex items-center gap-14 text-[17px] tracking-wider">
              <span className=" text-[#878787] w-[150px] font-semibold">
                Position
              </span>
              <span className=" text-[#fff]">{userForm2?.position}</span>
            </p>

            <p className=" flex items-center gap-14 text-[17px] tracking-wider">
              <span className=" text-[#878787] w-[150px] font-semibold">
                Mail
              </span>
              <span className=" text-[#fff]">{userForm2?.email}</span>
            </p>
          </div>
        </div>
        {/* pp bottom end  */}
      </div>
      {/* profile end  */}
      </div>
      {/* form step  */}
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
                      onClick={run}
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
    </div>
  );
};

export default CreateUserStep4;
