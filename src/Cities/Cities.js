import { useEffect } from "react";
import Card from "../UI/Card";
import { DateTime } from "luxon";

const Cities = ({ setTimezones, timezones }) => {
  const updateTimezones = () => {
    setTimezones((prevTimezones) => {
      return prevTimezones.map((zone) => ({
        ...zone,
        time: DateTime.local().setZone(zone.timezone),
      }));
    });
  };

  useEffect(() => {
    const interval = setInterval(updateTimezones, 1000);
    return () => clearInterval(interval);
  }, []);

  const capitalize = (city) => {
    return city.charAt(0).toUpperCase() + city.slice(1);
  };

  return (
    <>
      {timezones.map((location, index) => (
        <Card
          key={index}
          timezone={location.timezone}
          city={capitalize(location.city)}
          time={location.time ? location.time.toFormat("HH:mm:ss") : ""}
        />
      ))}
    </>
  );
};
export default Cities;
