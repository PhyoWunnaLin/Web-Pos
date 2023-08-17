import React, {useState} from 'react'
import { MdOutlineCloudUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSelectActive, setOnclickActive } from '../../Redux/Services/mediaSlice';
import "./modalMedia.css"
import { Modal, Group, Button} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const ModalMedia = () => {
    const dispatch = useDispatch();
    const selectActive = useSelector((state) => state.mediaSlice.selectActive);
    const onclickActive = useSelector((state) => state.mediaSlice.onclickActive);
    // console.log(selectActive);

    const img = [
        {id:1, name:"https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"},
        {id:2, name:"https://i.pinimg.com/236x/75/40/b6/7540b6d9503c380a18543ab1ac1bccab.jpg"},
        {id:3, name:"https://i.pinimg.com/736x/68/07/6e/68076e6a34e040275afc7ef113a170b4.jpg"},
        {id:4, name:"https://i.pinimg.com/236x/2f/04/cc/2f04cc25c1f63ba7672a117ad07e0225.jpg"},
        {id:5, name:"https://i.pinimg.com/236x/bf/35/8e/bf358e7abd98a6e98e4b93500906f6e0.jpg"},
        {id:6, name:"https://i.pinimg.com/236x/bf/35/8e/bf358e7abd98a6e98e4b93500906f6e0.jpg"},
    ]

    const [file, setFile] = useState("No Selected File");
    const handleDragOver = (e) => {
        e.preventDefault();
    }
    const handleDrop = (e) => {
        e.preventDefault();
        setFile(e.dataTransfer.files[0].name)
    }

    const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
        <Modal.Root opened={opened} onClose={close} size={"65%"}>
            <Modal.Overlay/>
            <Modal.Content>
                <Modal.Header>
                    <Modal.Title>Select an image</Modal.Title>
                    <Modal.CloseButton></Modal.CloseButton>
                </Modal.Header>

                <Modal.Body>
                <div className=' ml-8'>
                <div className=' bg-[#202124] pt-10 pb-12 flex flex-col gap-5'>
                <div className=' flex flex-wrap item-center gap-5 mx-auto'>
                {/* upload      */}
                <div onDragOver={handleDragOver} onDrop={handleDrop} className=" border border-[#3f4245] bg-[#161618] rounded-md flex flex-col justify-center items-center gap-3 w-[161px] h-[161px]">
            <div className="w-[60px] h-[60px] bg-[#202124] rounded-full flex justify-center items-center mx-auto">
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
                {img.map(img => {
                    return(
                        <div onClick={()=> dispatch(setOnclickActive(img.id))} 
                        onMouseEnter={()=> dispatch(setSelectActive(img.id))} 
                        // onMouseOut={()=> dispatch(setSelectActive(null))} 
                        key={img.id} className={`
                        ${selectActive == img.id && " hover:border-opacity-100" }
                        ${onclickActive == img.id && "modal-active border-opacity-100"}
                        rounded border-2 border-blue-600 border-opacity-0`}>
                            <img src={img.name} alt="" className=' rounded w-[161px] h-[161px] object-cover ' />
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
                </Modal.Body>
            </Modal.Content>

        </Modal.Root>
    <Group position="center">
        <Button onClick={open}>Open centered Modal</Button>
      </Group>
    </>
  )
}

export default ModalMedia