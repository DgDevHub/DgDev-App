import Image from "next/image";
import style from "./Contato.module.css"
import Section from "@/components/Section/Section";
import Divider from "@/components/Divider/Divider";
import Icon from "@/components/Icon/Icon";

export default function Contato() {


  return (
    <>
    <Section IsHeightAuto={true} IsColumn={true}>
         <Divider hasBackground="var(--black)" colors="var(--title-colorTwo)" h2="Contato" p="Onde me contratar" />

        <div className={style.container}>
        <Icon link="" icon="/Images/email.png" title="Email" p="Diego13112019@outlook.com"/>

        <Icon link="https://www.twitch.tv/devedg/" icon="/Images/twitch.png" title="Twitch" p="DeveDg"/>

        <Icon link="https://www.instagram.com/desenvolvendocomdg/" icon="/Images/instagram.png" title="Instagram" p="Desenvolvendocomdg"/>

        <Icon link="https://www.linkedin.com/in/diego-silva-de-carvalho-82581a326/" icon="/Images/linkedin.png" title="Linkedin" p="Diego Silva"/>
        </div>
    </Section>
    </>
  );
}
