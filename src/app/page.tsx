
import Home from "@/app/sections/Home/Home";
import Sobre from "@/app/sections/Habilidades/Habilidades";
import Projetos from "./sections/Projetos/Projetos";
import Contato from "./sections/Contato/Contato";

export default function Main() {
  return (
    <>
      <div id="Home"><Home /></div>
      <div id="Habilidades"><Sobre /></div>
      <div id="Projetos"><Projetos /></div>
      <div id="Contato"><Contato /></div>
    </>
  );
}
