import React from "react";
import Card from "../card";
import Button from "../button";
import Input from "../input";
import ListRight from "../listright";
import ListLeft from "../listleft";
import NavListBottom from "../navlistbottom";

const Navbar = () => {
  return (
    <div className="bg-white w-[1445px] m-auto  ">
      <div className=" bg-white ">
        <div className="w-[1430px] m-auto z-10 mb-[100px] fixed ">
          <div className="  flex items-center  bg-white justify-between h-[100px] ">
            <div>
              <img
                className="cursor-pointer"
                src="./src/assets/icons/asaxiy-logo.svg"
                alt=""
              />
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
