import React from "react";
import styles from "./Card.module.css";

export interface CardProps {
  icon: string; 
  title: string;
  description?: string;
  colors: string[];
  hasBackground?:string;
  hasColumnInverter?:boolean;
  hasMarginBottom?: number;
}

export default function Card({ icon, title, description, colors, hasBackground, hasColumnInverter, hasMarginBottom }: CardProps) {
  
  const inverterColumn = hasColumnInverter  === true
  ? "column-reverse"
  : "column"; 

  return (
    <div className={styles.card}
    style={{
        flexDirection: inverterColumn,
        color: `var(${colors[0]})`,
        border: `5px solid var(${colors[1]})`,
        backgroundColor: `var(${hasBackground})`,
    }}
    >
      <img src={icon} alt="Ícone" className={styles.icon} />
      <h2 className={styles.title} style={{
        marginBottom: `${hasMarginBottom}px`,
      }}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
