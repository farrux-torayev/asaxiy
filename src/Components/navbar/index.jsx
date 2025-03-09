import React from "react";
import Button from "../button";
import Input from "../input";
import ListRight from "../listright";
import ListLeft from "../listleft";
import NavListBottom from "../navlistbottom";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-white w-[1520px] m-auto   ">
      <div className=" bg-white ">
        <div className="w-[1520px] m-auto z-10 fixed">
          <div className="  flex items-center  bg-white justify-between h-[100px] ">
            <div>
              <NavLink to="/">
                <img
                  className="cursor-pointer"
                  src="./src/assets/icons/asaxiy-logo.svg"
                  alt=""
                />
              </NavLink>
            </div>
            <ListLeft />
            <div className="flex items-center">
              <Input />
              <Button />
            </div>
            <ListRight />
          </div>
          <NavListBottom />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
