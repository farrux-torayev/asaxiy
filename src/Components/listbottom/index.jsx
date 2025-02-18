import React from 'react';

const Listbottom = () => {
    return (
        <div>
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
        </div>
    );
}

export default Listbottom;
