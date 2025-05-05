import CardProject from '@/components/CardProject/CardProject';
import React from 'react';
import style from "./page.module.css"
const App = () => {
  return (
  <div className={style.controller}>
    
  <CardProject
  title="Pão de Alho"
  image="/Images/back.jpg"
  technologies={["React", "TypeScript", "Node.js"]}
  owner="DgDevHub"   // Nome do dono do repositório
  repo="DgDev-App"   // Nome do repositório
  link="https://github.com/DgDevHub/DgDev-App"
  />
  <CardProject
  image="/Images/back.jpg"
  technologies={["React", "TypeScript", "Node.js"]}
  owner="DgDevHub"   // Nome do dono do repositório
  repo="Projeto-Audote"   // Nome do repositório
  link="https://github.com/DgDevHub/DgDev-App"
  />

  </div>
  );
};

export default App;
