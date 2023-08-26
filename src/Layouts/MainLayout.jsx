import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'

const MainLayout = ({children}) => {
  return (
    <>
    <div className=' flex'>
        <div>
            <Sidebar/>
        </div>

        <div className=' w-full ml-[209px] max-lg:ml-0 mt-[53px]'>
            {children}
        </div>
    </div>
    </>
  )
}

export default MainLayout