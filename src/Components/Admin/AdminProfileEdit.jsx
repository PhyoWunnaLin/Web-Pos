import React from 'react'
import Banner from '../Banner/Banner'
import ProfileTop from '../Profile/ProfileTop'
import ProfileBottom from '../Profile/ProfileBottom'
import MainLayout from '../../Layouts/MainLayout'

const AdminProfileEdit = () => {
  return (
    <MainLayout>
      <div className="bg-[#202124] h-screen w-full flex justify-center">
        <div className="w-[95%] mt-6 flex flex-col gap-8">
          {/* banner  */}
            <Banner title={"Profile"} path1={"My Account"} path2={"Information"} icon={true} btn={"Edit Profile"}/>

          {/* Profile  */}
          <div>
            <ProfileTop/>
          
            <ProfileBottom address={"yangon"} gender={"female"} DOB={"19/12/2002"} phone={"0999999999"} 
            email={"jj@gmail.com"} position={"Sale Executive"}/>

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