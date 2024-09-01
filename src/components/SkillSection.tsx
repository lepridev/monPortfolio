import React from "react";
import SkillBox from "./SkillBox";

type Props = { image: string; title: string; desc: string; btn: string };

const SkillSection = (props: Props) => {
  const skills = [
    {
      image: "smartmockups.png",
      title: "Application web",
      desc: "Une application web développée en Next.js pour Cambridge International School à Ekressin, Grand-Bassam. ",
      btn: "Voir",
      link: "http://cise.edu.ci",
    },
    {
      image: "kayPrestige.png",
      title: "Site Vitrine",
      desc: "Un site vitrine développé en Next.js pour l'entreprise KayPrestige, spécialisée dans la confection de macarons thermocollants, de maillots de sport et de polos.",
      btn: "Voir",
      link: "http://kayprestige.ci",
    },
    {
      image: "guideLotissement.png",
      title: "Application web",
      desc: "Une application web développée en Next.js pour la chefferie de Gbougbo à Dabou, visant à numériser les données d'enregistrement des lots dans le guide villageois.",
      btn: "Voir",
      link: "",
    },
    {
      image: "ecommerceMobile.png",
      title: "Application mobile Ios/Andoid",
      desc: "Une application e-commerce développée pour une entreprise de vente en ligne.",
      btn: "Voir",
      link: "",
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
          link={skill.link}
        />
      ))}
    </div>
  );
};

export default SkillSection;
