import React from "react";
import styles from "./Card.module.css";

export interface CardProps {
  icon: string; 
  title: string;
  description: string;
  colors: string[];
  isBackground?:string;
}

export default function Card({ icon, title, description, colors, isBackground }: CardProps) {
  return (
    <div className={styles.container}>
    <div className={styles.card}
    style={{
        color: `var(${colors[0]})`,
        border: `5px solid var(${colors[1]})`,
        backgroundColor: `var(${isBackground})`,
    }}
    >
      <img src={icon} alt="Ícone" className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
    </div>
  );
}
