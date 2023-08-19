import React from 'react'

const AddProductStep2 = () => {
  return (
    <form className="border border-[#7E7F80] bg-[#161618] p-10 flex flex-col gap-6 w-full rounded-md">
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Actual-Price
          </label>
          <input
            type="text"
            className="input w-[70%]"
          />
        </div>
        <div className="flex justify-between gap-5">
          <label className="text-[#FFFFFF] font-medium tracking-wider">
            Sale-Price
          </label>
          <input type="text" className="input w-[70%]" />
        </div>
      </form>
  )
}

export default AddProductStep2
