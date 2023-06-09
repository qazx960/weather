import React, { Fragment } from "react";
import "./main.css";
import { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./weatherdata.css";
import "./weatherIcon.css";

export default function WeatherData() {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});
  const [data, setData] = useState([]);

  function KelvinToCelcius(k) {
    // Kelvin to Celsius
    return (k - 273.15).toFixed(0);
  }

  const API_KEY = "c35f61a8744d2ba33d2db9d7c7f143a7";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const requestOptions = {
    method: "GET",
  };

  // render weather
  useEffect(() => {
    const weather = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=SEOUL&appid=${API_KEY}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        // setState(data);
        console.log(data);
        setData(data);
      })

      .catch((err) => {
        console.log(err);
        return null;
      });
  }, []);

  const searchWeather = async () => {
    // if (e.key === "Enter") {
    await fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data);

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
        />
        <button id="btn" onClick={searchWeather} value={location}>
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
            />
          </div>
          <div className="boxes">
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
