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
        <Icon link="/" icon="/Images/ts.png" title="Email" p="Diego13112019@outlook.com"/>
        </div>
    </Section>
    </>
  );
}
