import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import ProfileFormBottom from '../Components/Profile/ProfileFormBottom'

const Dashboard = () => {
  return (
    <MainLayout>
      <div className=' h-screen bg-black'>
        <ProfileFormBottom/>
      </div>
    </MainLayout>
  )
}

export default Dashboard
