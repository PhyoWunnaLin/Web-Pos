import React,{useState} from "react";
import img from "../../assets/LoginPhoto/login.png";
import { Link, useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { useLoginMutation } from "../../Redux/API/authApi";
import { addToken } from "../../Redux/Services/authSlice";
import { Loader, PasswordInput, TextInput } from '@mantine/core';
import "./login.css"

const Login = () => {
  const [invalid,setInvalid] = useState("")
  const [serverError,setServerError] = useState(false)
  const [ login, {isLoading}] = useLoginMutation();
  const [email,setEmail] = useState("admin@gmail.com");
  const [password,setPassword] = useState("asdffdsa");
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const loginHandler = async(e) => {
    try{
      e.preventDefault();
      const user = {email,password};
      const {data} = await login(user);
      // console.log(data);
      
      dispatch(addToken(data?.token))
      if(data?.token){
        nav("/")
      }else if (data?.message){
        setInvalid(data?.message)
      }else{
        setServerError(!serverError)
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="w-full flex">
      <div className="w-[60%] max-lg:hidden flex justify-center items-center h-screen bg-[#161618]">
        <div className="w-[55%]">
          <img src={img} className="w-full opacity-70" />
        </div>
      </div>
      <div className="w-[45%] max-lg:w-[100%] flex justify-center items-center h-screen bg-[#202124]">
        <div className="w-[70%] max-lg:w-[45%] max-md:w-[60%] max-sm:w-[80%] max-[420px]:w-[95%] flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-[#E8EAED] text-center tracking-widest">
            MMS
          </h1>
          <h1 className="text-4xl font-medium text-[#FFFFFF] text-center tracking-wider">
            Welcome To
          </h1>

          {/* form  */}
          <form onSubmit={loginHandler} className="flex flex-col gap-5 mx-5 mt-5">
            <div className="flex flex-col gap-2">
              <label className="text-[#FFFFFF] font-medium tracking-widest ">
                Email
              </label>
              <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="login-input" />

              {/* <TextInput label="Email" size='md'/> */}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#FFFFFF] font-medium tracking-widest">
                Password
              </label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="login-input" />

              {/* <PasswordInput label="Password" size='md'/> */}
            </div>
            {invalid != "" && <p className="text-sm text-[#e94343] tracking-widest -mt-2">* {invalid}</p>}
            {serverError && <p className="text-sm text-[#e94343] tracking-widest -mt-2">* Server Error</p>}

            {isLoading ? (
              <button disabled className="btn mx-10 mt-6 flex justify-center item-center gap-3">
                <span>Login</span> 
                <span><Loader color="dark" size="sm" className=" pt-1"/></span>
              </button>
            ) : (
              <button className="btn mx-10 mt-6 cursor-pointer flex justify-center item-center gap-3">
              <span>Login</span> 
            </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
