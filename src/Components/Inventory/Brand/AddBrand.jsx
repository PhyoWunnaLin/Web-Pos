import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import {
  useCreateBrandMutation,
  useEditBrandMutation,
  useGetBrandsQuery,
} from "../../../Redux/API/inventoryApi";
import { useDispatch, useSelector } from "react-redux";
import { setBrands } from "../../../Redux/Services/productSlice";
import ModalMedia from "../../Modal/ModalMedia";
import { useDisclosure } from "@mantine/hooks";
import Sidebar from "../../Sidebar/Sidebar";

const AddBrand = ({ sidebarOpen, setSidebarOpen, id }) => {
  const token = Cookies.get("token");
  const [createBrand] = useCreateBrandMutation();
  const [editBrand] = useEditBrandMutation();
  // const { data ,isLoading } = useGetSingleBrandQuery({ token, id });
  const { data, isLoading } = useGetBrandsQuery(token);
  // console.log(data);
  // console.log(id);
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.productSlice.brands);
  const singleBrand = brands?.filter((brand) => brand?.id == id);
  // console.log(singleBrand[0].photo);
  const [photo, setPhoto] = useState();
  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [agent, setAgent] = useState();
  const [phone, setPhone] = useState();
  const [description, setDescription] = useState();
  const [opened, { open, close }] = useDisclosure(false);
  const brandSelectImg = useSelector(
    (state) => state.mediaSlice.brandSelectImg
  );

  const showAlert = () => {
    Swal.fire({
      customClass: {
        title: "swal2-title",
      },
      title: "Successfully created an brand",
      icon: "success",
      confirmButtonText: "OK",
      // showCloseButton: true,
      width: 400,
      background: "#161618",
    });
  };

  const reset = () => {
    setPhoto("");
    setName("");
    setCompany("");
    setAgent("");
    setPhone("");
    setDescription("");
  };

  const handleCreateBrand = async (e) => {
    try {
      e.preventDefault();
      const newData = {
        photo: brandSelectImg,
        name,
        company,
        agent,
        phone,
        description,
      };
      const { data } = await createBrand({ token, newData });
      console.log(data?.data);
      if (data?.data) {
        reset();
        setSidebarOpen(!sidebarOpen);
        showAlert();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleCreateBrand}
      className={`${
        sidebarOpen
          ? "top-0 right-0 opacity-100"
          : " top-0 right-[-400px] opacity-0"
      } duration-500 fixed top-0 right-0 z-40 py-5 bg-[#202124] h-screen overflow-y-auto scrollbar w-[300px] px-8 border-l border-[#7E7F80] flex flex-col gap-5`}
    >
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="hover:bg-[#ffffff15] duration-200 p-[3px] absolute top-2 left-2 cursor-pointer rounded"
      >
        <RxCross2 className=" text-white" />
      </div>
      <h1 className=" text-white font-bold tracking-wider text-xl mt-3">
        Add New Brand
      </h1>
      <div className="flex flex-col gap-5">
        {brandSelectImg ? (
          <div
            onClick={open}
            className="bg-[#383C3E] w-full h-[95px] border border-dashed border-[#7E7F80] rounded-md cursor-pointer"
          >
            <div className=" flex flex-col">
              <img
                src={brandSelectImg}
                className="w-full h-[95px] rounded-md object-cover"
                alt=""
              />
            </div>
          </div>
        ) : (
          <div
            onClick={open}
            className="bg-[#383C3E] py-5 border border-dashed border-[#7E7F80] rounded-md cursor-pointer"
          >
            <div className=" flex flex-col">
              <BiPlus className=" text-white mx-auto" size={20} />
              <p className=" text-white font-medium tracking-wider text-center">
                Add Image
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Brand Name
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Company Name
          </label>
          <input
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            className="input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Agent
          </label>
          <input
            required
            value={agent}
            onChange={(e) => setAgent(e.target.value)}
            type="text"
            className="input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Phone
          </label>
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            className="input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input"
            cols="30"
            rows="3"
          ></textarea>
        </div>
      </div>
      <button className="btn mt-auto">Save</button>
      <ModalMedia opened={opened} onClose={close} />
    </form>
  );
};

export default AddBrand;
