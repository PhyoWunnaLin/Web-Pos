import React from 'react'

const LoginInfoEditForm = () => {
  return (
    <div>
        <form className="p-10 max-[620px]:pl-7 flex flex-col gap-6 w-full">
                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        className="input w-[70%]"
                    />
                    </div>
                    
                    <div className="flex justify-between gap-5">
                    <label className="text-[#FFFFFF] font-medium tracking-wider">
                        Email
                    </label>
                    <input type="email" className="input w-[70%]" />
                    </div>
                    

                    {/* btn  */}
                    <div className=" flex items-center gap-5 mt-8">
                    <button className="btn3 flex gap-2 items-center border border-[#7E7F80] text-[#7E7F80]">
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

export default LoginInfoEditForm