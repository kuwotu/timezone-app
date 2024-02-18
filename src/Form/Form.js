import { useRef } from "react";

const Form = ({ setTimezones }) => {
  const cityInput = useRef();

  const fetchTimezonesData = async (cityInput) => {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/timezone?city=${cityInput.current.value}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": process.env.REACT_APP_TIMEZONE_API_KEY,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching city data:", error);
      return null;
    }
  };

  const capitalise = (city) => {
    return city.charAt(0).toUpperCase() + city.slice(1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (cityInput.current.value.trim() === "") {
      return;
    }
    const timezoneData = await fetchTimezonesData(cityInput);
    if (timezoneData) {
      const newData = {
        ...timezoneData,
        city: capitalise(timezoneData.city),
        time: null,
      };
      setTimezones((prevTimezones) => [...prevTimezones, newData]);
    }
    cityInput.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Find the timezone in</label>
        <input type="text" ref={cityInput} placeholder=""></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
