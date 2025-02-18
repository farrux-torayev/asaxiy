import React from "react";
import Card from "../card";
import Button from "../button";
import Input from "../input";
import ListRight from "../listright";
import ListLeft from "../listleft";

const Navbar = () => {
  return (
    <div className=" fixed">
      <div className=" w-[1300px] m-auto flex items-center justify-between h-[78px] relative bg-white">
        <div>
          <img src="./src/assets/icons/asaxiy-logo.svg" alt="" />
        </div>
        <ListLeft />
        <div className="flex items-center">
          <Input />
          <Button />
        </div>
        <ListRight />
      </div>
    </div>
  );
};

export default Navbar;
