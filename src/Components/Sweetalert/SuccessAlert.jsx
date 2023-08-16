import React, { useEffect } from "react";
import Swal from "sweetalert2";
import "./successAlert.css";

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
    });
  };

  return (
    <div>
      <button onClick={showAlert} className="btn">Show Alert</button>
    </div>
  );
};

export default SuccessAlert;
