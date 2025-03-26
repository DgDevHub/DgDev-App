import Image from "next/image";
import Section from "../../components/Section/Section";
import Header from "../../components/Header/Header";
import style from "@/app/test/page.module.css"
import Divider from "../../components/Divider/Divider";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";



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
          <h2> DIEGO SILVA </h2>
          <h1> FULL STACK WEB </h1>
          <p> 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis 
          risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis
          euismod semper. Curabitur blandit tempus porttitor. Aenean lacinia 
          bibendum nulla sed consectetur. Donec id elit non mi porta gravida at
          eget metus. Integer posuere erat a ante venenatis dapibus posuere veli
          aliquet."
          </p>
          <Button 
            text="Download CV"
            large={200} 
            colors={["--cor-texto", "--cor-fundo"]}
            download="Portfólio Diego Silva.pdf"
            link="/Images/OIP.png"
            isDownloader={true}
          />
        </div>
      <Image 
        src="/Images/MiniDg.svg" 
        alt="MiniDg" 
        width={380} 
        height={150} 
        className={style.img}
        />
      </div>
      </Section>
      <Divider background="var(--background)" h2="SOMOS LÍDERES NO SETOR" p="Confiança e qualidade garantida" />
      <Card
        colors={["--foreground", "--black"]}
        isBackground="--black"
        icon="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
        title="Next.js"
        description="Esse projeto foi desenvolvido emcima desse framework"
      />
    </>
  );
}
