import React from "react";
import SkillBox from "./SkillBox";

type Props = { image: string; title: string; desc: string; btn: string };

const SkillSection = (props: Props) => {
  const skills = [
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
  ];
  return (
    <div className="md:grid md:grid-cols-2 space-y-4 md:max-w-5xl py-5 mx-auto gap-5">
      {skills.map((skill, index) => (
        <SkillBox
          key={index}
          image={skill.image}
          title={skill.title}
          desc={skill.desc}
          btn={skill.btn}
        />
      ))}
    </div>
  );
};

export default SkillSection;
