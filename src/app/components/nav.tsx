"use client";

import { BiBook } from "react-icons/bi";
import DropdownComponent from "./dropdownMenu";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Nav = () => {
  return (
      <section className=" flex w-80 mt-[-1.5rem] mb-4">
        <BiBook className="w-10 h-10 text-pink-600" />
        <DropdownComponent /> 
      </section>
  );
};

export default Nav;
