import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
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
        <button className="px-5 py-3 text-white font-bold bg-green-400 rounded-md text-sm">
          prendre un CALL
        </button>
      </a>
    );
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen w-full gap-3 px-3 pb-7 bg-black text-white">
      <div className="w-full h-1/2 md:w-1/2 order-2 md:order-1  md:min-h-[500px] md:flex md:flex-col md:items-start space-y-6 md:justify-center  p-3">
        <div className="">
          <h1 className="md:text-5xl text-3xl  font-bold">
            Besoin d&apos;une Solution
            <br /> Web ? Parlons-en !
          </h1>
        </div>
        <div>
          <h2>
            Je suis disposé a vous accordé un call ou un meeting pour definir
            les contours de ce projet que vous portez
          </h2>
        </div>
        <div>
          <WhatsAppLink />
        </div>
      </div>
      <div className="relative h-1/2 w-full order-1 md:order-2 flex-1 md:w-1/2 md:min-h-[500px] md:rounded-lg rounded-md">
        <Image
          src={"/hearder.webp"}
          alt="Armand Lepri header presentation"
          fill
          className="object-cover md:object-contain rounded-md "
        />
      </div>
    </div>
  );
};

export default Header;
