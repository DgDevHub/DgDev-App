import style from "./Icon.module.css"

interface IconProps{
    title: string;
    icon: string;
    p: string;
    link: string;
}

export default function Icon({ title, icon, p, link} : IconProps){

    return (
        <>
        
    <article className={style.container}>
        <div className={style.containerIcon}>
        <a href={link}><img src={icon}/></a>
        </div>
        <h2> {title} </h2>
        <p> {p} </p>
    </article>
        </>
      );
}