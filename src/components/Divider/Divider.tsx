import Image from "next/image";
import style from "./Divider.module.css";
import Section from "../Section/Section";

interface DividerProps {
    h2: string;
    p: string;
    hasBackground?:string;
    colors?:string;
  }

export default function Divider({h2,p,hasBackground,colors}:DividerProps) {

  return (
      <div className={style.divider}
      style={{
        backgroundColor: `${hasBackground}`,
      }}
      >
        <h2>{h2}</h2>
        <p style={{
          color: `${colors}`,
        }}>
        <span className={style.line}></span> {p} <span className={style.line}></span>        </p>
      </div>
  );
}
