import React from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router";

const Banner2 = (props) => {
  const nav = useNavigate();
  const route = () => {
    nav(props.route);
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className=" text-white font-medium text-2xl tracking-wide">
            {props.title}
          </h1>
          <p className="  text-[hsl(0,3%,76%)] tracking-wide">
            {props.path1}
            <span className="text-[#8ab4f8]"> /</span>{" "}
            {props.path2 && props.path2}
            <span className="text-[#8ab4f8]">{props.path2 && " /"}</span>{" "}
            {props.path3 && props.path3}
          </p>
        </div>

        <div className=" flex gap-3">
        {props.button1 && (
          <button onClick={props.route && route} className="btn4 flex gap-2 items-center ">
            {props.btn1 && <span className="text-[#8ab4f8]">{props.btn1}</span>}
          </button>
        )}
        {props.button2 && (
          <button onClick={props.route && route} className="btn flex gap-2 items-center border border-[#3f4245]">
            {props.icon && (
              <span className=" text-[#161618]">
                <FiPlus />
              </span>
            )}
            {props.btn2 && <span className="text-[#202124]">{props.btn2}</span>}
          </button>
        )}
        </div>
      </div>
    </div>
  );
};

export default Banner2;
