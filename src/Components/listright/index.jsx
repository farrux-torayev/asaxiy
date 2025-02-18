import React from "react";
import { GiScales } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { NavLink } from "react-router";

const ListRight = () => {
  return (
    <div className="flex items-center">
      <ul className="flex items-center justify-center ">

        <li className="flex flex-col  items-center w-[85px] h-[41px]  hover:text-[#006BFF]">
          <GiScales />

          <NavLink> Taqqoslash</NavLink>
        </li>
        <li className="flex flex-col  items-center w-[85px] h-[41px]  hover:text-[#006BFF]">
          <img
            className="w-[18px] h-[20px]"
            src="./src/assets/icons/payment.svg"
            alt=""
          />
          <NavLink> To'lov</NavLink>
        </li>
        <li className="flex flex-col justify-center items-center w-[55px] h-[41px] hover:text-[#006BFF]">
          <TbTruckDelivery />
          <NavLink> Trek</NavLink>
        </li>
        <li className="flex flex-col justify-center items-center w-[85px] h-[41px]  hover:text-[#006BFF]">
          <IoCartOutline />
          <NavLink>Savatcha</NavLink>
        </li>
        <li className="flex flex-col justify-center items-center w-[85px] h-[41px]  hover:text-[#006BFF]">
          <IoMdHeartEmpty />
          <NavLink> Sevimlilar</NavLink>
        </li>
        <li className="flex flex-col justify-center items-center w-[85px] h-[41px]  hover:text-[#006BFF]">
          <img
            className=""
            src="./src/assets/icons/language-uz.svg"
            alt=""
          />
          <NavLink>O'zbekiston</NavLink>
        </li>
        <li className="flex flex-col justify-center items-center w-[55px] h-[41px]  hover:text-[#006BFF]">
          <CiUser />
          <NavLink>Kirish</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ListRight;
