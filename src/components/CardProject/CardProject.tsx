"use client";

import React, { useState } from "react";
import styles from "./CardProject.module.css";
import { useFetchRepo } from "./useFetchRepo"; // Importe o hook

interface CardProjectProps {
  title?: string;
  image: string;
  technologies: string[];
  owner: string;
  repo: string;
  link?: string;
  site?: string; // Adicionando a propriedade para o link do site
}

const CardProject: React.FC<CardProjectProps> = ({
  image,
  technologies,
  owner,
  repo,
  link,
  site,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Usando o hook para buscar os dados do repositório
  const { data, loading, error } = useFetchRepo(owner, repo);

  // Verifica se o token está disponível (isso deve ser configurado na variável de ambiente)
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar repositório: {error}</p>;

  // Lógica para definir o estilo do botão quando o repositório for privado
  const isPrivate = token && data?.private;

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <div className={styles.overlay}>
          <h2 className={styles.title}>{title || data?.name}</h2>
          <div className={styles.techContainer}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.tech}>{tech}</span>
            ))}
          </div>
        </div>
      )}

      <img src={image} className={styles.image} />

      {isHovered && (
        <div className={styles.info}>
          <p className={styles.date}>
            {data?.updated_at
              ? `Última atualização em: ${new Date(data.updated_at).toLocaleDateString()}`
              : "Data de criação não disponível"}
          </p>

          <div className={styles.buttonContainer}>
            {/* Botão para visitar o repositório */}
            {isPrivate ? (
              <button className={`${styles.button} ${styles.privateButton}`} disabled>
                Privado
              </button>
            ) : (
              <a
                href={link || data?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Repositório
              </a>
            )}
            
            {/* Botão para visitar o site */}
            {site && (
              <a
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Ver Site
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardProject;