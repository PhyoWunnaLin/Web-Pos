import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import SuccessAlert from '../Components/Sweetalert/SuccessAlert'

const Dashboard = () => {
  return (
    <MainLayout>
      <div className=' h-screen bg-black'>
        <SuccessAlert/>
      </div>
    </MainLayout>
  )
}

export default Dashboard
