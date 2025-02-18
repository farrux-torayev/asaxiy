import React from "react";
import { NavLink } from "react-router";

const ListLeft = () => {
  return (
    <div>
      <ul className="flex w-[120px] py-[8px] px-[20px] bg-[#006BFF] text-white h-[40px] items-center gap-[10px] border rounded-[12px]">
        <li className="flex flex-col gap-[4px] w-[10px]  mt-[1.5px] ">
          <span className="w-[10px]  border"></span>
          <span className="w-[10px]   border"></span>
          <span className="w-[10px]   border"></span>
          </li>
          <li>
          <NavLink> Bo'limlar</NavLink>
          </li>
      </ul>
    </div>
  );
};

export default ListLeft;
