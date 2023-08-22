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
import Products from "../Components/Inventory/Product/Products";
import AddProducts from "../Components/Inventory/Product/AddProducts";
import ProductDetail from "../Components/Inventory/Product/productDetail";
import BanUser from "../Components/User/BanUser";
import Stocks from "../Components/Inventory/Stock/Stocks"
import Brands from "../Components/Inventory/Brand/Brands";
import EditUser from "../Components/User/EditUser/EditUser";

const Path = () => {
  return (
    <>
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<Routegaurd><Dashboard/></Routegaurd>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user/overview" element={<Overview/>} />
        <Route path="/user/create" element={<CreateUser/>} />
        <Route path="/user/edit" element={<EditUser/>} />
        <Route path="/user/detail/:id" element={<Detail/>} />
        <Route path="/user/ban" element={<BanUser/>} />
        <Route path="/profile/myAccount" element={<AdminProfile/>} />
        <Route path="/profile/edit" element={<AdminProfileEdit/>} />
        <Route path="/media" element={<Media/>} />
        <Route path="/inventory/products" element={<Products/>} />
        <Route path="/inventory/product/productDetail/:id" element={<ProductDetail/>} />
        <Route path="/inventory/addProduct" element={<AddProducts/>} />
        <Route path="/inventory/stockControl" element={<Stocks/>} />
        <Route path="/inventory/brand" element={<Brands/>} />
      </Routes>
    </>
  );
};

export default Path;
