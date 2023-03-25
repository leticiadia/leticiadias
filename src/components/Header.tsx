import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>leticia</p>
        <div className={styles.dot}></div>
        <p>dias</p>
      </div>

      <nav>
        <ul className={styles.navbar}>
          <li>
            <a href="">Home</a>
          </li>

          <li>
            <a href="">Sobre</a>
          </li>

          <li>
            <a href="">Projetos</a>
          </li>

          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
