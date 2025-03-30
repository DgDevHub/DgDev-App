import Image from "next/image";
import Section from "@/components/Section/Section";
import Header from "@/components/Header/Header";
import style from "@/app/sections/Home/Home.module.css"
import Button from "@/components/Button/Button";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";



export default function Home() {

    const links = [
        { href: "/" },
        { href: "/about" },
        { href: "/contact" },
      ];
      
      const textos = ["Início", "Sobre", "Contato"];

  return (
    <>
    <Header links={links} textos={textos}>
    <HamburgerMenu/>
    </Header>
    <Section isOrange = {false} IsHeightAuto = {false} >
      <div className={style.controller_responsive}>
        <div className={style.container}>
        <Image 
        src="/Images/forma.png" 
        alt="MiniDg" 
        width={150} 
        height={0} 
        className={style.img}
        />
          <h2> DIEGO SILVA </h2>
          <h1> FULL STACK WEB </h1>
          <p> 
          "Sou um desenvolvedor com experiência em Next.js, React, TypeScript e CSS, especializado em criar APIs eficientes e soluções escaláveis. Atuei como Trainee na Criptonic & Co., aprimorando minhas habilidades em desenvolvimento web full stack. Tenho domínio em POO, React Hooks e arquitetura de software, sempre buscando inovação e otimização."
          </p>
          <div className={style.buttons}>
          <Button 
            text="Download CV"
            large={186}
            high={40} 
            colors={["--cor-texto", "--cor-fundo"]}
            download="Portfólio Diego Silva.pdf"
            link="/Images/OIP.png"
            isDownloader={true}
          />
          <Button 
            text="Fale comigo"
            large={186}
            high={40}
            colors={["--cor-texto", "--cor-fundo"]}
            link="https://www.linkedin.com/in/diego-silva-de-carvalho-82581a326/"
          />
          </div>
        </div>
      <Image 
        src="/Images/forma.png" 
        alt="MiniDg" 
        width={300} 
        height={150} 
        className={style.img}
        />
      </div>
      </Section>
      </>
  )}