"use client"

import React, { useState } from 'react';
import style from './HamburgerMenu.module.css'; 

const HamburgerMenu: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={style.container}>

      <button
        id="hamburger-button"
        className={style.hamburgerButton}
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>


      <nav
        className={style.navMenu}
        style={{ right: isOpen ? '0' : '-100%' }} 
      >
       
        <button
          id="close-button"
          className={style.closeButton}
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
        
        <a className={style.a} href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a className={style.a} href="#Habilidades" onClick={() => setIsOpen(false)}>Habilidades</a>
        <a className={style.a} href="#Projetos" onClick={() => setIsOpen(false)}>Projetos</a>
        <a className={style.a} href="#contato" onClick={() => setIsOpen(false)}>Contato</a>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
