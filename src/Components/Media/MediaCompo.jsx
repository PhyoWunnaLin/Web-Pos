import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { MdOutlineCloudUpload } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbBorderAll } from "react-icons/tb";
import MediaTable from "./MediaTable";
import MediaImage from "./MediaImage";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../Redux/Services/mediaSlice";
import { useCreatePhotoMutation, useGetPhotoQuery } from "../../Redux/API/mediaApi";
import Cookies from "js-cookie";

const MediaCompo = () => {
  const token = Cookies.get("token");
  const [createPhoto, {isLoading}] = useCreatePhotoMutation();
  const [hover,setHover] = useState(false)
  const state = useSelector((state) => state.mediaSlice.active);
  const active = localStorage.getItem("active");
  const dispatch = useDispatch();
  const [file, setFile] = useState('');
  console.log(file);

  const handleDragLeave = (e) => {
    e.preventDefault();
    setHover(false);
  }
  const handleDragOver = (e) => {
    e.preventDefault();
    setHover(true);
  };
  const handleDrop = async(e) => {
    setFile(e.dataTransfer.files);
      try{
            e.preventDefault();
            const photoData = await createPhoto({token,photo:file})
            console.log(photoData);
          }catch(error){
            console.log(error);
        }
  };
  const handleChange = async(files) => {
    console.log(files)
      try{
            const photoData = await createPhoto({token,photo:files})
            console.log(photoData);
          }catch(error){
            console.log(error);
        }
  };
  return (
    <div className="bg-[#202124] w-full flex justify-center">
      <div className="w-[95%] my-6 flex flex-col gap-8">
        {/* header  */}
        <Banner title={"Media"} path1={"Uploader"} />
        {/* Uploader  */}
        <div
          onDropCapture={handleDragLeave}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`${hover && " opacity-70"} drag w-full border border-[#7E7F80] bg-[#161618] rounded-md flex flex-col gap-8 p-10 py-14 duration-200`}
        >
          <div
            onClick={() => {
              document.querySelector(".input-field").click();
            }}
            className={`${hover && "scale-110 bg-white"} w-[120px] h-[120px] bg-[#202124] rounded-full flex justify-center items-center mx-auto cursor-pointer duration-500`}
          >
            <div className={`${hover && "border-blue-500 bg-white"} w-[85px] h-[85px] bg-[#212328] rounded-full flex justify-center items-center border-dashed border-2 border-[#7E7F80] duration-500`}>
              <MdOutlineCloudUpload size={40} className={`${hover && "animate-bounce text-blue-500"} text-[#8AB4F8]`} />
            </div>
          </div>

           <form  className="flex gap-2 justify-center items-center">
            <input
              multiple
              type="file"
              accept="image/jpg,image/jpeg"
              className="input-field"
              name="photo"
              hidden
              onChange={({ target: { files } }) => {
                files && handleChange(files);
              }}
            />
            <p
              onClick={() => {
                document.querySelector(".input-field").click();
              }}
              className=" text-[#8AB4F8] underline font-medium tracking-wider cursor-pointer"
            >
              Browse
            </p>
            <p className="text-white font-medium tracking-wider ">
              {" "}
              Drag and Image
            </p>
          </form>

        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-[#c5c1c1] tracking-wide">
            Media <span className="text-[#8AB4F8]">/</span> Uploaded Photo
          </p>
          <div className="flex">
            <button
              onClick={() => dispatch(setActive("1"))}
              className={`${
                active != "2" && "text-[#8AB4F8]"
              } flex justify-center items-center w-10 h-10 rounded-l-md border border-[#7E7F80] text-[#7E7F80]`}
            >
              <TfiMenuAlt size={20} />
            </button>
            <button
              onClick={() => dispatch(setActive("2"))}
              className={`${
                active == 2 && "text-[#8AB4F8]"
              } flex justify-center items-center w-10 h-10 rounded-r-md border-l-0 border border-[#7E7F80] text-[#7E7F80]`}
            >
              <TbBorderAll size={20} />
            </button>
          </div>
        </div>
        <div className="w-ful">
          {active == "2" ? <MediaImage /> : <MediaTable />}
        </div>
      </div>
    </div>
  );
};

export default MediaCompo;
