import React, { useEffect } from "react";
import Swal from "sweetalert2";
import "./successAlert.css";
import { useNavigate } from "react-router-dom";

const SuccessAlert = () => {
  const showAlert = () => {
    Swal.fire({
      customClass : {
        title: 'swal2-title'
      },
      title: "Successfully created an account",
      icon: "success",
      confirmButtonText: "SEE ALL USERS",
      showCloseButton: true,
      width: 400,
      background: "#202124",
    }).then((result) => {
      if (result.isConfirmed) {
        nav("/user")
      }
    })
  };

  return (
    <div></div>
  );
};

export default SuccessAlert;
