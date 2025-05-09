import CardProject from "@/components/CardProject/CardProject";
import Image from "next/image";
import style from "./Projetos.module.css"
import Section from "@/components/Section/Section";
import Divider from "@/components/Divider/Divider";

export default function Projetos() {


  return (
    <>
    <Section IsHeightAuto={true} IsColumn={true}>
    <Divider hasBackground="var(--black)" colors="var(--title-colorTwo)" h2="Projetos" p="Veja meus trabalhos" />
    <div className={style.controllerCardsProjects}>
    <CardProject
        title="Portfólio Dev"
        image="/Images/portfolio.png"
        technologies={["React", "TypeScript", "Next.js","CSS5","Api","CSS5","Photoshop"]}
        owner="DgDevHub"   
        repo="DgDev-App"  
        site="https://dg-dev-app.vercel.app"
        />
    <CardProject
        title="Cliente Dr.Erick"
        image="/Images/erick.png"
        technologies={["HTML5", "CSS5", "JavaScript"]}
        owner="DgDevHub"   
        repo="Site-Client-Erick"  
        site="https://esradv.com.br/"
        />
        <CardProject
        title="Audote"
        image="/Images/audote.png"
        technologies={["HTML5", "CSS3", "JavaScript","POO"]}
        owner="DgDevHub"   
        repo="Projeto-Audote" 
        site="https://mini-projeto-m2-adocao.vercel.app/"  
    />
    </div>
    </Section>
    </>
  );
}
