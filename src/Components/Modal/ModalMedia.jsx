import React, {useState} from 'react'
import { MdOutlineCloudUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSelectActive, setOnclickActive } from '../../Redux/Services/mediaSlice';
import "./modalMedia.css"
import { Modal} from '@mantine/core';
import { useGetPhotoQuery } from '../../Redux/API/mediaApi';
import Cookies from 'js-cookie';
import ImageLoader from '../Loader/ImageLoader';
// import { useDisclosure } from '@mantine/hooks';

const ModalMedia = (props) => {
    const token = Cookies.get("token")
    const {data, isLoading} = useGetPhotoQuery(token);
    const mediaData = data?.data
    console.log(mediaData);

    const dispatch = useDispatch();
    const selectActive = useSelector((state) => state.mediaSlice.selectActive);
    const onclickActive = useSelector((state) => state.mediaSlice.onclickActive);
    // console.log(selectActive);

    const [file, setFile] = useState("No Selected File");
    const handleDragOver = (e) => {
        e.preventDefault();
    }
    const handleDrop = (e) => {
        e.preventDefault();
        setFile(e.dataTransfer.files[0].name)
    }

    // const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
        <Modal.Root opened={props.opened} onClose={props.onClose} size={"65%"} centered>
            <Modal.Overlay/>
            <Modal.Content>
                <Modal.Header>
                    <Modal.Title>Select an image</Modal.Title>
                    <Modal.CloseButton></Modal.CloseButton>
                </Modal.Header>

                <Modal.Body>
                    {isLoading ? (
                        <div className=' h-[278px]'>
                            <div className=' mt-[150px]'>
                            <ImageLoader/>
                            </div>
                        </div>
                    ) : (
                        <div className=' ml-8'>
                        <div className=' bg-[#202124] pt-10 pb-12 flex flex-col gap-5'>
                        <div className=' flex flex-wrap item-center gap-5 mx-auto'>
                        {/* upload      */}
                        <div onDragOver={handleDragOver} onDrop={handleDrop}
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
                        onChange={({ target: { files } }) => {
                            files[0] && setFile(files[0].name);
                        }}
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
                                <div onClick={()=> dispatch(setOnclickActive(img.id))} 
                                onMouseEnter={()=> dispatch(setSelectActive(img.id))} 
                                key={img.id} className={`
                                ${selectActive == img.id && " hover:border-opacity-100" }
                                ${onclickActive == img.id && "modal-active border-opacity-100"}
                                rounded border-2 border-blue-600 border-opacity-0`}>
                                    <img src={img.url} alt="" className=' rounded w-[161px] h-[161px] object-cover ' />
                                </div>
                            )
                        })}
                        </div>
        
                        {onclickActive && (
                            <div className='flex justify-end'>
                            <button className=' btn'>INSERT</button>
                        </div>
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