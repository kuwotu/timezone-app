import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.App}>
      <header className={styles.font}>
        <p>Welcome to the app!</p>
      </header>
    </div>
  );
}

export default Header;
