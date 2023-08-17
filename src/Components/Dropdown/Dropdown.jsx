import React from "react";
import { Menu } from "@mantine/core";
import {IoIosArrowDown} from "react-icons/io"
import './dropdown.css'

const Dropdown = (props) => {
    const {name} = props
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <p className="flex justify-center items-center gap-1 text-white text-sm tracking-wide cursor-pointer">{name} <span><IoIosArrowDown className=" text-[#8bb4f6]"/></span> </p>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>Messages</Menu.Item>
        <Menu.Item>Gallery</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default Dropdown;
