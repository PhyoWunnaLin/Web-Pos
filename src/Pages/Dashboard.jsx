import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import ModalMedia from '../Components/Modal/ModalMedia'

const Dashboard = () => {
  return (
    <MainLayout>
      <SuccessAlert/>
      <ModalMedia/>
    </MainLayout>
  )
}

export default Dashboard
