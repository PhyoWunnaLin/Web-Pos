import React from "react";
import login from "../../assets/LoginPhoto/login.png";

const Login = () => {
  return (
    <div className="w-full flex">
      <div className="w-[60%] max-lg:hidden flex justify-center items-center h-screen bg-[#161618]">
        <div className="w-[60%]">
          <img src={login} className="w-full opacity-70" />
        </div>
      </div>
      <div className="w-[40%] max-lg:w-[100%] flex justify-center items-center h-screen bg-[#202124]">
        <div className="w-[80%] max-lg:w-[45%] max-md:w-[60%] max-sm:w-[80%] max-[420px]:w-[95%] flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-[#E8EAED] text-center tracking-widest">
            MMS
          </h1>
          <h1 className="text-4xl font-medium text-[#FFFFFF] text-center tracking-wider">
            Welcome To
          </h1>
          <form className="flex flex-col gap-5 mx-5 mt-5">
            <div className="flex flex-col gap-2">
              <label className="text-[#FFFFFF] font-medium tracking-widest">
                User Name
              </label>
              <input type="text" className="login-input" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#FFFFFF] font-medium tracking-widest">
                Password
              </label>
              <input type="password" className="login-input" />
            </div>
            <button className="btn mx-10 mt-6">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
