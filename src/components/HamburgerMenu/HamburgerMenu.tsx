"use client"

import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css'; 

const HamburgerMenu: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>

      <button
        id="hamburger-button"
        className={styles.hamburgerButton}
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>


      <nav
        className={styles.navMenu}
        style={{ right: isOpen ? '0' : '-100%' }} 
      >
       
        <button
          id="close-button"
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
        
        <a href="/test">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Serviços</a>
        <a href="/">Contato</a>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
