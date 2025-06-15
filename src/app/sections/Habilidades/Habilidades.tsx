import Image from "next/image";
import Section from "@/components/Section/Section";
import style from "./Habilidades.module.css"
import Divider from "@/components/Divider/Divider";
import Card from "@/components/Card/Card";
import { describe } from "node:test";



export default function Sobre() {

    const links = [
        { href: "/" },
        { href: "/about" },
        { href: "/contact" },
      ];
      
      const textos = ["Início", "Sobre", "Contato"];

  return (
    <>
      <Divider hasBackground={true} colors={["var(--background)", "var(--background)", "var(--background)"]} h2="HABILIDADES" p="O que eu sei usar?" />
      <Section IsOrange = {true} IsHeightAuto = {true} >
        <div className={style.group_cards}>
      <Card
        icon="/Images/ts-white.png"
        title="TypeScript"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--background", ""]}
        hasBackground="--black"
      />
      <Card
        icon="/Images/next.png"
        title="Next.js"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--background", ""]}
        hasBackground="--black"
      />
      <Card
        icon="/Images/react.png"
        title="React"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--background", ""]}
        hasBackground="--black"
      />
      <Card
        icon="/Images/css.png"
        title="CSS5"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--background", ""]}
        hasBackground="--black"
      />
      <Card
        icon="/Images/api.png"
        title="Api RESTful"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--background", ""]}
        hasBackground="--black"
      />
      <Card
        icon="/Images/tailwind.png"
        title="Tailwind"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--background", ""]}
        hasBackground="--black"
      />
      <Card
        icon="/Images/node.png"
        title="Node.js"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--background", ""]}
        hasBackground="--black"
      />
      <Card
        icon="/Images/html.png"
        title="HTML5"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--background", ""]}
        hasBackground="--black"
      />
      <Card
        icon="/Images/js.png"
        title="JavaScript"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--background", ""]}
        hasBackground="--black"
      />
      <Card
        icon="/Images/ps.png"
        title="Photoshop"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--background", ""]}
        hasBackground="--black"
      />
      <Card
        icon="/Images/sass.png"
        title="Sass"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--background", ""]}
        hasBackground="--black"
      />
      </div>
      </Section>
    </>
  );
}
