
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection"; 
import Home from "@/app/sections/Home/Home";
import Sobre from "@/app/sections/Habilidades/Habilidades";
import Projetos from "./sections/Projetos/Projetos";
import Contato from "./sections/Contato/Contato";

export default function Main() {
  return (
    <>
      <AnimatedSection><div id="home"><Home /></div></AnimatedSection>
      <AnimatedSection><div id="Habilidades"><Sobre /></div></AnimatedSection>
      <AnimatedSection><div id="Projetos"><Projetos /></div></AnimatedSection>
      <AnimatedSection><div id="contato"><Contato /></div></AnimatedSection>
    </>
  );
}
