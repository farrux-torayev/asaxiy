import React from 'react';
import { NavLink } from 'react-router';

const NavListBottom = () => {
    return (
        <div className=''>
            <ul className=' flex justify-between font-[500] cursor-pointer gap-[20px] py-[17px] bg-white'>
                <li className=" hover:text-[#006BFF] ">
                    <NavLink>
                        Chegirmalar
                    </NavLink>
                </li>
                <li className=" hover:text-[#006BFF] ">
                    <NavLink>
                        0-0-6
                    </NavLink>
                </li>
                <li className=" hover:text-[#006BFF] ">
                    <NavLink>
                        Smartfonlar
                    </NavLink>
                </li>
                <li className=" hover:text-[#006BFF] ">
                    <NavLink>
                        Maishiy texnika
                    </NavLink>
                </li>
                <li className=" hover:text-[#006BFF] ">
                    <NavLink>
                       Kitoblar
                    </NavLink>
                </li>
                <li className=" hover:text-[#006BFF] ">
                    <NavLink>
                      Noutbuklar
                    </NavLink>
                </li>
                <li className=" hover:text-[#006BFF] ">
                    <NavLink>
                        Bestsellar 2024
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default NavListBottom;
