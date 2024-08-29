import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SkillSection from "@/components/SkillSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <SkillSection image={""} title={""} desc={""} btn={""} />
    </main>
  );
}
