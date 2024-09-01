import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaJsSquare,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiFirebaseFill, RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiXcode } from "react-icons/si";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="min-h-24 p-5 md:grid grid-cols-5 bg-black justify-self-center text-white max-w-7xl gap-3 justify-items-center mx-auto">
      <div className=" ">
        <div className="flex flex-col items-start justify-center md:space-y-10 space-y-3 mb-4">
          <h2 className="text-red-400">Rejoignez-moi sur:</h2>
          <div className="flex items-center justify-center gap-5">
            <FaGithub size={30} color="white" />
            <FaLinkedin size={30} color="white" />
            <FaWhatsapp size={30} color="white" />
            <FaFacebook size={30} color="white" />
          </div>
          <div className="relative  w-full h-5">
            <Image
              src={"/logojust.png"}
              alt="Armand Lepri portfolio"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-start justify-center space-y-3 mb-4  md:space-y-10">
          <h2 className="text-red-400">Coordonnées</h2>
          <div className="flex flex-col items-start justify-center gap-3">
            <div className="cursor-pointer space-y-2">
              <h1 className="text-base font-bold">LEPRI A. Armand</h1>
              <p className="text-sm">lepridev35@gmail.com</p>
            </div>
            <div className="cursor-pointer space-y-2">
              <h1 className="text-base font-bold">
                +225 01 71 89 00 91
                <br /> +225 05 02 21 07 02
              </h1>
              <p className="text-sm">Dabou</p>
              <p className="text-sm">Côte d&apos;Ivoire</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-start justify-center space-y-3 mb-4  md:space-y-10">
          <h2 className="text-red-400">Liens</h2>
          <div className="flex flex-col items-start justify-center gap-3">
            <Link className="cursor-pointer" href={"/apropos"}>
              <h1 className="text-sm">A-propos</h1>
            </Link>
            <Link className="cursor-pointer" href={"/apropos"}>
              <h1 className="text-sm">Projets</h1>
            </Link>
            <Link className="cursor-pointer" href={"/apropos"}>
              <h1 className="text-sm">Services</h1>
            </Link>
            <Link className="cursor-pointer" href={"/apropos"}>
              <h1 className="text-sm">CV</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-start justify-center space-y-3 mb-4  md:space-y-10">
          <h2 className="text-red-400">Stack & Techno</h2>
          <div className="flex flex-col items-start justify-center gap-3">
            <h1 className="text-sm">Full-Stack</h1>
            <div className="flex items-center justify-start flex-wrap gap-5">
              <FaJsSquare size={30} color="white" />
              <FaReact size={30} color="white" />
              <RiNextjsFill size={30} color="white" />
              <FaNodeJs size={30} color="white" />
              <SiMongodb size={30} color="white" />
              <RiFirebaseFill size={30} color="white" />
              <RiTailwindCssFill size={30} color="white" />
              <SiXcode size={30} color="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-start justify-center space-y-3 mb-4  md:space-y-10">
          <h2 className="text-red-400 ">Experiences</h2>
          <div className="flex flex-col items-start justify-center gap-3">
            <div className="cursor-pointer space-y-2">
              <h1 className="text-base font-bold">
                CODILEC-ENERGY
                <br /> 2020{" "}
              </h1>
              <p className="text-sm">
                Creation et Maintenance application web de l&apos;entreprise
              </p>
            </div>
            <div className="cursor-pointer space-y-2">
              <h1 className="text-base font-bold">
                FREELANCER
                <br /> 2024
              </h1>
              <p className="text-sm">
                Creation et Maintenance d&apos;application web pour particulier
                et entreprise
              </p>
              <p className="text-sm">
                Creation et Maintenance d&apos;application mobile pour
                particulier
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
