import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { DiAptana } from "react-icons/di";
import { BiSolidUserCircle } from "react-icons/bi";
import { BiCalendarEdit } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <BiCalendar size={25} className="mr-4" />, text: "Calendar" },
    { icon: <BiCalendarEdit size={25} className="mr-4" />, text: "Edit Categories" },
    { icon: <DiAptana size={25} className="mr-4" />, text: "Settings" },
    { icon: <BiSolidUserCircle size={25} className="mr-4" />, text: "Account" },
  ];

  return (
    <div className="max-w mx-auto flex justify-between items-center p-4 shadow-md">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Multi<span className="font-bold">Task</span>
        </h1>
      </div>

    

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Multi<span className="font-bold">Task</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {menuItems.map(({ icon, text }, index) => {
              return (
                <div key={index} className=" py-4">
                  <li className="text-xl flex cursor-pointer rounded-md mx-auto p-2 hover:bg-sky-200">
                    {icon} {text}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;