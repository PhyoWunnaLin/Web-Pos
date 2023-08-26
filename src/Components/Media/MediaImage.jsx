import Cookies from "js-cookie";
import React from "react";
import {
  useDeletePhotoMutation,
  useGetPhotoQuery,
} from "../../Redux/API/mediaApi";
import ImageLoader from "../Loader/ImageLoader";
import NoContact from "../NoContact/NoContact";
import { BiTrash } from "react-icons/bi";
import { BsFiles } from "react-icons/bs";
import "./media.css";
import Swal from "sweetalert2";
import { Toaster, toast } from "react-hot-toast";

const MediaImage = () => {
  const token = Cookies.get("token");
  const { data, isLoading } = useGetPhotoQuery(token);
  const [deletePhoto] = useDeletePhotoMutation();
  const images = data?.data;

  const handleDeletePhoto = (id) => {
    Swal.fire({
      title: "Do you want to delete this photo?",
      icon: "warning",
      iconColor: "#E64848",
      background: "#161618",
      showCancelButton: true,
      // showCloseButton: true,
      confirmButtonColor: "#E64848",
      cancelButtonColor: "#24262b",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = await deletePhoto({ token, id });
        console.log(data);
        if (data?.data?.message) {
          Swal.fire({
            customClass: {
              title: "swal2-title",
              popup: "custom-swal-popup",
            },
            title: "Successfully delete a photo",
            icon: "success",
            confirmButtonText: "OK",
            // showCloseButton: true,
            width: 400,
            background: "#161618",
          });
        }
      }
    });
  };

  const handleCopyImageUrl = (url) => {
    navigator.clipboard.writeText(url);
    toast.success("Copied Image Link!", {
      duration: 2000,
      position: "bottom-center",
      style:{backgroundColor:"#161618",color:"white"},
    });
  };

  return (
    <>
    <Toaster/>
      {images?.length == 0 ? (
        <div className=" mt-[-80px]">
          <NoContact
            image={
              "https://img.freepik.com/free-icon/picture_318-830480.jpg?size=626&ext=jpg&uid=R50931742&ga=GA1.2.1281172008.1669966802&semt=ais"
            }
            size={"w-[20%]"}
            title1={"No Photo !"}
            title2={"Please Upload Photo"}
          />
        </div>
      ) : (
        <div>
          {isLoading ? (
            <div className="-mt-20 h-[100px]">
              <ImageLoader />
            </div>
          ) : (
            <div className="flex gap-5 flex-wrap">
              {images?.map((image) => {
                return (
                  <div
                    key={image?.id}
                    className="img-div w-[200px] h-[200px] rounded-md relative hover:opacity-80 duration-300 cursor-pointer"
                  >
                    <img
                      src={image?.url}
                      className=" w-full h-full rounded-md object-cover"
                    />
                    <div className="img-icon flex gap-2 absolute bottom-2 right-2">
                      <div
                        onClick={() => handleDeletePhoto(image?.id)}
                        className="h-8 w-10 flex justify-center items-center bg-[#ffffffd2] rounded-md"
                      >
                        <BiTrash size={18} />
                      </div>
                      <div
                        onClick={() => handleCopyImageUrl(image?.url)}
                        className="h-8 w-10 flex justify-center items-center bg-[#ffffffd2] rounded-md"
                      >
                        <BsFiles size={18} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MediaImage;
