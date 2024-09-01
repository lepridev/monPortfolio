"use client";

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
import { usePathname } from "next/navigation";

type Props = {};

const Footer = (props: Props) => {
  const pathname = usePathname();
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
    <div className="min-h-24 p-5 md:grid grid-cols-5 bg-black justify-self-center text-white max-w-7xl gap-3 justify-items-center mx-auto">
      <div className=" ">
        <div className="flex flex-col items-start justify-center md:space-y-10 space-y-3 mb-4">
          <h2 className="text-red-400">Rejoignez-moi sur:</h2>
          <div className="flex items-center justify-center gap-5">
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
            <Link
              className={`text-slate-100 text-sm ${
                pathname === "/" && " border-b-2 border-red-400 p-1 "
              }`}
              href={"/"}
            >
              <h1 className="text-sm">Accueil</h1>
            </Link>
            <Link
              className={`text-slate-100 text-sm ${
                pathname === "/apropos" && " border-b-2 border-red-400 p-1 "
              }`}
              href={"/apropos"}
            >
              <h1 className="text-sm">A-propos</h1>
            </Link>
            <Link
              className={`text-slate-100 text-sm ${
                pathname === "/projets" && " border-b-2 border-red-400 p-1 "
              }`}
              href={"/projets"}
            >
              <h1 className="text-sm">Projets</h1>
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
