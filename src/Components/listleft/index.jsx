import React from "react";
import { NavLink } from "react-router";

const ListLeft = () => {
  return (
    <div>
      <ul className="flex w-[120px] py-[8px] px-[15px] bg-[#006BFF] text-white h-[40px] items-center gap-[10px] border rounded-[12px]">
        <li className="flex flex-col gap-[2px] w-[15px]  mt-[1.5px] ">
          <span className="w-[18px]  border cursor-pointer"></span>
          <span className="w-[18px] mt-[1px]  border cursor-pointer"></span>
          <span className="w-[18px] mt-[1.2px]  border cursor-pointer"></span>
          </li>
          <li>
          <NavLink> Bo'limlar</NavLink>
          </li>
      </ul>
    </div>
  );
};

export default ListLeft;
