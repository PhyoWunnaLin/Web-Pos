import React from 'react'
import { useSelector } from 'react-redux';

const ProfileBottom = (props) => {
    const profileNavLinkActive = useSelector(state => state.profileSlice.profileNavLinkActive);
    const profileNavLinkActive2 = localStorage.getItem("profileNavLinkActive");

  return (
    <div className=' bg-[#191919]'>
        {/* Personal  */}
        <div className={` ${profileNavLinkActive2 == "Personal" || profileNavLinkActive2 == null ? "block" : "hidden"} pl-10 pt-6 pb-9 flex flex-col gap-3`}>
            {/* {props.phone && (
                <p className=' flex items-center gap-14-[17px] tracking-wider'>
                    <span className=' text-[#8787 w-[150px]87] font-semibold'>Phone</span>
                    <span className=' text-[#fff]'>{": " + props.phone}</span>
            </p>
            )}

            {props.email && (
                <p className=' flex items-center gap-14 text-[17px] tracking-wider'>
                    <span className=' text-[#8787 w-[150px]87] font-semibold'>Mail</span>
                    <span className=' text-[#fff]'>{": " + props.email}</span>
                </p>
            )} */}

            {props.address && (
                <p className=' flex items-center gap-14 text-[17px] tracking-wider'>
                <span className=' text-[#878787] w-[150px] font-semibold'>Address</span>
                <span className=' text-[#fff]'>{": " + props.address}</span>
            </p>
            )}

            {props.gender && (
                <p className=' flex items-center gap-14 text-[17px] tracking-wider'>
                <span className=' text-[#878787] w-[150px] font-semibold'>Gender</span>
                <span className=' text-[#fff]'>{": " + props.gender}</span>
            </p>
            )}
            
            {props.DOB && (
                <p className=' flex items-center gap-14 text-[17px] tracking-wide'>
                <span className=' text-[#878787] w-[150px] font-semibold'>Date Of Birth</span>
                <span className=' text-[#fff]'>{": " + props.DOB}</span>
            </p>
            )}
        </div>

        {/* Login Information  */}
        <div className={` ${profileNavLinkActive2 == "Login Information" ? "block" : "hidden"} pl-10 pt-6 pb-9 flex flex-col gap-5`}>
            {props.phone && (
                <p className=' flex items-center gap-14 text-[17px] tracking-wider'>
                    <span className=' text-[#878787] w-[150px] font-semibold'>Phone</span>
                    <span className=' text-[#fff]'>{": " + props.phone}</span>
                </p>
            )}

            {props.position && (
                <p className=' flex items-center gap-14 text-[17px] tracking-wider'>
                    <span className=' text-[#878787] w-[150px] font-semibold'>Position</span>
                    <span className=' text-[#fff]'>{": " + props.position}</span>
                </p>
            )}
            
            {props.email && (
                <p className=' flex items-center gap-14 text-[17px] tracking-wider'>
                    <span className=' text-[#878787] w-[150px] font-semibold'>Mail</span>
                    <span className=' text-[#fff]'>{": " + props.email}</span>
                </p>
            )}
        </div>

        {/* Password  */}
        

    </div>
  )
}

export default ProfileBottom