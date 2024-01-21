import Card from "../UI/Card";
import { DateTime } from "luxon";

// useEffect(() => {
//   setInterval(() => {
//     // const now = DateTime.now();
//     const now = DateTime.local({ zone: "America/New_York" });
//     setLondonTime(now.toLocaleString(DateTime.TIME_WITH_SECONDS));
//   }, 1000);
// }, [londonTime]);

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const Cities = ({ locationsData }) => {
  const allCitiesData = locationsData.map((location, index) => ({
    ...location,
    time: today.toLocaleDateString(),
    key: index,
  }));

  console.log(allCitiesData);
  return (
    <>
      {allCitiesData.map((location, index) => (
        <Card
          key={index}
          timezone={location.timezone}
          city={location.city}
          time={location.time}
        />
      ))}
    </>
  );
};
export default Cities;
