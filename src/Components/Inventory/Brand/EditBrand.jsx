import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEditBrandMutation, useGetSingleBrandQuery } from "../../../Redux/API/inventoryApi";
import { useDisclosure } from "@mantine/hooks";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { BiPlus } from "react-icons/bi";
import ModalMedia from "../../Modal/ModalMedia";
import Loader from "../../Loader/Loader";
import Swal from "sweetalert2";

const EditBrand = ({editSidebarOpen,setEditSidebarOpen,id}) => {
  const token = Cookies.get("token");
  const [editBrand] = useEditBrandMutation();
  const {data , isLoading} = useGetSingleBrandQuery({token,id})
  console.log(data?.data);
  const brand = data?.data
  const [photo, setPhoto] = useState(data?.data?.photo);
  const [name, setName] = useState(data?.data?.name);
  const [company, setCompany] = useState(data?.data?.company);
  const [agent, setAgent] = useState(data?.data?.agent);
  const [phone, setPhone] = useState(data?.data?.phone);
  const [description, setDescription] = useState(data?.data?.description);
  const [opened, { open, close }] = useDisclosure(false);
  const brandSelectImg = useSelector(
    (state) => state.mediaSlice.brandSelectImg
  );

  const showAlert2 = () => {
    Swal.fire({
      customClass: {
        title: "swal2-title",
      },
      title: "Successfully update an brand",
      icon: "success",
      confirmButtonText: "OK",
      // showCloseButton: true,
      width: 400,
      background: "#161618",
    });
  };

  const handleEditBrand = async (e) => {
    try {
      e.preventDefault();
      const newData = { photo, name, company, agent, phone, description };
      const { data } = await editBrand({ token, id, newData });
      console.log(data?.data);
      if (data?.data) {
        setEditSidebarOpen(!editSidebarOpen);
        showAlert2();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    {isLoading ? <div><Loader/></div> : <form
        onSubmit={handleEditBrand}
        className={`${
          editSidebarOpen
            ? "top-0 right-0 opacity-100"
            : " top-0 right-[-400px] opacity-0"
        } duration-500 fixed top-0 right-0 z-40 py-5 bg-[#202124] h-screen overflow-y-auto scrollbar w-[300px] px-8 border-l border-[#7E7F80] flex flex-col gap-5`}
      >
        <div
          onClick={() => setEditSidebarOpen(!editSidebarOpen)}
          className="hover:bg-[#ffffff15] duration-200 p-[3px] absolute top-2 left-2 cursor-pointer rounded"
        >
          <RxCross2 className=" text-white" />
        </div>
        <h1 className=" text-white font-bold tracking-wider text-xl mt-3">
          Update Brand
        </h1>
        {data?.data.id ? <div className="flex flex-col gap-5">
          {/* update img  */}
          {photo ? (
            <div
              onClick={open}
              className="bg-[#383C3E] w-full h-[95px] border border-dashed border-[#7E7F80] rounded-md cursor-pointer"
            >
              <div className=" flex flex-col">
                <img src={brandSelectImg ? brandSelectImg : photo} className="w-full h-[95px] rounded-md object-cover" alt="" />
              </div>
            </div>
          ) : (
            <div
              onClick={open}
              className="bg-[#383C3E] border border-dashed border-[#7E7F80] rounded-md cursor-pointer"
            >
              {brandSelectImg ? (
                <div className=" flex flex-col">
                <img src={brandSelectImg} className="w-full h-[95px] rounded-md object-cover" alt="" />
              </div>
              ):(
                <div className=" flex flex-col py-5">
                  <BiPlus className=" text-white mx-auto" size={20} />
                  <p className=" text-white font-medium tracking-wider text-center">
                    Add Image
                  </p>
                </div>
              )}
            </div>
          )}

          {/* update brand name  */}
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

          {/* update company name  */}
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

          {/* update agent  */}
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

          {/* update phone */}
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

          {/* update dec  */}
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
        </div> : <div><Loader/></div>}
        <button className="btn mt-auto">Save</button>

        <ModalMedia opened={opened} onClose={close} />
      </form>}
    </>
  );
};

export default EditBrand;
