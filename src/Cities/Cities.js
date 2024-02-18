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

  const handleDeleteTimezone = (city) => {
    setTimezones((prev) => prev.filter((timezone) => timezone.city !== city));
    console.log(`${city} clicked`);
  };

  return (
    <>
      {timezones.map((location) => (
        <Card
          key={location.city}
          timezone={location.timezone}
          city={location.city}
          time={location.time ? location.time.toFormat("HH:mm:ss") : ""}
          onDelete={handleDeleteTimezone}
        />
      ))}
    </>
  );
};
export default Cities;
