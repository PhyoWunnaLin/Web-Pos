import React from "react";

const NoContact = (props) => {
  const { image, title1, title2 } = props;
  return (
    <div className="flex justify-center items-center">
      <div className=" flex-col flex gap-5 mt-20">
        <div className="w-[30%] mx-auto">
          <img
            src={image}
            className="w-full"
          />
        </div>
        <div className="flex flex-col mx-auto">
        <h1 className=" text-xl text-white font-bold tracking-wider text-center">
          {title1}
        </h1>
        <h1 className=" text-xl text-white font-bold tracking-wider text-center">
          {title2}
        </h1>
        </div>
      </div>
    </div>
  );
};

export default NoContact;
