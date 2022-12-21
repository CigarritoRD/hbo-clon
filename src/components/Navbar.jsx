import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='overflow-hidden fixed w-full gap-4 px-4 h-14 items-center z-[100] bg-[#02021C] text-white flex justify-between'>
      <h1 className='text-xl md:text-3xl font-bold cursor-pointer'>HBOMAX</h1>
      <ul className='flex gap-4 items-center text-sm font-medium'>
        <Link to={"/iniciar-sesion"}>
          <li className='cursor-pointer hover:text-slate-300 duration-300 text-[8px] md:text-sm'>
            INGRESA
          </li>
        </Link>
        <Link to={"/crear-cuenta"}>
          <li className=' text-[10px] md:text-sm cursor-pointer px-6 py-2 rounded-full bg-purple-700 hover:bg-purple-900 duration-300'>
            SUSCRIBETE AHORA
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
