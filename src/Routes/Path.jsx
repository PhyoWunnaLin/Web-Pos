import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Components/Login/Login";
import Overview from "../Components/User/Overview";
import AdminProfile from "../Components/Admin/AdminProfile";
import AdminProfileEdit from "../Components/Admin/AdminProfileEdit";
import CreateUser from "../Components/User/CreateUser";
import Media from "../Pages/Media";
import ScrollTop from "../Components/ScrollTop/ScrollTop";
import Detail from "../Components/User/Detail";
import Routegaurd from "../Components/Routegaurd";

const Path = () => {
  return (
    <>
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<Routegaurd><Dashboard/></Routegaurd>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user/overview" element={<Overview/>} />
        <Route path="/user/create" element={<CreateUser/>} />
        <Route path="/user/detail" element={<Detail/>} />
        <Route path="/profile/myAccount" element={<AdminProfile/>} />
        <Route path="/profile/edit" element={<AdminProfileEdit/>} />
        <Route path="/media" element={<Media/>} />
      </Routes>
    </>
  );
};

export default Path;
