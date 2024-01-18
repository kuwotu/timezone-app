import Card from "../UI/Card";

const Cities = ({ locationsData }) => {
  const allCities = locationsData.map((location, index) => {
    return (
      <Card
        key={index}
        timezone={location.timezone}
        city={location.city}
      ></Card>
    );
  });

  return allCities;
};
export default Cities;
