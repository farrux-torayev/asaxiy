import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { NavLink } from "react-router";

const FooterTop = () => {
  return (
    <div className="">
      <div className=" ">
        <ul className="w-[1300px] m-auto flex gap-[10px] px-[16px] border my-[50px] py-[24px] rounded-[35px]  bg-white justify-between ">
          <li className="w-[350px]  ">
            <NavLink className={"flex items-center "}>
              <img
                className="w-[48px] pt-[15px]"
                src="./src/assets/icons/market.svg"
                alt=""
              />

              <div className="ml-[24px] pt-[15px]">
                <h1 className="font-bold">Endi bozorga borishga hojat yo'q</h1>
                <p>
                  Bizda qulay narxlar va uyga <br /> yetkazib berish mavjud
                </p>
              </div>
            </NavLink>
          </li>
          <li className="w-[254px]  flex  flex-col items-center ">
            <NavLink className={"flex items-center"}>
              <img
                className="pt-[15px]"
                src="./src/assets/icons/fast-delivery.svg"
                alt=""
              />
              <div className="ml-[24px] pt-[15px]">
                <h1 className="font-bold">Tez yetkazib berish</h1>
                <p>
                  Bizning xizmatimiz sizni <br /> ajablantiradi
                </p>
              </div>
            </NavLink>
          </li>
          <li className="w-[270px]  flex  flex-col items-center">
            <NavLink className={"flex items-center "}>
              <img className="" src="./src/assets/icons/return.svg" alt="" />
              <div className="ml-[24px]">
                <h1 className="font-bold">Siz uchun qulayliklar</h1>
                <p>
                  Nosozlik yuzaga kelganda <br /> tez rasmiylashtirish va <br />{" "}
                  qaytarish kafolati
                </p>
              </div>
            </NavLink>
          </li>
          <li className="w-[254px]  flex  flex-col items-center">
            <NavLink className={"flex items-center "}>
              <img
                className="pt-[15px]"
                src="./src/assets/icons/card.svg"
                alt=""
              />
              <div className="ml-[24px] pt-[15px]">
                <h1 className="font-bold">Bo'lib to'lash</h1>
                <p>
                  3, 6 yoki 12 oy davomida <br /> oldindan to'lov yo'q
                </p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
