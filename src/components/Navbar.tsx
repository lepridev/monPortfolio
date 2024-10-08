"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaHamburger, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleOpen = () => {
    setIsMobile(!isMobile);
  };

  const handleClose = () => {
    setIsMobile(false);
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
    // {
    //   title: "Services",
    //   link: "/services",
    // },
    // {
    //   title: "CV",
    //   link: "/moncv",
    // },
  ];

  const ExternalLink = ({ href, children }: any) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

  const WhatsAppLink = () => {
    // Numéro WhatsApp Business et message par défaut
    const phoneNumber = "2250799520702"; // Remplacez par votre numéro
    const message = "Bonjour, je suis intéressé par vos services."; // Message prédéfini (facultatif)

    // URL pour WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    return (
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp
          size={30}
          color="white"
          className="cursor-pointer hover:translate-x-1"
        />
      </a>
    );
  };

  return (
    <div className="h-24 px-5 md:px-10 bg-black flex items-center justify-between relative">
      <div
        className="relative h-full w-1/5 flex items-center justify-start"
        onClick={() => router.push("/")}
      >
        <Image
          src={"/logojust.png"}
          alt="Logo Armand Lepri portfolio d'armand lepri"
          className="object-contain cursor-pointer"
          fill
          onClick={handleClose}
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
              <li
                className={`text-slate-100 text-sm ${
                  pathname === menu.link && " border-b-2 border-red-400 p-1 "
                }`}
              >
                {menu.title}
              </li>
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
                <li
                  className={`text-black text-lg font-bold ${
                    pathname === menu.link && " border-b-2 border-red-400 p-1 "
                  }`}
                  onClick={handleOpen}
                >
                  {menu.title}{" "}
                </li>
              </Link>
            </ul>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 text-black ">
          <ExternalLink
            href="https://github.com/lepridev"
            className="cursor-pointer"
          >
            <FaGithub
              size={30}
              color="white"
              className="cursor-pointer hover:translate-x-1"
            />
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/lepri-armand-akpro-66b150271/"
            className="cursor-pointer"
          >
            <FaLinkedin
              size={30}
              color="white"
              className="cursor-pointer hover:translate-x-1"
            />
          </ExternalLink>

          <ExternalLink
            href="https://web.facebook.com/profile.php?id=100091951637653"
            className="cursor-pointer"
          >
            <FaFacebook
              size={30}
              color="white"
              className="cursor-pointer hover:translate-x-1"
            />
          </ExternalLink>

          <WhatsAppLink />
        </div>
      </div>
      <div className="w-1/5 hidden md:flex items-center justify-center text-slate-100 gap-4 text-sm">
        <ExternalLink
          href="https://github.com/lepridev"
          className="cursor-pointer"
        >
          <FaGithub
            size={30}
            color="white"
            className="cursor-pointer hover:translate-x-1"
          />
        </ExternalLink>
        <ExternalLink
          href="https://www.linkedin.com/in/lepri-armand-akpro-66b150271/"
          className="cursor-pointer"
        >
          <FaLinkedin
            size={30}
            color="white"
            className="cursor-pointer hover:translate-x-1"
          />
        </ExternalLink>

        <ExternalLink
          href="https://web.facebook.com/profile.php?id=100091951637653"
          className="cursor-pointer"
        >
          <FaFacebook
            size={30}
            color="white"
            className="cursor-pointer hover:translate-x-1"
          />
        </ExternalLink>

        <WhatsAppLink />
      </div>
    </div>
  );
};

export default Navbar;
