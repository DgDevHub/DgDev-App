import Image from "next/image";
import style from "./Contato.module.css"
import Section from "@/components/Section/Section";
import Divider from "@/components/Divider/Divider";
import Icon from "@/components/Icon/Icon";

export default function Contato() {


  return (
    <>
    <Section IsHeightAuto={true} IsColumn={true}>
         <Divider hasBackground={true}  colors={["var(--background)", "var(--background)", "var(--background)"]} h2="CONTATO" p="Onde me encontrar?" />

        <div className={style.container}>
        <Icon link="" icon="/Images/email.png" title="Email" p="diegosilvacarvalhodev@gmail.com"/>

        <Icon link="https://www.twitch.tv/devedg/" icon="/Images/twitch.png" title="Twitch" p="DeveDg"/>

        <Icon link="https://www.instagram.com/desenvolvendocomdg/" icon="/Images/instagram.png" title="Instagram" p="Desenvolvendocomdg"/>

        <Icon link="https://www.linkedin.com/in/diego-silva-de-carvalho-82581a326/" icon="/Images/linkedin.png" title="Linkedin" p="Diego Silva"/>
        </div>
    </Section>
    </>
  );
}
