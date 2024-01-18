import styles from "./App.module.css";
import Form from "./Form/Form";
import Cities from "./Cities/Cities.js";
import { DateTime } from "luxon";
import { useState } from "react";

function App() {
  const [locationsData, setLocationsData] = useState([]);

  // useEffect(() => {
  //   setInterval(() => {
  //     // const now = DateTime.now();
  //     const now = DateTime.local({ zone: "America/New_York" });
  //     setLondonTime(now.toLocaleString(DateTime.TIME_WITH_SECONDS));
  //   }, 1000);
  // }, [londonTime]);

  return (
    <div className={styles.App}>
      <header className={styles.font}>
        <p>Welcome to the app!</p>
      </header>
      <Form setLocation={setLocationsData} />
      <Cities locationsData={locationsData}></Cities>
    </div>
  );
}

export default App;
