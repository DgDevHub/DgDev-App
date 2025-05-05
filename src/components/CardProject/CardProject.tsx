"use client";

import React, { useState } from "react";
import styles from "./CardProject.module.css";
import { useFetchRepo } from "./useFetchRepo";

interface CardProjectProps {
  title?: string;
  image: string;
  technologies: string[];
  owner: string;
  repo: string;
  link?: string;
  site?: string;
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

  const { data, loading, error } = useFetchRepo(owner, repo);

  const isPrivate = data?.private;

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar repositório: {error}</p>;

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
