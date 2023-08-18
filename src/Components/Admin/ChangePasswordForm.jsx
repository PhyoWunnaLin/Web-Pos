import React, { useState } from 'react'
import { useChangePasswordMutation } from '../../Redux/API/authApi';
import Cookies from 'js-cookie';

const ChangePasswordForm = () => {
    const token = Cookies.get("token");
    const [changePassword] = useChangePasswordMutation();
    const [current_password,setCurrentPassword] = useState("")
    const [password,setPassword] = useState("")
    const [password_confirmation,setPasswordConfirmation] = useState("")

    const changePasswordHandler = async(e)=> {
        try{
            e.preventDefault();
            const newData = {current_password,password,password_confirmation};
            const data = await changePassword({token,newPassword:newData});
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }

  return (
    <div>
        <form onSubmit={changePasswordHandler} className="p-10 flex flex-col gap-6 w-full">
            <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Current Password
                    </label>
                    <input onChange={(e)=>setCurrentPassword(e.target.value)}
                        type="password"
                        className="input w-[70%]"
                    />
            </div>
                    
            <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        New Password
                    </label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="input w-[70%]" />
            </div>

            <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Confirm Password
                    </label>
                    <input onChange={(e)=>setPasswordConfirmation(e.target.value)} type="password" className="input w-[70%]" />
            </div>
                    

            {/* btn  */}
            <div className=" flex items-center gap-5 mt-8">
                    <button className="btn3 flex gap-2 items-center border border-[#7E7F80] text-[#7E7F80]">
                        Cancel
                    </button>
                    <button className="btn flex gap-2 items-center border border-[#3f4245]">
                        Save
                    </button>
            </div>
        </form>
    </div>
  )
}

export default ChangePasswordForm