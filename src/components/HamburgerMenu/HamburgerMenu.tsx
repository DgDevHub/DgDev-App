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
        
        <a className={style.a} href="/test">Home</a>
        <a className={style.a} href="#">Sobre</a>
        <a className={style.a} href="#">Serviços</a>
        <a className={style.a} href="/">Contato</a>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
