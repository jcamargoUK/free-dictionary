"use client";

import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { LuTwitter } from "react-icons/lu";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
export default function Footer() {
  return (
    <section
      className="
      w-[60%]
      h-16
      shadow-2xl
      flex 
      flex-row
      m-auto 
      text-center
      mb-0
      
      "
      
    >
      <h1 className=" flex m-auto text-l text-gray text-pink-600 ">Julio Camargo</h1>
      <div className=" flex m-auto text-2xl text-gray space-x-10">
        <Link href="https://github.com/jcamargoUK">
          <AiFillGithub className=" w-6 h-6 hover:text-red-600 text-pink-600" />
        </Link>
        <Link href="https://twitter.com/jcamargo75">
          <LuTwitter className=" w-6 h-6 hover:text-red-600 text-pink-600" />
        </Link>
        <Link href="https://www.linkedin.com/in/julio-camargo-developer/">
          <BsLinkedin className=" w-6 h-6 hover:text-red-600 text-pink-600" />
        </Link>
      </div>
    </section>
  );
}
