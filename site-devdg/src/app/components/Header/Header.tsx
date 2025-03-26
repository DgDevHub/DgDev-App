import styles from "./Header.module.css";

interface HeaderProps {
  links: {href: string;} [];
  textos: string[];
  children?: React.ReactNode;
}

export default function Header({ links, textos, children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          {links.map((link, index) => (
            <li key={index} className={styles.navItem}>
              <a href={link.href} className={styles.navLink}>
                {textos[index]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </header>
  );
}
