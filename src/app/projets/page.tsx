import ProjetBox from "@/components/ProjetBox";
import Image from "next/image";
import React from "react";

type Props = {};

const ProjetsPage = (props: Props) => {
  const projets = [
    {
      image: "smartmockups.png",
      title: "Application web",
      desc: "Une application web pour Cambridge International School Ekressin Grand-Bassam",
      btn: "Voir",
    },
    {
      image: "kayPrestige.png",
      title: "Site Vitrine",
      desc: "Un site vitrine pour l'entreprise KayPrestige Spécialisée dans la confection de macaron thermo-collant, de maillots de sport, de polo.",
      btn: "Voir",
    },
    {
      image: "guideLotissement.png",
      title: "Application web Guide Villageois ",
      desc: "Application web pour la chefferie de Gbougbo Dabou pour l'enregistrement des lots dans le guide villageois",
      btn: "Voir",
    },
    {
      image: "ecommerceMobile.png",
      title: "Application mobile Ios/Andoid",
      desc: "Application d'e-commerce pour une entreprise de commerce en ligne",
      btn: "Voir",
    },
    {
      image: "archive.png",
      title: "Application mobile Ios/Andoid",
      desc: "Application d'e-commerce pour une entreprise de commerce en ligne",
      btn: "Voir",
    },
  ];

  return (
    <div className="md:p-10 p-3  max-w-7xl mx-auto">
      <div className="my-5">
        <h1 className="text-3xl font-bold text-center">
          Projets Personnel & Projets Professionnel
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-5 p-5">
        {projets.map((projet, index) => (
          <ProjetBox
            image={projet.image}
            title={projet.title}
            desc={projet.desc}
            btn={projet.btn}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjetsPage;
