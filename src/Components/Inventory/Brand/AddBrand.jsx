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

const AddBrand = ({ open, setOpen, id }) => {

  const token = Cookies.get("token");
  const [createBrand] = useCreateBrandMutation();
  const [editBrand] = useEditBrandMutation();
  // const { data ,isLoading } = useGetSingleBrandQuery({ token, id });
  const { data ,isLoading } = useGetBrandsQuery(token)
  // console.log(data);
  // console.log(id);
  const dispatch = useDispatch()
  const brands = useSelector(state => state.productSlice.brands) 
  const singleBrand = brands?.filter(brand => brand?.id == id)
  console.log(singleBrand);
  const [photo, setPhoto] = useState(id == null ? "" : data?.data?.photo);
  const [name, setName] = useState(id == null ? "" : data?.data?.name);
  const [company, setCompany] = useState(id == null ? "" : data?.data?.company);
  const [agent, setAgent] = useState(id == null ? "" : data?.data?.agent);
  const [phone, setPhone] = useState(id == null ? "" : data?.data?.phone);
  const [description, setDescription] = useState(id == null ? "" : data?.data?.description);

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
      const newData = { photo, name, company, agent, phone, description };
      const { data } = await createBrand({ token, newData });
      console.log(data?.data);
      if (data?.data) {
        reset();
        setOpen(!open);
        showAlert();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        setOpen(!open);
        showAlert2();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (id == null) {
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
      </form>
    );
  } else if(id != null) {
    return (
          <form
          onSubmit={handleEditBrand}
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
            Update Brand
          </h1>
          <div className="flex flex-col gap-5">
              {/* update img  */}
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
    
              {/* update brand name  */}
            <div className="flex flex-col gap-2">
              <label className="text-[#FFFFFF] font-medium tracking-wider">
                Brand Name
              </label>
              <input
                required
                value={singleBrand[0]?.name}
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
                value={singleBrand[0]?.company}
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
                value={singleBrand[0]?.agent}
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
                value={singleBrand[0]?.phone}
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
                value={singleBrand[0]?.description}
                onChange={(e) => setDescription(e.target.value)}
                className="input"
                cols="30"
                rows="3"
              ></textarea>
            </div>
          </div>
          <button className="btn mt-auto">Save</button>
          </form>
    );
  }
};

export default AddBrand;
