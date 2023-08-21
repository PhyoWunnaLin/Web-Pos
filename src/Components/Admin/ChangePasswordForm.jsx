import React, { useState } from 'react'
import { useChangePasswordMutation } from '../../Redux/API/authApi';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { removeToken } from '../../Redux/Services/authSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChangePasswordForm = () => {
    const [invalid,setInvalid] = useState(false)
    const token = Cookies.get("token");
    const [changePassword] = useChangePasswordMutation();
    const [current_password,setCurrentPassword] = useState("")
    const [password,setPassword] = useState("")
    const [password_confirmation,setPasswordConfirmation] = useState("")
    const dispatch = useDispatch();
    const nav = useNavigate();

    const changePasswordHandler = async (e)=> {
        try{
            e.preventDefault();
            const newData = {current_password,password,password_confirmation};
            const {data} = await changePassword({token,newPassword:newData});
            console.log(data)
            if(data?.message){
                Swal.fire({
                    customClass : {
                      title: 'swal2-title'
                    },
                    title: "Please login again",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: 400,
                    background: "#161618",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      nav("/login")
                      dispatch(removeToken());
                    }
                  })
            }else{
                setInvalid(!invalid)
            }
        }catch(error){
            console.log(error);
        }
    }

    const changePasswordCancel = () => {
        setCurrentPassword(""),
        setPassword(""),
        setPasswordConfirmation("")
    }

  return (
    <div>
        <form onSubmit={changePasswordHandler} className="p-10 flex flex-col gap-6 w-full">
            <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Current Password
                    </label>
                    <input required value={current_password} onChange={(e)=>setCurrentPassword(e.target.value)}
                        type="password"
                        className="input w-[70%]"
                    />
            </div>
                    
            <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        New Password
                    </label>
                    <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="input w-[70%]" />
            </div>

            <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Confirm Password
                    </label>
                    <div className='flex flex-col w-[70%]'>
                    <input required value={password_confirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} type="password" className="input w-full" />
                    {invalid && <p className='text-sm text-[#e94343] tracking-widest mt-2 -mb-3'>* Wrong Password Please Try Again</p> }       
                    </div>
            </div>
            {/* btn  */}
            <div className=" flex items-center gap-5 mt-8">
                    <button type='submit' onClick={() => {
                        changePasswordCancel();
                        setInvalid(!invalid);
                    }} className="btn3 flex gap-2 items-center border border-[#7E7F80] text-[#7E7F80]">
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