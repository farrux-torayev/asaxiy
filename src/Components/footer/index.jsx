import React from "react";
import { NavLink } from "react-router";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import FooterTop from "../footertop";

const Footer = () => {
  return (
    <>
    <div className="">
    <FooterTop/>
    <div>
      <div className="flex w-[1400px] m-auto pt-[40px]">
      
        <ul className="px-[15px] w-[318px]">
          <li className="mb-[16px]">
            <NavLink className="text-[20px] font-bold">Ma'lumotlar</NavLink>
          </li>
          <li className="mb-[8px] text-[#64748b]">
            <NavLink>Ko'p so'raladigan savollar</NavLink>
          </li>
          <li className="mb-[8px] text-[#64748b]">
            <NavLink>Yangiliklar</NavLink>
          </li>
          <li className="mb-[8px] text-[#64748b]">
            <NavLink>Blog</NavLink>
          </li>
          <li className="mb-[8px] text-[#64748b]">
            <NavLink>Bizning brendlarimiz</NavLink>
          </li>
          <li className="mb-[8px] text-[#64748b]">
            <NavLink>Asaxiydagi karyerasi</NavLink>
          </li>
          <li className="mb-[8px] text-[#64748b]">
            <NavLink>Muddatli toʻlov ofertasi</NavLink>
          </li>
          <li className="mb-[8px] text-[#64748b]">
            <NavLink>Ommaviy oferta</NavLink>
          </li>
          <li className="mb-[8px] text-[#64748b]">
            <NavLink>Biz haqimizda</NavLink>
          </li>
          <li className="mb-[8px] text-[#64748b]">
            <NavLink>Sayt xaritasi</NavLink>
          </li>
        </ul>
        <ul className="px-[15px] w-[348px]">
          <li className="mb-[16px]">
            <NavLink className="text-[20px] font-bold">Biz bilan aloqa</NavLink>
          </li>
          <li className="mb-[8px]  text-[#64748b]">
            <NavLink className={"flex items-center"}>
              <FaPhoneAlt />
              <span className="pl-[10px]"> +998 71 200 01 05</span>
            </NavLink>
          </li>
          <li className="mb-[8px]  text-[#64748b]">
            <NavLink className={"flex items-center"}>
              <MdOutlineEmail />
              <span className="pl-[15px]"> info@asaxiy.uz</span>
            </NavLink>
          </li>
          <li className="mb-[8px]  text-[#64748b]">
            <NavLink className={"flex items-center"}>
              <PiTelegramLogoBold />
              <span className="pl-[10px]">Telegram bot</span>
            </NavLink>
          </li>
          <li className="mb-[8px]   text-[#64748b]">
            <NavLink className={"flex items-center"}>
              <GrLocation />
              <span className="pl-[10px]">
                Chilonzor ko'chasi, 45/2, Toshkent
              </span>
            </NavLink>
          </li>
          <li className="my-[20px]">
            <NavLink className="text-[20px] font-bold">
              Sodiqlik dasturlari
            </NavLink>
          </li>
          <li className="mb-[8px] text-[#64748b]">
            <NavLink>"El-yurt ishonchi" statusi</NavLink>
          </li>
          <li className="mb-[8px] text-[#64748b]">
            <NavLink>«Asaxiy Plus»</NavLink>
          </li>
          <li className="mb-[8px] text-[#64748b]">
            <NavLink>«Asaxiy Plus» ofertasi</NavLink>
          </li>
        </ul>
        <ul className="flex flex-col gap-[10px] px-[15px] w-[348px]">
          <li className="mb-[16px]  ">
            <NavLink className="text-[20px] font-bold">
              Yetkazib berish va do'konlar
            </NavLink>
          </li>
          <li className="w-[254px]  p-[16px] rounded-[15px]  bg-[#f2f2f7]">
            <NavLink className={"flex items-center justify-between"}>
              <img src="./src/assets/icons/store.svg" alt="" />
              Bizning do'konlar
              <MdNavigateNext className="mt-[3px]" />
            </NavLink>
          </li>
          <li className="w-[254px] p-[16px] rounded-[15px] bg-[#f2f2f7]">
            <NavLink className={"flex items-center justify-between"}>
              <img
                className="w-[20px]"
                src="./src/assets/icons/delivery-point.svg"
                alt=""
              />
              Olib ketish punktlari
              <MdNavigateNext className="mt-[3px]" />
            </NavLink>
          </li>
          <li className="w-[254px]  p-[16px] rounded-[15px] bg-[#f2f2f7]">
            <NavLink className={"flex items-center justify-between"}>
              <img
                className="w-[20px]"
                src="./src/assets/icons/delivery-footer.svg"
                alt=""
              />
              Yetkazib berish
              <MdNavigateNext className="mt-[3px]" />
            </NavLink>
          </li>
        </ul>
        <div className="px-[15px] w-[348px]">
          <h1 className="text-[20px] font-bold mb-[16px]">To'lov turlari</h1>
          <ul className="grid grid-cols-2 gap-[17px] ">
            <li className="w-[151px] bg-[#f2f2f7] rounded-[10px] h-[54px] flex  justify-around items-center">
              <NavLink>
                <img className="" src="./src/assets/icons/uzum.svg" alt="" />
              </NavLink>
            </li>
            <li className="w-[151px] bg-[#f2f2f7] rounded-[10px] h-[54px] flex  justify-around items-center">
              <NavLink className={"flex items-center"}>
                <img src="./src/assets/icons/payme.svg" alt="" />
              </NavLink>
            </li>
            <li className="w-[151px] bg-[#f2f2f7] rounded-[10px] h-[54px] flex  justify-around items-center">
              <NavLink className={"flex items-center"}>
                <img src="./src/assets/icons/visa.svg" alt="" />
              </NavLink>
            </li>
            <li className="w-[151px] bg-[#f2f2f7] rounded-[10px] h-[54px] flex  justify-around items-center">
              <NavLink className={"flex items-center"}>
                <img src="./src/assets/icons/mastercard.svg" alt="" />
              </NavLink>
            </li>
            <li className=" w-[151px] bg-[#f2f2f7] rounded-[10px] h-[54px] flex  justify-around items-center">
              <NavLink className={"flex items-center"}>
                <img src="./src/assets/icons/humo.svg" alt="" />
              </NavLink>
            </li>
            <li className=" w-[151px] bg-[#f2f2f7] rounded-[10px] h-[54px] flex  justify-around items-center">
              <NavLink className={"flex items-center"}>
                <img src="./src/assets/icons/uzcard.svg" alt="" />
              </NavLink>
            </li>
          </ul>
          <h2 className="text-[20px] font-bold mt-[30px] pb-[15px]">
            Biz ijtimoiy tarmoqlarda
          </h2>
          <ul className="flex gap-[15px]">
            <li className=" text-[#64748b] hover:text-[#006BFF]">
              <NavLink>
                <FaFacebook />{" "}
              </NavLink>
            </li>
            <li className=" text-[#64748b] hover:text-[#006BFF]">
              <NavLink>
                <FaTelegram />{" "}
              </NavLink>
            </li>
            <li className=" text-[#64748b] hover:text-[#006BFF]">
              <NavLink>
                <FaInstagram />{" "}
              </NavLink>
            </li>
            <li className=" text-[#64748b] hover:text-[#006BFF]">
              <NavLink>
                <FaYoutube />{" "}
              </NavLink>
            </li>
            <li className=" text-[#64748b] hover:text-[#006BFF]">
              <NavLink>
                <FaRss />{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-[30px] text-[#64748b]">
        <hr />
      </div>
      <div className="text-center pb-[30px] text-[#64748b]">
        <span>
          2015 - 2025 Internet-do’kon asaxiy.uz: Maishiy texnikalar va
          boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga
          oshiriladi. Barcha huquqlar himoyalangan.
        </span>
      </div>
    </div>
    </div>
    </>
  );
};

export default Footer;
