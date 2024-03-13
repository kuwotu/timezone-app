import styles from "./App.module.css";
import Form from "./Form/Form";
import Cities from "./Cities/Cities";
import { useState } from "react";
import React from "react";
import { TimezoneWithDateTime } from "./types/types";

function App() {
  const [timezones, setTimezones] = useState<TimezoneWithDateTime[]>([]);

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
