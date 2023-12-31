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
import EditProduct from "../Components/Inventory/EditProduct/EditProduct";
import Sale from "../Components/Sale/Sale";
import Recent from "../Components/Sale/Recent";
import Receive from "../Components/Sale/Receive";
import Daily from "../Components/Finance/Daily/Daily";
import Monthly from "../Components/Finance/Monthly/Monthly";
import Yearly from "../Components/Finance/Yearly/Yearly";
import Custom from "../Components/Finance/Custom/Custom";
import StockReport from "../Components/Report/StockReport";
import SaleReport from "../Components/Report/SaleReport";

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
        <Route path="/inventory/product/editProduct/:id" element={<EditProduct/>} />
        <Route path="/inventory/addProduct" element={<AddProducts/>} />
        <Route path="/inventory/stockControl" element={<Stocks/>} />
        <Route path="/inventory/brand" element={<Brands/>} />

        <Route path="/sale/cashier" element={<Sale/>} />
        <Route path="/sale/receive" element={<Receive/>} />
        <Route path="/sale/recent" element={<Recent/>} />

        <Route path="/finance/daily" element={<Daily/>} />
        <Route path="/finance/monthly" element={<Monthly/>} />
        <Route path="/finance/yearly" element={<Yearly/>} />
        <Route path="/finance/custom" element={<Custom/>} />

        <Route path="/report/stockReport" element={<StockReport/>}/>
        <Route path="/report/saleReport" element={<SaleReport/>}/>
      </Routes>
    </>
  );
};

export default Path;
