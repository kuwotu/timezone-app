import React, { MutableRefObject, useRef } from "react";

interface Timezone {
  city: string;
  timezone: string;
  time: null;
}

interface FormProps {
  setTimezones: React.Dispatch<
    React.SetStateAction<{ city: string; timezone: string; time: null }[]>
  >;
  timezones: Timezone[];
}

const Form = ({ setTimezones, timezones }: FormProps) => {
  const cityInput: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const capitalise = (city: string) => {
    return city.charAt(0).toUpperCase() + city.slice(1);
  };

  const fetchTimezonesData = async (
    cityInput: MutableRefObject<HTMLInputElement | null>
  ) => {
    if (cityInput.current) {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/timezone?city=${cityInput.current.value}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": process.env.REACT_APP_TIMEZONE_API_KEY!,
            },
          }
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching city data:", error);
        return null;
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cityInput.current && cityInput.current.value.trim() === "") {
      return;
    }

    const city = cityInput.current!.value;
    if (timezones.find((timezone) => timezone.city === capitalise(city))) {
      cityInput.current!.value = "";
      return;
    }

    const timezoneData = await fetchTimezonesData(
      cityInput as MutableRefObject<HTMLInputElement | null>
    );
    if (timezoneData) {
      const newData = {
        ...timezoneData,
        city: capitalise(timezoneData.city),
        time: null,
      };
      setTimezones((prevTimezones) => [...prevTimezones, newData]);
    }
    cityInput.current!.value = "";
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
