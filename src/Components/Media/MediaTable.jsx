import React from 'react'
import {BiTrash} from 'react-icons/bi'
import {BsFiles} from 'react-icons/bs'
import './media.css'
import { useGetPhotoQuery } from '../../Redux/API/mediaApi'
import Cookies from 'js-cookie'
import Loader from '../Loader/Loader'

const MediaTable = () => {
    const token = Cookies.get("token")
    const {data , isLoading} = useGetPhotoQuery(token);
    console.log(data?.data);
    const medias = data?.data
  return (
      <>
      {isLoading ? 
        <div className=" ">
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
                               <span className=' text-white cursor-pointer hover:text-red-500 duration-300'><BiTrash size={16}/></span> 
                               <span className=' text-white cursor-pointer hover:text-[#8AB4F8]'><BsFiles/></span> 
                            </td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>}
      </>
  )
}

export default MediaTable
