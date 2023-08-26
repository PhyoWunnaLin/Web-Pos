import React from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router";

const Banner = (props) => {
  const nav = useNavigate();
  const route = () => {
    nav(props.route);
  }
  return (
    <div>
      <div className="flex max-[520px]:flex-col  max-[520px]:gap-5 max-[520px]:items-start justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className=" text-white font-medium text-2xl tracking-wide">
            {props.title}
          </h1>
          <p className="  text-[hsl(0,3%,76%)] tracking-wide">
            {props.title}
            <span className="text-[#8ab4f8]"> /</span>{" "}
            {props.path1 && props.path1}
            <span className="text-[#8ab4f8]">{props.path2 && " /"}</span>{" "}
            {props.path2 && props.path2}
          </p>
        </div>
        {props.button && (
          <button onClick={props.route && route} className="btn flex gap-2 items-center border border-[#3f4245]">
            {props.icon && (
              <span className=" text-[#161618]">
                <FiPlus />
              </span>
            )}
            {props.btn && <span className="text-[#202124]">{props.btn}</span>}
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
