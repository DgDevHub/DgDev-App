import Image from "next/image";
import style from "./Icon.module.css";

interface IconProps {
  title: string;
  icon: string;
  p: string;
  link: string;
}

export default function Icon({ title, icon, p, link }: IconProps) {
  const isMail = link.startsWith("mailto:");

  return (
    <article className={style.container}>
      <div className={style.containerIcon}>
        <a
          href={link}
          target={isMail ? "_self" : "_blank"}
          rel="noopener noreferrer"
        >
          <Image
            src={icon}
            alt={title}
            width={40}
            height={40}
            className={style.img}
          />
        </a>
      </div>
      <h2 className={style.h2}>{title}</h2>
      <p className={style.p}>{p}</p>
    </article>
  );
}
