import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Components/Login/Login";
import Overview from "../Components/User/Overview";
import MyAccount from "../Components/Profile/MyAccount";
import ProfileEdit from "../Components/Profile/ProfileEdit";
import CreateUser from "../Components/User/CreateUser";

const Path = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user/overview" element={<Overview/>} />
        <Route path="/user/create" element={<CreateUser/>} />
        <Route path="/profile/myAccount" element={<MyAccount/>} />
        <Route path="/profile/edit" element={<ProfileEdit/>} />
      </Routes>
    </>
  );
};

export default Path;
