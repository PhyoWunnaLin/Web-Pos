import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useEditBrandMutation, useGetSingleBrandQuery } from "../../../Redux/API/inventoryApi";
import { useDisclosure } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { BiPlus } from "react-icons/bi";
import ModalMedia from "../../Modal/ModalMedia";
import Loader from "../../Loader/Loader";
import Swal from "sweetalert2";
import { setBrandEditSelectImg } from "../../../Redux/Services/mediaSlice";

const EditBrand = ({editSidebarOpen,setEditSidebarOpen,id,setId}) => {
  const token = Cookies.get("token");
  const [editBrand] = useEditBrandMutation();
  const {data , isLoading} = useGetSingleBrandQuery({token,id})
  // console.log(data?.data);
  const brand = data?.data
  const [photo, setPhoto] = useState();
  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [agent, setAgent] = useState();
  const [phone, setPhone] = useState();
  const [description, setDescription] = useState();
  const [opened, { open, close }] = useDisclosure(false);
  const brandEditSelectImg = useSelector(
    (state) => state.mediaSlice.brandEditSelectImg
  );
  // console.log(brandEditSelectImg);
  const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(setBrandEditSelectImg(null))
  // },[brandEditSelectImg])

  useEffect(() => {
    setPhoto(data?.data?.photo);
    setName(data?.data?.name);
    setCompany(data?.data?.company);
    setAgent(data?.data?.agent);
    setPhone(data?.data?.phone);
    setDescription(data?.data?.description);
  },[data])

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
      const newData = { photo:brandEditSelectImg, name, company, agent, phone, description };
      const data = await editBrand({ token, id, newData });
      console.log(data);
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
      <form
        onSubmit={handleEditBrand}
        className={`${
          editSidebarOpen
            ? "top-0 right-0 opacity-100"
            : " top-0 right-[-400px] opacity-0"
        } duration-500 fixed top-0 right-0 z-40 py-5 bg-[#202124] h-screen overflow-y-auto scrollbar w-[300px] px-8 border-l border-[#7E7F80] flex flex-col gap-5`}
      >
        <div
          onClick={() => {
            setEditSidebarOpen(!editSidebarOpen);
            setId(null);
          }}
          className="hover:bg-[#ffffff15] duration-200 p-[3px] absolute top-2 left-2 cursor-pointer rounded"
        >
          <RxCross2 className=" text-white" />
        </div>
        <h1 className=" text-white font-bold tracking-wider text-xl mt-3">
          Update Brand
        </h1>
        {data?.data?.name ? <div className="flex flex-col gap-5">
          {/* update img  */}
          {photo ? (
            <div
              onClick={open}
              className="bg-[#383C3E] w-full h-[95px] border border-dashed border-[#7E7F80] rounded-md cursor-pointer"
            >
              <div className=" flex flex-col">
                <img src={brandEditSelectImg ? brandEditSelectImg : photo} className="w-full h-[95px] rounded-md object-cover" alt="" />
              </div>
            </div>
          ) : (
            <div
              onClick={open}
              className="bg-[#383C3E] border border-dashed border-[#7E7F80] rounded-md cursor-pointer"
            >
              {brandEditSelectImg ? (
                <div className=" flex flex-col">
                <img src={brandEditSelectImg} className="w-full h-[95px] rounded-md object-cover" alt="" />
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

        <ModalMedia editSidebarOpen={editSidebarOpen} opened={opened} onClose={close} />
      </form>
    </>
  );
};

export default EditBrand;
