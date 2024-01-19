import styles from "./App.module.css";
import Form from "./Form/Form";
import Cities from "./Cities/Cities.js";
import { useState } from "react";

function App() {
  const [locationsData, setLocationsData] = useState([]);

  return (
    <div className={styles.App}>
      <header className={styles.font}>
        <p>Welcome to the app!</p>
      </header>
      <Form setLocationsData={setLocationsData} />
      <Cities locationsData={locationsData}></Cities>
    </div>
  );
}

export default App;
