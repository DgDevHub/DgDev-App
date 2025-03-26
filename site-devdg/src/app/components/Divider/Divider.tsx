import Image from "next/image";
import style from "./Divider.module.css";
import Section from "../Section/Section";

interface DividerProps {
    h2: string;
    p: string;
    background?:string;
  }

export default function Divider({h2,p,background}:DividerProps) {

  return (
    <Section IsHeightAuto={true}>
      <div className={style.divider}
      style={{
        backgroundColor: `${background}`,
      }}
      >
        <h2>{h2}</h2>
        <p>
        <span className={style.line}></span> {p} <span className={style.line}></span>        </p>
      </div>
    </Section>
  );
}
