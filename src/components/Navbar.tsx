"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaHamburger, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleOpen = () => {
    setIsMobile(!isMobile);
  };

  const menus = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "A Propos",
      link: "/apropos",
    },
    {
      title: "Projets",
      link: "/projets",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "CV",
      link: "/moncv",
    },
  ];

  return (
    <div className="h-24 px-5 md:px-10 bg-black flex items-center justify-between relative">
      <div className="relative h-full w-1/5 flex items-center justify-start">
        <Image
          src={"/logojust.png"}
          alt="Logo Armand Lepri portfolio d'armand lepri"
          className="object-contain"
          fill
        />
        {/* <span className="md:text-xl text-[12px] ml-2">
          Armand <br /> Lepri
        </span> */}
      </div>
      {isMobile ? (
        <AiOutlineClose
          size={30}
          color="orange"
          onClick={handleOpen}
          className="md:hidden cursor-pointer transition-all ease-in-out"
        />
      ) : (
        <FaHamburger
          className="md:hidden cursor-pointer transition-all ease-in-out"
          size={30}
          color="orange"
          onClick={handleOpen}
        />
      )}

      <div
        className={`md:w-3/5 z-40 md:flex md:items-center md:justify-center md:gap-10  md:flex-row hidden `}
      >
        {menus.map((menu) => (
          <ul key={menu.title}>
            <Link href={menu.link}>
              <li className="text-slate-100 text-sm ">{menu.title} </li>
            </Link>
          </ul>
        ))}
      </div>
      <div
        className={`${
          isMobile ? "flex" : "hidden"
        }  flex flex-col items-center justify-center gap-10  absolute backdrop-blur-sm rounded-md top-24 py-10 right-0 w-[80%] h-[600px]  z-40  md:hidden  `}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          {menus.map((menu) => (
            <ul key={menu.title}>
              <Link href={menu.link}>
                <li className="text-white font-bold text-base ">
                  {menu.title}{" "}
                </li>
              </Link>
            </ul>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 text-black ">
          <FaFacebook size={30} color="blue" />
          <FaLinkedin size={30} color="blue" />
          <FaWhatsapp size={30} color="green" />
          <FaGithub size={30} color="black" />
        </div>
      </div>
      <div className="w-1/5 hidden md:flex items-center justify-center text-slate-100 gap-4 text-sm">
        <FaFacebook size={30} color="white" />
        <FaLinkedin size={30} color="white" />
        <FaWhatsapp size={30} color="white" />
        <FaGithub size={30} color="white" />
      </div>
    </div>
  );
};

export default Navbar;
