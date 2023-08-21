import Cookies from "js-cookie";
import React from "react";
import { useGetPhotoQuery } from "../../Redux/API/mediaApi";
import ImageLoader from "../Loader/ImageLoader";

const MediaImage = () => {
  const token = Cookies.get("token");
  const { data ,isLoading } = useGetPhotoQuery(token);
  const images = data?.data;
  
  return (
    <>
    {isLoading ? <div className="-mt-20 h-[100px]"><ImageLoader/></div> : 
    <div className="flex gap-5 flex-wrap">
      {images?.map((image) => {
        return (
          <div key={image?.id} className="w-[200px] h-[200px] rounded-md">
            <img
              src={image?.url}
              className=" w-full h-full rounded-md object-cover"
            />
          </div>
        );
      })}
    </div>}
    </>
  );
};

export default MediaImage;
