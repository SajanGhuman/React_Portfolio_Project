import React, { useEffect, useState } from "react";
import RightNav from "./rightNav";  
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const [nav, setNav] = useState(true);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const offStyles = "bg-white w-[50px] h-[5px] rounded transition-all";
  const onStyles = "bg-custom-gray w-[50px] h-[5px] rounded";

  return (
    <div className="select-none absolute text-white right-[100px] top-[10px]">
      <div
        onClick={() => setNav(!nav)}
        className="flex flex-col gap-2 relative left-[125px] top-3 x-sm:flex sm:hidden z-20"
      >
        <div
          className={
            nav === true
              ? `bg-white w-[50px] h-[5px] rounded transition-all`
              : `bg-custom-off-white w-[50px] h-[5px] rounded rotate-[45deg] translate-y-[12px] translate-x-[10px] duration-500`
          }
        ></div>
        <div
          className={
            nav === true
              ? `bg-white w-[50px] h-[5px] rounded transition-all`
              : `bg-custom-off-white w-[50px] h-[5px] rounded translate-x-[1000px] duration-700`
          }
        ></div>
        <div
          className={
            nav === true
              ? `bg-white w-[50px] h-[5px] rounded transition-all `
              : `bg-custom-off-white w-[50px] h-[5px] rounded rotate-[-45deg] translate-y-[-12px] translate-x-[10px] duration-700`
          }
        ></div>
      </div>
      <RightNav nav={nav} />
      <ul
        className={
          nav
            ? `flex gap-8 text-custom-off-black-1 z-30 text-[20px] font-bold transition-all duration-[500] no:flex-col no:relative no:left-[1000px] no:top-[40px] no  :justify-center sm:flex sm:flex-row sm:left-[40px] sm:top-[40px]`
            : `flex gap-8 text-custom-off-black-1 z-30 text-[20px] font-bold transition-all duration-[500] x-sm:flex-col x-sm:relative x-sm:left-[60px] x-sm:top-[40px] x-sm:justify-center sm:flex sm:flex-row `
        }
      >
        {/* <ScrollLink to="about" smooth={true} duration={500}>
          <li className=" hover:text-red-500 hover:translate-y-[-2px] transition-all duration-500 cursor-pointer">
            Stack Used
          </li>
        </ScrollLink> */}
        <ScrollLink to="about" smooth={true} duration={500}>
          <li className="hover:text-red-500 hover:translate-y-[-2px] transition-all duration-500 cursor-pointer">
            About me
          </li>
        </ScrollLink>
        {/* <Link to={"contact"}>
          <li className=" hover:text-red-500 hover:translate-y-[-2px] transition-all duration-500 cursor-pointer">
            Skills
          </li>
        </Link> */}
        <li className=" hover:text-red-500 hover:translate-y-[-2px] transition-all duration-500 cursor-pointer">
          <ScrollLink to="projects" smooth={true} duration={500} offset={200}>
            Projects
          </ScrollLink>
        </li>
        <li className=" hover:text-red-500 hover:translate-y-[-2px] transition-all duration-500 cursor-pointer">
          <ScrollLink to="setup" smooth={true} duration={500} offset={200}>
            Developer Setup
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
