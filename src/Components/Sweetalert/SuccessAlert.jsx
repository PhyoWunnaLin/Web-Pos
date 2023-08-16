import React from 'react'
import Swal from 'sweetalert2'
import "./successAlert.css"

const SuccessAlert = () => {
    Swal.fire({
        text: "Successfully created an account",
        icon: "success",
        confirmButtonText: "SEE ALL USERS",
        showCloseButton: true,
        color: "#fff",
        width: 400,
        background: "#202124",
    })
  return (
    <div>
        hello
    </div>
  )
}

export default SuccessAlert