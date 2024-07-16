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
import { MdLightbulbOutline } from "react-icons/md";
import { MdLightbulb } from "react-icons/md";
import { HiClipboardList } from "react-icons/hi";

const Navbar = (props: any) => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");

  const menuItems = [
    { icon: <HiClipboardList size={25} className="mr-4"/>, text: "ToDoLists", href: "todo"},
    { icon: <BiCalendar size={25} className="mr-4" />, text: "Calendar" , href: "calendar"},
    { icon: <BiCalendarEdit size={25} className="mr-4" />, text: "Edit Categories", href: "edit"},
    { icon: <DiAptana size={25} className="mr-4" />, text: "Settings", href: "settings"},
    { icon: <BiSolidUserCircle size={25} className="mr-4" />, text: "Account", href: "account" },
    { icon:   theme==="light" ? 
              <MdLightbulbOutline size={25} className="mr-4" /> : 
              <MdLightbulb size ={25} className="mr-4"/>,
              text: "Theme" },
  ];

  return (
    <>
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
            {menuItems.map(({ icon, text, href}, index) => {
              return (
                <div key={index} className=" py-4">
                  <a
                  key = {index}
                  href = {href} 
                  className="text-xl flex cursor-pointer rounded-md mx-auto p-2 hover:bg-sky-200">
                    {icon} {text}
                  </a>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
      {props.children}
      </>  
  );
};

export default Navbar;