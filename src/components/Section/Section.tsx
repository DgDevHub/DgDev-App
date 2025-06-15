import style from "./Section.module.css";

interface SectionProps {
  children: React.ReactNode;
  marginButtom?: number;
  marginTop?: number;
  IsColumn?: boolean;
  IsHeightAuto?: boolean;
  IsOrange?: boolean;
}

export default function Section({
  children,
  marginButtom,
  marginTop,
  IsColumn,
  IsHeightAuto,
  IsOrange,
}: SectionProps) {
  const isAutoHeight = IsHeightAuto ? "auto" : "30rem";
  const isColumn = IsColumn ? "column" : "row";

  // Cores de acordo com o tema
  const baseColor = IsOrange ? "var(--title-colorTwo)" : "var(--background)";
  const midColor = IsOrange ? "var(--subbackgroundgradientorange)" : "var(--subbackgroundgradient)";
  const endColor = IsOrange ? "var(--title-colorTwo)" : "var(--background)";

  const gradient = `linear-gradient(270deg, ${baseColor}, ${midColor}, ${endColor})`;

  return (
    <section
      className={style.section}
      style={{
        backgroundImage: gradient,
        paddingBottom: `${marginButtom}px`,
        marginTop: `${marginTop}px`,
        flexDirection: isColumn,
        height: isAutoHeight,
      }}
    >
      {children}
    </section>
  );
}
