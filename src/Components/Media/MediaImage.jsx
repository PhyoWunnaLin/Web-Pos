import Cookies from "js-cookie";
import React from "react";
import { useGetPhotoQuery } from "../../Redux/API/mediaApi";
import ImageLoader from "../Loader/ImageLoader";
import NoContact from "../NoContact/NoContact";

const MediaImage = () => {
  const token = Cookies.get("token");
  const { data ,isLoading } = useGetPhotoQuery(token);
  const images = data?.data;
  
  return (
    <>
    {images?.length == 0 ? (
       <div className=" mt-[-80px]">
       <NoContact image={"https://img.freepik.com/free-icon/picture_318-830480.jpg?size=626&ext=jpg&uid=R50931742&ga=GA1.2.1281172008.1669966802&semt=ais"} size={"w-[20%]"} title1={"No Photo !"} title2={"Please Upload Photo"} />
      </div>
    ) : (
      <div>
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
      </div>
    )}
    
    </>
  );
};

export default MediaImage;
