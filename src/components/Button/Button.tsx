"use client"
import React from "react";
import style from "./Button.module.css";

export interface ButtonProps {
  text: string;
  large: number;
  high?: number;
  colors: string[]; 
  download?: string;
  link?: string;
  isDownloader?: boolean;
}

export default function Button({ text, large, colors, download, isDownloader, link, high }: ButtonProps) {
  
  const handleClick = () => {
    if (isDownloader && link) {
      const a = document.createElement("a");
      a.href = link; 
      a.download = download ?? "arquivo.pdf"; 
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else if (link) {
      window.open(link, "_blank"); 
    }
  };

  return (
    <button
      className={style.button}
      onClick={handleClick}
      style={{
        width: `${large}px`,
        height: `${high}px`,
        color: `var(${colors[0]})`,
        background: `var(${colors[1]})`,
      }}
    >
      {text}
    </button>
  );
}
