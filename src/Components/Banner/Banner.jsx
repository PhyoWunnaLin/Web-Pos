import React from 'react'
import {FiPlus} from "react-icons/fi"

const Banner = (props) => {
  return (
    <div>
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
                <h1 className=" text-white font-medium text-2xl tracking-wide">{props.title}</h1>
                <p className=" text-sm text-[hsl(210,1%,50%)] font-medium tracking-wide">{props.title} <span className="text-[#8AB4F8]">/</span> {props.path}</p>
            </div>
            <button className="btn flex gap-2 items-center">
               {props.icon && <span><FiPlus/></span>}
                Create User
            </button>
        </div>
    </div>
  )
}

export default Banner