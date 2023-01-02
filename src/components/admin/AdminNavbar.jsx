import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const AdminNavbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className='z-[100] fixed h-20 w-full bg-gradient-to-b from-black/60 flex px-8 justify-between text-slate-300'>
      <div
        className={` shadow-md py-6 px-8 bg-transparent h-screen w-3/5 md:w-1/5 absolute left-0 top-0 translate-x-[-100%] transition-all ease-in-out duration-200 opacity-0 ${
          menu && "translate-x-0 opacity-100 bg-gray-900"
        }`}
      >
        <Link className='hover:text-slate-100 transition-colors'>
          {menu ? (
            <IoMdClose size={25} onClick={() => setMenu(!menu)} />
          ) : (
            <RxHamburgerMenu size={25} onClick={() => setMenu(!menu)} />
          )}
        </Link>
        <ul className='py-8'>
          <li className='py-2'>
            <Link to={"/home"}>
              <h2 className='md:text-3xl font-bold text-xl'>Inicio</h2>
            </Link>
          </li>
          <li className='py-2'>
            <Link to={"/peliculas"} className='text-xl hover:text-slate-100 transition-colors '>
              Peliculas
            </Link>
          </li>
          <li className='py-2'>
            <Link to={"/series"} className='text-xl hover:text-slate-100 transition-colors '>
              Series
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-6 font-medium'>
        <Link className='hover:text-slate-100 transition-colors'>
          <RxHamburgerMenu size={25} onClick={() => setMenu(!menu)} />
        </Link>
        <Link to={"/peliculas"} className='hover:text-slate-100 transition-colors hidden md:block'>
          Peliculas
        </Link>
        <Link to={"/series"} className='hover:text-slate-100 transition-colors hidden md:block'>
          Series
        </Link>
      </div>
      <div className='flex items-center gap-3'>
        <Link to={"/home"}>
          <h2 className='md:text-3xl font-bold text-xl'>HBOMAX</h2>
        </Link>
      </div>
      <div className='flex items-center gap-3 font-medium'>
        <Link to={"/search"}>
          <BiSearch size={25} className='cursor-pointer' />
        </Link>

        <div className='flex items-center gap-2'>
          <div className='cursor-pointer h-8 w-8 md:h-12 md:w-12 overflow-hidden flex items-center rounded-full border-2 border-pink-400 shadow-md'>
            <img
              className='w-full h-full object-cover'
              src='https://img.freepik.com/vector-premium/mujer-avatar-mujer-negocios_38295-63.jpg?w=996'
              alt=''
            />
          </div>
          <p className='hidden md:block'>Maycolk Hernandez</p>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
