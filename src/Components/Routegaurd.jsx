import React from 'react'
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const Routegaurd = ({children}) => {
  const token = Cookies.get("token")
  if(token){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

export default Routegaurd