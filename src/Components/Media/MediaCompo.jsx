import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { MdOutlineCloudUpload } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbBorderAll } from "react-icons/tb";
import MediaTable from "./MediaTable";
import MediaImage from "./MediaImage";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../Redux/Services/mediaSlice";

const MediaCompo = () => {
  const state = useSelector((state) => state.mediaSlice.active);
  const active = localStorage.getItem("active");
  const dispatch = useDispatch();
  const [file, setFile] = useState("No Selected File");
  console.log(file);
  const handleDragOver = (e) => {
    e.preventDefault();
  }
  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0].name)
  }
  return (
    <div className="bg-[#202124] w-full flex justify-center">
      <div className="w-[95%] my-6 flex flex-col gap-8">
        {/* header  */}
        <Banner title={"Media"} path1={"Uploader"} />
        {/* Uploader  */}
        <div onDragOver={handleDragOver} onDrop={handleDrop} className="w-full border border-[#7E7F80] bg-[#161618] rounded-md flex flex-col gap-8 p-10 py-14">
          <div className="w-[120px] h-[120px] bg-[#202124] rounded-full flex justify-center items-center mx-auto">
            <div className="w-[85px] h-[85px] bg-[#212328] rounded-full flex justify-center items-center border-dashed border-2 border-[#7E7F80]">
              <MdOutlineCloudUpload size={40} className="text-[#8AB4F8]" />
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <input
              type="file"
              accept="image/*"
              className="input-field"
              hidden
              onChange={({ target: { files } }) => {
                files[0] && setFile(files[0].name);
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
          </div>
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