import styles from "./App.module.css";
import Card from "./UI/Card";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.font}>
        <p>Welcome to the app!</p>
      </header>
      <Card timezone="GMT + 1" city="London" time="07:00:00" />
    </div>
  );
}

export default App;
