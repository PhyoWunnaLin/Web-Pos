import Cookies from "js-cookie";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import { useCreateBrandMutation } from "../../../Redux/API/inventoryApi";

const AddBrand = ({ open, setOpen }) => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [agent, setAgent] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const token = Cookies.get("token");
  const [createBrand] = useCreateBrandMutation();

  const showAlert = () => {
    Swal.fire({
      customClass : {
        title: 'swal2-title'
      },
      title: "Successfully created an brand",
      icon: "success",
      confirmButtonText: "OK",
      // showCloseButton: true,
      width: 400,
      background: "#161618",
    })
  };

  const reset = () => {
    setPhoto("")
    setName("")
    setCompany("")
    setAgent("")
    setPhone("")
    setDescription("")
  }

  const handleCreateBrand = async (e) => {
    try {
      e.preventDefault();
      const newData = {photo,name,company,agent,phone,description};
      const {data} = await createBrand({token,newData});
      console.log(data?.data)
      if(data?.data){
        reset();
        setOpen(!open);
        showAlert();
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={handleCreateBrand}
      className={`${
        open ? "top-0 right-0 opacity-100" : " top-0 right-[-400px] opacity-0"
      } duration-500 fixed top-0 right-0 z-40 py-5 bg-[#202124] h-screen overflow-y-auto scrollbar w-[300px] px-8 border-l border-[#7E7F80] flex flex-col gap-5`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="hover:bg-[#ffffff15] duration-200 p-[3px] absolute top-2 left-2 cursor-pointer rounded"
      >
        <RxCross2 className=" text-white" />
      </div>
      <h1 className=" text-white font-bold tracking-wider text-xl mt-3">
        Add New Brand
      </h1>
      <div className="flex flex-col gap-5">
        <div
          onClick={() => {
            document.querySelector(".input-field").click();
          }}
          className="bg-[#383C3E] py-5 border border-dashed border-[#7E7F80] rounded-md cursor-pointer"
        >
          <div className=" flex flex-col">
            <input
              value={photo}
              multiple
              type="file"
              accept="image/jpg,image/jpeg"
              className="input-field"
              hidden
              onChange={({ target: { files } }) => {
                files && setPhoto(files);
              }}
            />
            <BiPlus className=" text-white mx-auto" size={20} />
            <p className=" text-white font-medium tracking-wider text-center">
              Add Image
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Brand Name
          </label>
          <input required value={name} onChange={e => setName(e.target.value)} type="text" className="input" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Company Name
          </label>
          <input required value={company} onChange={e => setCompany(e.target.value)} type="text" className="input" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Agent
          </label>
          <input required value={agent} onChange={e => setAgent(e.target.value)} type="text" className="input" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Phone
          </label>
          <input required value={phone} onChange={e => setPhone(e.target.value)} type="number" className="input" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Description
          </label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} className="input" cols="30" rows="3"></textarea>
        </div>
      </div>
      <button className="btn mt-auto">Save</button>
    </form>
  );
};

export default AddBrand;
