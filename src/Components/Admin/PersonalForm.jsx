import React, { useState } from 'react'
import { useEditProfileMutation } from '../../Redux/API/adminApi';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import "../User/successAlert.css"

const PersonalForm = () => {
    const token = Cookies.get("token");
    const [editProfile] = useEditProfileMutation();
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [date_of_birth,setDOB] = useState("");
    const [gender,setGender] = useState("");
    const [address,setAddress] = useState("");
    const [user_photo,setPhoto] = useState("");

    const editPpCancelHandler = () => {
        setName(""),
        setPhone(""),
        setDOB(""),
        setGender(null),
        setAddress(""),
        setPhone("")
    }

    const editProfileHandler = async(e) => {
        try{
            e.preventDefault()
            const newPpData = {name, phone, date_of_birth, gender, address, user_photo}
            const data = await editProfile({token,newData:newPpData})
            console.log(data);
            if(data?.message){
                editPpCancelHandler()
                Swal.fire({
                    customClass : {
                      title: 'swal2-title'
                    },
                    title: "update user successfully",
                    icon: "success",
                    confirmButtonText: "OK",
                    // showCloseButton: true,
                    width: 400,
                    background: "#161618",
                  })
            }
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div>
        <form onSubmit={editProfileHandler} className="p-10 flex flex-col gap-6 w-full">
                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Name
                    </label>
                    <input onChange={(e)=>setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Your Name"
                        className="input w-[70%]"
                    />
                    </div>

                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Phone
                    </label>
                    <input onChange={(e)=>setPhone(e.target.value)} value={phone} type="text" className="input w-[70%]" />
                    </div>

                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Date Of Birth
                    </label>
                    <input value={date_of_birth} placeholder='19/12/2002' onChange={(e)=>setDOB(e.target.value)} type="text" className="input w-[70%]" />
                    </div>

                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Gender
                    </label>
                    <div className=" flex gap-4 items-center w-[70%] text-[#FFFFFF] font-medium tracking-wider">
                        <input onChange={(e)=>setGender(e.target.value)}
                        type="radio"
                        name="gender"
                        value={"male"}
                        // checked
                        style={{ width: "18px", height: "18px" }}
                        />
                        Male
                        <input onChange={(e)=>setGender(e.target.value)}
                        value={"female"}
                        type="radio"
                        name="gender"
                        style={{ width: "18px", height: "18px" }}
                        />
                        Female
                    </div>
                    </div>

                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Address
                    </label>
                    <textarea onChange={(e)=>setAddress(e.target.value)}
                        value={address}
                        placeholder="Your Address..."
                        cols="30"
                        rows="4"
                        className="input w-[70%]"
                    ></textarea>
                    </div>

                    {/* btn  */}
                    <div className=" flex items-center gap-5 mt-8">
                    <button onClick={editPpCancelHandler} className="btn3 flex gap-2 items-center border border-[#7E7F80] text-[#7E7F80]">
                        Cancle
                    </button>
                    <button className="btn flex gap-2 items-center border border-[#3f4245]">
                        Save
                    </button>
                    </div>
                </form>
    </div>
  )
}

export default PersonalForm