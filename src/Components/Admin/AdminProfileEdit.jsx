import React from 'react'
import { useSelector } from 'react-redux';
import MainLayout from '../../Layouts/MainLayout';
import Banner from '../Banner/Banner';
import ProfileTop from '../Profile/ProfileTop';
import ProfileFormBottom from '../Profile/ProfileFormBottom';

const AdminProfileEdit = () => {
  const profileNavLinkActive = useSelector(state => state.profileSlice.profileNavLinkActive);
  const profileNavLinkActive2 = localStorage.getItem("profileNavLinkActive");
  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] mt-6 flex flex-col gap-8">
          {/* banner  */}
            <Banner title={"Profile"} path1={"Edit"} path2={profileNavLinkActive2 == "Personal" || profileNavLinkActive2 == null ? "Personal" : profileNavLinkActive2} icon={true} btn={" Profile"}/>

          {/* Profile  */}
          <div>
            <ProfileTop 
            img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lpk_T0p1lQEqmdbzT9DtlytfERJJJUKEqg&usqp=CAU"}/>
          
            <ProfileFormBottom />

            {/* example profile props */}
            
            {/* <ProfileBottom 
            phone={"0999999999"} 
            email={"jj@gmail.com"} 
            address={"fakjjf"} 
            gender={"female"} 
            DOB={"23/33/98"}/> */}

          </div>

        </div>
      </div>
    </MainLayout>
  )
}

export default AdminProfileEdit