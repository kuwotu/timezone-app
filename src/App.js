import styles from "./App.module.css";
import Form from "./Form/Form";
import Cities from "./Cities/Cities.js";
import { useState } from "react";

function App() {
  const [timezones, setTimezones] = useState([]);

  return (
    <div className={styles.App}>
      <header className={styles.font}>
        <p>Welcome to the app!</p>
      </header>
      <Form setTimezones={setTimezones} timezones={timezones} />
      <Cities setTimezones={setTimezones} timezones={timezones} />
    </div>
  );
}

export default App;
