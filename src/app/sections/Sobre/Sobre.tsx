import Image from "next/image";
import Section from "@/components/Section/Section";
import style from "./Sobre.module.css"
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
      <Divider hasBackground="var(--black)" colors="var(--title-colorTwo)" h2="HABILIDADES" p="O que eu sei usar?" />
      <Section isOrange = {false} IsHeightAuto = {true} >
        <div className={style.group_cards}>
      <Card
        icon="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
        title="Next.js"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--title-colorOne", ""]}
        hasBackground="--background"
      />
      <Card
        icon="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
        title="Next.js"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--title-colorOne", ""]}
        hasBackground="--background"
      />
      <Card
        icon="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
        title="Next.js"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--title-colorOne", ""]}
        hasBackground="--background"
      />
      <Card
        icon="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
        title="TypeScript"
        hasColumnInverter={true}
        hasMarginBottom={3}
        colors={["--title-colorOne", ""]}
        hasBackground="--background"
      />
      </div>
      </Section>
      <Section isOrange = {false} >
              <>
              </>
      </Section>
    </>
  );
}
