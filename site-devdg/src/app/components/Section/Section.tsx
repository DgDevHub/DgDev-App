import style from "./Section.module.css"

interface SectionProps{
    children: React.ReactNode;
    isOrange?: boolean;
    marginButtom?: number;
    marginTop?: number;
    IsColumn?: boolean;
    IsHeightAuto?:boolean;

}

export default function Section({children, isOrange, marginButtom, marginTop, IsColumn, IsHeightAuto} : SectionProps){

    const IsAutoHeight = IsHeightAuto === true
    ? "auto"
    : "20rem"

    const bkColor =
    isOrange === true
      ? "#c1761a"
      : "#383838";

    const Iscolumn = 
    IsColumn === true ? "column" : "row"

    return (
        <section
          className={style.section}
          style={{
            backgroundColor: bkColor, 
            paddingBottom: `${marginButtom || 0}px`,
            marginTop: `${marginTop || 0}px`,
            flexDirection: Iscolumn,
            height: IsAutoHeight,
          }}
        >
          {children}
        </section>
      );
}