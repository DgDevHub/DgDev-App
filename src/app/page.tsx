
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection"; 
import Home from "@/app/sections/Home/Home";
import Sobre from "@/app/sections/Sobre/Sobre";
import Projetos from "./sections/Projetos/Projetos";
import Contato from "./sections/Contato/Contato";

export default function Main() {
  return (
    <>
      <AnimatedSection><Home /></AnimatedSection>
      <AnimatedSection><Sobre /></AnimatedSection>
      <AnimatedSection><Projetos /></AnimatedSection>
      <AnimatedSection><Contato /></AnimatedSection>
    </>
  );
}
