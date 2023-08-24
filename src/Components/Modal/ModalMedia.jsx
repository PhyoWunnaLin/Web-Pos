import React, {useState, useEffect} from 'react'
import { MdOutlineCloudUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSelectActive, setOnclickActive,setPdSelectImg, setInsert, setUserSelectImg, setAdminSelectImg, setPdEditSelectImg, setBrandSelectImg, setBrandEditSelectImg } from '../../Redux/Services/mediaSlice';
import "./modalMedia.css"
import { Modal} from '@mantine/core';
import { useCreatePhotoMutation, useGetPhotoQuery } from '../../Redux/API/mediaApi';
import Cookies from 'js-cookie';
import ImageLoader from '../Loader/ImageLoader';
import Swal from 'sweetalert2';
import { useLocation, useParams } from 'react-router-dom';
// import { useDisclosure } from '@mantine/hooks';

const ModalMedia = (props) => {
    const token = Cookies.get("token")
    const {data} = useGetPhotoQuery(token);
    const mediaData = data?.data
    const [createPhoto, {isLoading}] = useCreatePhotoMutation();
    const location = useLocation()
    const path = location.pathname
    const {id} = useParams()
    // console.log(id);
    // console.log(path == `/inventory/product`)

    const dispatch = useDispatch();
    const selectActive = useSelector((state) => state.mediaSlice.selectActive);
    const onclickActive = useSelector((state) => state.mediaSlice.onclickActive);
    // console.log(props);

    const handleSubmit = async (files) => {
        // console.log(files);
        const photos = new FormData();
        for (let i = 0 ; i < files.length; i++){
          photos.append("photos[]",files[i],files[i].name);
        }
    
        const data = await createPhoto({token,photos});
        console.log(data);
        
        if(data?.data?.message){
          Swal.fire({
            customClass: {
              title: "swal2-title",
            },
            title: "Successfully upload photo",
            icon: "success",
            confirmButtonText: "OK",
            // showCloseButton: true,
            width: 400,
            background: "#161618",
          });
        }
    
      }

    const [selectedImage, setSelectedImage] = useState(null);

    const selectImgHandler = (id, url) => {
        if (selectedImage === url) {
            setSelectedImage(null); // Deselect the image if it's already selected
        } else {
            setSelectedImage(url); // Select the clicked image
            dispatch(setOnclickActive(id)); // Activate onclickActive for the clicked image
        }
    }

    const insertImageHandler = () => {
        if(path == "/inventory/addProduct") {
            dispatch(setPdSelectImg(selectedImage)); // Set the selected image in the Redux store
            dispatch(setInsert(true)); // Insert the selected image
        }else if(path == "/user/create"){
            dispatch(setUserSelectImg(selectedImage)); 
            dispatch(setInsert(true)); 
        }else if(path == "/profile/edit"){
            dispatch(setAdminSelectImg(selectedImage)); 
            dispatch(setInsert(true));    
        }else if(path == `/inventory/product/editProduct/${id}`){
            dispatch(setPdEditSelectImg(selectedImage)); 
            dispatch(setInsert(true));    
        }else if(path == `/inventory/brand`){
            dispatch(setBrandSelectImg(selectedImage)); 
            dispatch(setInsert(true));    
        }
    }


    useEffect(()=>{
        if(props.opened){
            dispatch(setOnclickActive(null))
        }
    },[props.opened])

    // const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
        <Modal.Root opened={props.opened} onClose={props.onClose} size={"65%"} centered>
            <Modal.Overlay/>
            <Modal.Content>
                <Modal.Header>
                    <Modal.Title>Select an image</Modal.Title>
                    <Modal.CloseButton>
                    </Modal.CloseButton>
                </Modal.Header>

                <Modal.Body>
                    {isLoading ? (
                        <div className=' h-[278px]'>
                            <div className=' mt-[150px]'>
                            <ImageLoader/>
                            </div>
                        </div>
                    ) : (
                        <div className=' ml-6'>
                        <div className=' bg-[#202124] pt-10 pb-12 flex flex-col gap-5'>
                        <div className=' flex flex-wrap item-center gap-5 mx-auto'>
                        {/* upload      */}
                        <div
                        className=" border border-[#3f4245] bg-[#161618] rounded-md flex flex-col justify-center items-center gap-3 w-[161px] h-[161px]">
                    <div
                    onClick={() => {
                        document.querySelector(".input-field").click();
                    }}
                    className="cursor-pointer w-[60px] h-[60px] bg-[#202124] rounded-full flex justify-center items-center mx-auto">
                        <div className="w-[40px] h-[40px] bg-[#212328] rounded-full flex justify-center items-center border-dashed border-2 border-[#7E7F80]">
                        <MdOutlineCloudUpload size={25} className="text-[#8AB4F8]" />
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <input
                        type="file"
                        accept="image/*"
                        className="input-field"
                        hidden
                        onChange={(e) => handleSubmit([...e.target.files])}
                        />
                        <p
                        onClick={() => {
                            document.querySelector(".input-field").click();
                        }}
                        className=" text-[#8AB4F8] text-[15px] underline font-medium tracking-wider cursor-pointer"
                        >
                        Upload
                        </p>
                        <p className="text-white text-[15px] font-medium tracking-wider ">
                        {" "}
                        Image
                        </p>
                    </div>
                        </div>
        
                        {/* img  */}
                        {mediaData?.map(img => {
                            return(
                                <div onClick={()=> selectImgHandler(img?.id,img?.url)} 
                                onMouseEnter={()=> dispatch(setSelectActive(img?.id))} 
                                key={img?.id} className={`
                                ${selectActive == img?.id && " hover:border-opacity-100" }
                                ${onclickActive == img?.id && onclickActive != null?"modal-active border-opacity-100" : ""}
                                rounded border-2 border-blue-600 border-opacity-0`}>
                                    <img src={img?.url} alt="" className=' cursor-pointer rounded w-[161px] h-[161px] object-cover ' />
                                </div>
                            )
                        })}
                        </div>
        
                        {onclickActive && (
                                <Modal.CloseButton>
                            <div className=' mr-28 mt-5'>
                                <button onClick={insertImageHandler} className=' btn text-black'>INSERT</button>

                            </div>
                                </Modal.CloseButton>
                        )}
                    </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal.Content>

        </Modal.Root>
    </>
  )
}

export default ModalMedia