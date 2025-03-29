import Image from "next/image";
import Home from "@/app/sections/Home/Home";
import Sobre from "@/app/sections/Sobre/Sobre";
import style from "@/app/page.module.css"

export default function Main() {
  return (
    <>
      <Home />
      <Sobre/>
    </>
  );
}
