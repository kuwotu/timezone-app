import { useRef } from "react";

const Form = ({ setLocationsData }) => {
  const locationElement = useRef();

  // const [location, setLocation] = useState("");

  function formOnSubmit(event) {
    event.preventDefault();
    // setLocation(locationElement.current.value);

    fetch(
      `https://api.api-ninjas.com/v1/timezone?city=${locationElement.current.value}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.REACT_APP_TIMEZONE_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setLocationsData((prevState) => [...prevState, data]);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <form onSubmit={formOnSubmit}>
        <label>Find the timezone in</label>
        <input type="text" ref={locationElement} placeholder=""></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
