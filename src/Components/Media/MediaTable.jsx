import React from 'react'
import {BiTrash} from 'react-icons/bi'
import {BsFiles} from 'react-icons/bs'
import './media.css'
import { useDeletePhotoMutation, useGetPhotoQuery } from '../../Redux/API/mediaApi'
import Cookies from 'js-cookie'
import Loader from '../Loader/Loader'
import NoContact from '../NoContact/NoContact'
import Swal from 'sweetalert2'

const MediaTable = () => {
    const token = Cookies.get("token")
    const {data , isLoading} = useGetPhotoQuery(token);
    const [deletePhoto] = useDeletePhotoMutation();
    console.log(data?.data);
    const medias = data?.data

    const handleDeletePhoto = (id) => {
        Swal.fire({
          title: 'Do you want to delete this photo?',
          icon: 'warning',
          iconColor: "#E64848",
          background: "#161618",
          showCancelButton: true,
          // showCloseButton: true,
          confirmButtonColor: '#E64848',
          cancelButtonColor: '#24262b',
          confirmButtonText: 'Delete'
        }).then(async(result) => {
          if (result.isConfirmed) {
            const data = await deletePhoto({token,id})
            console.log(data);
            if(data?.data?.message){
              Swal.fire({
                customClass : {
                  title: 'swal2-title',
                  popup: 'custom-swal-popup'
                },
                title: "Successfully delete a photo",
                icon: "success",
                confirmButtonText: "OK",
                // showCloseButton: true,
                width: 400,
                background: "#161618",
              })
            }
            
          }
        })
      }

  return (
      <>
      {medias?.length == 0 ? (
        <div className=" mt-[-80px]">
        <NoContact image={"https://img.freepik.com/free-icon/picture_318-830480.jpg?size=626&ext=jpg&uid=R50931742&ga=GA1.2.1281172008.1669966802&semt=ais"} size={"w-[20%]"} title1={"No Photo !"} title2={"Please Upload Photo"} />
       </div>
      ) : (
        <div>
        {isLoading ? 
            <div className='-mt-20 mb-8'>
                <Loader/>
            </div> : 
    
            <table className="w-full text-white table-responsive2">
                <thead className=" tracking-wider text-sm border border-[#7E7F80]">
                    <tr className='select-none'>
                        <th className="p-4 max-[800px]:pr-5 text-start">NO</th>
                        <th className="p-4 max-[800px]:pr-16 text-start">NAME</th>
                        <th className="p-4 max-[800px]:pr-24 text-start">ACCOUNT</th>
                        <th className="p-4 max-[800px]:pr-16 text-end">UPDATED AT</th>
                        <th className="p-4 max-[800px]:pr-16 text-end">CREATED AT</th>
                        <th className="p-4 max-[800px]:pr-5 text-end">FILE SIZE</th>
                        <th className="p-4 ">...</th>
                    </tr>
                </thead>
                <tbody className=" tracking-wide text-sm">
                    {medias?.map(media => {
                        return(
                            <tr key={media?.id} className=" hover:bg-[#161618] select-none duration-300  border border-[#7E7F80]">
                                <td className="p-4 text-start">{media?.id}</td>
                                <td className="p-4 text-start">{media?.name}</td>
                                <td className="p-4 text-start">{media?.user_name}</td>
                                <td className="p-4 text-end">{media?.updated_at}</td>
                                <td className="p-4 text-end">{media?.created_at}</td>
                                <td className="p-4 text-end">{media?.size}</td>
                                <td className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                                   <span onClick={() => handleDeletePhoto(media?.id)} className=' text-white cursor-pointer hover:text-red-500 duration-300'><BiTrash size={16}/></span> 
                                   <span className=' text-white cursor-pointer hover:text-[#8AB4F8]'><BsFiles/></span> 
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>}
        </div>
      )}
      </>
  )
}

export default MediaTable
