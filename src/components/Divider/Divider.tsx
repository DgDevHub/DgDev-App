import Image from "next/image";
import style from "./Divider.module.css";
import Section from "../Section/Section";

interface DividerProps {
  h2: string;
  p: string;
  hasBackground?: boolean;
  colors?: string[];
  hasMarginTop?: string;
}

export default function Divider({ h2, p, hasBackground, colors, hasMarginTop }: DividerProps) {
    // Cores de acordo com o tema
  const baseColor = hasBackground ? "var(--title-colorTwo)" : "var(--background)";
  const midColor = hasBackground ? "var(--subbackgroundgradientorange)" : "var(--subbackgroundgradient)";
  const endColor = hasBackground ? "var(--title-colorTwo)" : "var(--background)";

  const gradient = `linear-gradient(270deg, ${baseColor}, ${midColor}, ${endColor})`;

  return (
    <div
      className={style.divider}
      style={{
        backgroundImage: gradient,
        marginTop: hasMarginTop
      }}
    >
      <h2 className={style.h2} style={{ color: colors?.[0] }}>
        {h2}
      </h2>
      <p className={style.p} style={{ color: colors?.[1] }}>
        <span className={style.line}
        style={{backgroundColor: colors?.[2]}}
        ></span> {p} <span className={style.line} style={{backgroundColor: colors?.[2]}}></span>
      </p>
    </div>
  );
}
