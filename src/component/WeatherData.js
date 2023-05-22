import React, { Fragment, useEffect } from "react";
import "./main.css";
import { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./weatherdata.css";

export default function WeatherData() {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});
  const [img, setImg] = useState(null);
  const [button, setButton] = useState("");

  function KelvinToCelcius(k) {
    // Kelvin to Celsius
    return (k - 273.15).toFixed(0);
  }

  const API_KEY = "351cedefa5d22f9dbfe224d72e6c0dd0";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const requestOptions = {
    method: "POST",
  };

  const searchWeather = async (e) => {
    // if (e.key === "Enter") {
    await fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data);
        setImg("../weather/cloudy.png");

        setLocation("");
      })
      .catch((err) => console.log(err));
    // }
  };

  return (
    <div>
      <div className="input__bar">
        <input
          type="text"
          id="search"
          placeholder="Search City"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          autoComplete="off"
        />
        <button id="btn" onClick={searchWeather}>
          Search
        </button>
        <div className="buttons">
          <button>Paris</button>
          <button>Seoul</button>
          <button>Macao</button>
          <button>New York</button>
          <button>Hanoi</button>
          <button>Busan</button>
        </div>
      </div>

      {result.name && (
        <Fragment>
          <div>
            <WeatherIcon
              location={`${result.name}, ${result.sys.country}`}
              temp={KelvinToCelcius(result.main.temp)}
              image={img}
            />
          </div>
          <div className="boxes">
            {/* {result.name}, {result.sys.country} */}
            <div className="itembox">
              {KelvinToCelcius(result.main.temp)} &deg;C
            </div>
            <div className="itembox">{result.main.humidity}% humidity</div>
            <div className="itembox">{result.weather[0].description}</div>
            <div className="itembox">
              {KelvinToCelcius(result.main.temp_max)} &deg;C max
            </div>
            <div className="itembox">
              {KelvinToCelcius(result.main.temp_min)} &deg;C min
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
