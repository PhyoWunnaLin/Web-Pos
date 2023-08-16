import React from 'react'
import {BiTrash} from 'react-icons/bi'
import {BsFiles} from 'react-icons/bs'
import './media.css'

const MediaTable = () => {
    const medias = [
        {id:1 , name: 12932, account: "Messi",date: 12/7/2023,time: "10:00 AM", fileSize: "2MB"},
        {id:2 , name: 12932, account: "Messi",date: 12/7/2023,time: "9:00 AM", fileSize: "2MB"},
        {id:3 , name: 12932, account: "Messi",date: 12/7/2023,time: "8:00 AM", fileSize: "2MB"},
        {id:4 , name: 12932, account: "Messi",date: 12/7/2023,time: "12:00 AM", fileSize: "2MB"},
    ]
  return (
      <table className="w-full text-white table-responsive2">
            <thead className=" tracking-wider text-sm border border-[#7E7F80]">
                <tr>
                    <th className="p-4 max-[800px]:pr-5 text-start">NO</th>
                    <th className="p-4 max-[800px]:pr-16 text-start">NAME</th>
                    <th className="p-4 max-[800px]:pr-24 text-start">ACCOUNT</th>
                    <th className="p-4 max-[800px]:pr-16 text-start">DATE</th>
                    <th className="p-4 max-[800px]:pr-16 text-start">TIME</th>
                    <th className="p-4 max-[800px]:pr-5 text-start">FILE SIZE</th>
                    <th className="p-4 ">...</th>
                </tr>
            </thead>
            <tbody className=" tracking-wide text-sm">
                {medias.map(media => {
                    return(
                        <tr key={media.id} className=" hover:bg-[#161618] duration-300  border border-[#7E7F80]">
                            <th className="p-4 text-start">{media.id}</th>
                            <th className="p-4 text-start">{media.name}</th>
                            <th className="p-4 text-start">{media.account}</th>
                            <th className="p-4 text-start">{media.date}</th>
                            <th className="p-4 text-start">{media.time}</th>
                            <th className="p-4 text-start">{media.fileSize}</th>
                            <th className="p-4 justify-center flex gap-3 items-center overflow-hidden">
                               <span className=' text-white cursor-pointer hover:text-red-500 duration-300'><BiTrash size={16}/></span> 
                               <span className=' text-white cursor-pointer hover:text-[#8AB4F8]'><BsFiles/></span> 
                            </th>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
  )
}

export default MediaTable