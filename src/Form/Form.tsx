import React, { MutableRefObject, useRef } from "react";
import { TimezoneProps, TimezoneWithDateTime } from "../types/types";

const Form = ({ setTimezones, timezones }: TimezoneProps) => {
  const cityInput: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const capitalise = (city: string) => {
    return city.charAt(0).toUpperCase() + city.slice(1);
  };

  const fetchTimezonesData = async (
    cityInput: MutableRefObject<HTMLInputElement | null>
  ): Promise<TimezoneWithDateTime | null> => {
    if (cityInput.current?.value) {
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
    return null;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValue = cityInput.current?.value.trim();
    if (!inputValue) {
      return;
    }

    const city = capitalise(inputValue);
    if (timezones.find((timezone) => timezone.city === city)) {
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
    return;
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
