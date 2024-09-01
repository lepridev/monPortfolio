import React from "react";
import SkillBox from "./SkillBox";

type Props = { image: string; title: string; desc: string; btn: string };

const SkillSection = (props: Props) => {
  const skills = [
    {
      image: "smartmockups.png",
      title: "Application web",
      desc: "Une application web coder en Nextjs pour Cambridge International School Ekressin Grand-Bassam ",
      btn: "Voir",
      link: "http://cise.edu.ci",
    },
    {
      image: "kayPrestige.png",
      title: "Site Vitrine",
      desc: "Un site vitrine coder en Nextjs pour l'entreprise KayPrestige Spécialisée dans la confection de macaron thermo-collant, de maillots de sport, de polo.",
      btn: "Voir",
      link: "http://kayprestige.ci",
    },
    {
      image: "guideLotissement.png",
      title: "Application web",
      desc: "Application web coder en Nextjs pour la chefferie de Gbougbo Dabou en vue de numeriser les données des enregistrements des lots dans le guide villageois",
      btn: "Voir",
      link: "",
    },
    {
      image: "ecommerceMobile.png",
      title: "Application mobile Ios/Andoid",
      desc: "Application d'e-commerce pour une entreprise de commerce en ligne",
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
